/**
 * 产品图册交互脚本
 * - 真正的懒加载：img 使用 data-src + IntersectionObserver，进入视口才设置真实 src
 * - 无限滚动：使用 sentinel（哨兵元素）在滚动到接近底部时自动预加载下一批
 *
 * 依赖：
 * - index.html 里先引入 catalog.js（window.CATALOG）
 */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const categoryList = document.querySelector(".category-list");
  const productsGrid = document.querySelector(".products-grid");
  if (!categoryList || !productsGrid) return;

  const CATALOG =
    window.CATALOG && typeof window.CATALOG === "object" ? window.CATALOG : {};

  // 每批渲染数量（根据你想要的“首屏速度 vs 滚动频率”调整：12/18/24）
  const PAGE_SIZE = 12;

  // 1x1 占位，避免空 src 出现破图图标
  const PLACEHOLDER_SRC =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

  // 进入视口前提前加载的距离（越大越“预加载”，越小越省流量）
  const PREFETCH_ROOT_MARGIN = "900px 0px";

  function normalizeLocalImagePath(path) {
    if (!path) return "";
    let cleanPath = String(path).trim().replace(/\\/g, "/");

    // 严禁外链/内联
    if (/^(https?:)?\/\//i.test(cleanPath) || /^data:/i.test(cleanPath)) {
      return "";
    }

    // 优先保留以“画册/”开头的相对路径
    const albumIndex = cleanPath.indexOf("画册/");
    if (albumIndex >= 0) cleanPath = cleanPath.slice(albumIndex);

    if (cleanPath.startsWith("./")) cleanPath = cleanPath.slice(2);
    if (cleanPath.startsWith("/")) cleanPath = cleanPath.slice(1);

    return cleanPath.startsWith("画册/") ? cleanPath : "";
  }

  function getCategoryNames() {
    return Object.keys(CATALOG || {});
  }

  function getProducts(categoryName) {
    const arr = Array.isArray(CATALOG?.[categoryName])
      ? CATALOG[categoryName]
      : [];
    return arr
      .map((p) => ({
        name: p?.name || "",
        img: normalizeLocalImagePath(p?.img),
        price: p?.price,
      }))
      .filter((p) => p.name || p.img);
  }

  function getImageCount(categoryName) {
    return getProducts(categoryName).filter((p) => !!p.img).length;
  }

  // 分类排序：有图在前，无图在后；同组内按中文名称排序
  const sortedCategoryNames = getCategoryNames().sort((a, b) => {
    const aHasImage = getImageCount(a) > 0;
    const bHasImage = getImageCount(b) > 0;
    if (aHasImage !== bHasImage) return aHasImage ? -1 : 1;
    return String(a).localeCompare(String(b), "zh-CN");
  });

  function renderCategoryList() {
    categoryList.innerHTML = sortedCategoryNames
      .map(
        (name) =>
          `<li class="category-item" data-category="${name}"><span>${name}</span></li>`,
      )
      .join("");
  }

  function setActiveCategory(categoryName) {
    document.querySelectorAll(".category-item").forEach((item) => {
      const isActive =
        (item.dataset.category || item.querySelector("span")?.textContent) ===
        categoryName;
      item.classList.toggle("active", isActive);
    });
  }

  // -------------------------
  // 图片懒加载（data-src -> src）
  // -------------------------
  let imageObserver = null;

  function ensureImageObserver() {
    if (imageObserver) return imageObserver;
    if (!("IntersectionObserver" in window)) return null;

    imageObserver = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const img = entry.target;
          const realSrc = img?.dataset?.src;
          if (realSrc) {
            img.src = realSrc;
            img.removeAttribute("data-src");
          }
          obs.unobserve(img);
        }
      },
      { rootMargin: "250px 0px", threshold: 0.01 },
    );

    return imageObserver;
  }

  function setupLazyLoad(rootEl = document) {
    const imgs = rootEl.querySelectorAll("img[data-src]");
    if (!imgs.length) return;

    const obs = ensureImageObserver();
    if (!obs) {
      // 不支持 IntersectionObserver：直接加载
      imgs.forEach((img) => {
        const realSrc = img?.dataset?.src;
        if (realSrc) {
          img.src = realSrc;
          img.removeAttribute("data-src");
        }
      });
      return;
    }

    imgs.forEach((img) => obs.observe(img));
  }

  // -------------------------
  // 无限滚动 sentinel
  // -------------------------
  const sentinel = document.createElement("div");
  sentinel.className = "infinite-sentinel";
  // 不依赖 CSS：给一个轻量尺寸，确保可被观察到
  sentinel.style.cssText = "width:100%;height:1px;pointer-events:none;";

  // 放在 productsGrid 后面
  productsGrid.insertAdjacentElement("afterend", sentinel);

  const state = {
    activeCategory: "",
    products: [],
    renderedCount: 0,
    loading: false,
    done: false,
  };

  function productCardHtml(product) {
    const productName = product?.name || "";
    const productImage = normalizeLocalImagePath(product?.img);

    const imageHtml = productImage
      ? `<img
            src="${PLACEHOLDER_SRC}"
            data-src="${productImage}"
            alt="${productName}"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
        >`
      : `<div class="product-image-empty"></div>`;

    const priceHtml = product?.price
      ? `
        <p class="product-price">
          <span class="currency">¥:</span>
          <span class="price">${product.price}</span>
        </p>`
      : "";

    return `
      <div class="product-card" data-name="${productName}" data-img="${productImage || ""}">
        <div class="product-image">
          ${imageHtml}
        </div>
        <div class="product-info">
          <h3 class="product-name">${productName}</h3>
          ${priceHtml}
        </div>
      </div>
    `;
  }

  function renderNextBatch() {
    if (state.loading || state.done) return;

    const total = state.products.length;
    if (state.renderedCount >= total) {
      state.done = true;
      return;
    }

    state.loading = true;

    const next = state.products.slice(
      state.renderedCount,
      state.renderedCount + PAGE_SIZE,
    );

    if (!next.length) {
      state.done = true;
      state.loading = false;
      return;
    }

    const html = next.map(productCardHtml).join("");
    productsGrid.insertAdjacentHTML("beforeend", html);

    state.renderedCount += next.length;

    // 对新增图片挂懒加载
    setupLazyLoad(productsGrid);

    state.loading = false;

    if (state.renderedCount >= total) {
      state.done = true;
    }
  }

  function resetGrid() {
    productsGrid.innerHTML = "";
    state.renderedCount = 0;
    state.loading = false;
    state.done = false;
  }

  function switchCategory(categoryName) {
    state.activeCategory = categoryName;

    // 只显示有图的产品（避免空卡片）
    state.products = getProducts(categoryName).filter((p) => !!p.img);

    setActiveCategory(categoryName);

    productsGrid.style.opacity = "0.5";
    productsGrid.style.transform = "translateY(10px)";

    setTimeout(() => {
      resetGrid();

      if (!state.products.length) {
        productsGrid.innerHTML =
          '<div style="padding:16px;color:#666;">该分类暂无图片</div>';
        state.done = true;
      } else {
        renderNextBatch();
      }

      productsGrid.style.opacity = "1";
      productsGrid.style.transform = "translateY(0)";
    }, 120);
  }

  // sentinel 观察器：接近底部时触发加载下一批
  let sentinelObserver = null;

  function ensureSentinelObserver() {
    if (sentinelObserver) return sentinelObserver;
    if (!("IntersectionObserver" in window)) return null;

    sentinelObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // 进入预取范围，加载下一批
          renderNextBatch();
        }
      },
      { rootMargin: PREFETCH_ROOT_MARGIN, threshold: 0.01 },
    );

    sentinelObserver.observe(sentinel);
    return sentinelObserver;
  }

  // 不支持 IntersectionObserver 时：scroll 兜底
  function setupScrollFallback() {
    if ("IntersectionObserver" in window) return;

    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const nearBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 800;
          if (nearBottom) renderNextBatch();
        });
      },
      { passive: true },
    );
  }

  // -------------------------
  // 事件绑定
  // -------------------------
  categoryList.addEventListener("click", (e) => {
    const item = e.target.closest(".category-item");
    if (!item) return;
    const categoryName =
      item.dataset.category || item.querySelector("span")?.textContent;
    if (!categoryName) return;
    switchCategory(categoryName);
  });

  productsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    const productName = (card.dataset.name || "").trim();
    const productImage = normalizeLocalImagePath(card.dataset.img || "");

    const params = new URLSearchParams({
      name: productName,
      img: productImage,
    });

    window.location.href = `detail.html?${params.toString()}`;
  });

  // -------------------------
  // 初始化
  // -------------------------
  renderCategoryList();

  // 默认：优先第一个“有图分类”，否则第一个分类
  const defaultCategory =
    sortedCategoryNames.find((name) => getImageCount(name) > 0) ||
    sortedCategoryNames[0] ||
    "";

  ensureSentinelObserver();
  setupScrollFallback();

  if (defaultCategory) {
    switchCategory(defaultCategory);
  } else {
    productsGrid.innerHTML =
      '<div style="padding:20px;color:#666;">暂无数据</div>';
    state.done = true;
  }
});
