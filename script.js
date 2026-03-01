// 产品图册交互脚本（基于“画册”目录自动生成分类与图片）

document.addEventListener('DOMContentLoaded', function() {
    const categoryList = document.querySelector('.category-list');
    const productsGrid = document.querySelector('.products-grid');

    // 来自 E:\\python\\product_catalog\\画册 的扫描结果（相对路径）
    const categoryProducts = {
        '双头唇彩': [
            { name: '59b5a0bb-e49c-4f85-a2f7-c90521a5c4f7', img: '画册/双头唇彩/59b5a0bb-e49c-4f85-a2f7-c90521a5c4f7.png' },
            { name: 'eb59ba4c-a587-4e89-9ffa-8d6b0a419e12', img: '画册/双头唇彩/eb59ba4c-a587-4e89-9ffa-8d6b0a419e12.png' }
        ],
        '睫毛管': [
            { name: '3c1ec09b-dd89-4d63-8023-17bdb6b11eca', img: '画册/睫毛管/3c1ec09b-dd89-4d63-8023-17bdb6b11eca.png' },
            { name: '528a27d1-29ab-4da1-921e-c1449cf605b8', img: '画册/睫毛管/528a27d1-29ab-4da1-921e-c1449cf605b8.png' },
            { name: '7b816d4a-5d5f-4040-b8f4-c857d29b83e3', img: '画册/睫毛管/7b816d4a-5d5f-4040-b8f4-c857d29b83e3.png' },
            { name: '84488d1a-d6e1-41dd-b406-4efe84e7763f', img: '画册/睫毛管/84488d1a-d6e1-41dd-b406-4efe84e7763f.png' },
            { name: 'baeb78bb-048e-4586-bfe9-3deb83b5602a', img: '画册/睫毛管/baeb78bb-048e-4586-bfe9-3deb83b5602a.png' },
            { name: 'f568247b-37b6-4596-8a55-2fc0e392d08a', img: '画册/睫毛管/f568247b-37b6-4596-8a55-2fc0e392d08a.png' }
        ],
        '口红': [
            { name: '2563a907-d7aa-458f-8041-9e49208eb557', img: '画册/口红/2563a907-d7aa-458f-8041-9e49208eb557.png' },
            { name: '387a5003-bdb3-42fe-bec2-19adf061c50d', img: '画册/口红/387a5003-bdb3-42fe-bec2-19adf061c50d.png' },
            { name: '4386072b-4143-4f2a-a90c-39c2f453dde1', img: '画册/口红/4386072b-4143-4f2a-a90c-39c2f453dde1.png' },
            { name: '5be4b117-028b-4c35-956d-65eb91cf4f68', img: '画册/口红/5be4b117-028b-4c35-956d-65eb91cf4f68.png' },
            { name: '662a8460-ba25-494e-828c-39064e13a5e5', img: '画册/口红/662a8460-ba25-494e-828c-39064e13a5e5.png' },
            { name: '6a17d237-8ddb-4117-ae5e-37b96c75617d', img: '画册/口红/6a17d237-8ddb-4117-ae5e-37b96c75617d.png' },
            { name: '7936ac24-068c-49f6-9be6-7b03dda1e07a', img: '画册/口红/7936ac24-068c-49f6-9be6-7b03dda1e07a.png' },
            { name: 'a1e53c04-fdc6-4180-9a85-efcb3d06cc7c', img: '画册/口红/a1e53c04-fdc6-4180-9a85-efcb3d06cc7c.png' },
            { name: 'a6f118ec-1f3d-4625-aff6-a7372d4fd25f', img: '画册/口红/a6f118ec-1f3d-4625-aff6-a7372d4fd25f.png' },
            { name: 'b0c4a519-1235-44d2-b0fd-dfbda9c172f8', img: '画册/口红/b0c4a519-1235-44d2-b0fd-dfbda9c172f8.png' },
            { name: 'b3064e6c-bf4a-4ee3-85ba-60ab42914d36', img: '画册/口红/b3064e6c-bf4a-4ee3-85ba-60ab42914d36.png' },
            { name: 'bbf770e4-4e19-479c-9d8e-fece94324173', img: '画册/口红/bbf770e4-4e19-479c-9d8e-fece94324173.png' },
            { name: 'c632aabe-8945-44f1-b8c7-ac9df7cf20fa', img: '画册/口红/c632aabe-8945-44f1-b8c7-ac9df7cf20fa.png' },
            { name: 'f590fe44-3f98-45ab-96f6-abdf747b0b55', img: '画册/口红/f590fe44-3f98-45ab-96f6-abdf747b0b55.png' }
        ],
        '吸嘴管': [
        ],
        '双头睫毛': [
        ],
        '唇颊盒': [
            { name: 'd9393b07-2cae-42b7-8d96-6c282887d2a9', img: '画册/唇颊盒/d9393b07-2cae-42b7-8d96-6c282887d2a9.png' }
        ],
        '唇彩管': [
            { name: '01b4ad91-beb0-4c1f-bf67-7bf0d23fe2ca', img: '画册/唇彩管/01b4ad91-beb0-4c1f-bf67-7bf0d23fe2ca.png' },
            { name: '0378c9da-3d57-422b-afa5-50edb37c4e26', img: '画册/唇彩管/0378c9da-3d57-422b-afa5-50edb37c4e26.png' },
            { name: '06567076-5866-4297-9868-f627b64dba89', img: '画册/唇彩管/06567076-5866-4297-9868-f627b64dba89.png' },
            { name: '10509161-5be5-46b2-a186-a6602792501d', img: '画册/唇彩管/10509161-5be5-46b2-a186-a6602792501d.png' },
            { name: '1497b454-064e-45c3-a8e6-d770436d7ada', img: '画册/唇彩管/1497b454-064e-45c3-a8e6-d770436d7ada.png' },
            { name: '18a978d9-645b-4f96-a0f0-dc10a6be7e22', img: '画册/唇彩管/18a978d9-645b-4f96-a0f0-dc10a6be7e22.png' },
            { name: '22bcac60-e60a-4994-af2c-489fc8879f72', img: '画册/唇彩管/22bcac60-e60a-4994-af2c-489fc8879f72.png' },
            { name: '32a3396d-5eff-4002-9861-11816b4f88c6', img: '画册/唇彩管/32a3396d-5eff-4002-9861-11816b4f88c6.png' },
            { name: '4a8629fa-cf8b-411a-bcb0-2841c6fce4d9', img: '画册/唇彩管/4a8629fa-cf8b-411a-bcb0-2841c6fce4d9.png' },
            { name: '4be842a5-46ab-452a-a429-775ecac45c09', img: '画册/唇彩管/4be842a5-46ab-452a-a429-775ecac45c09.png' },
            { name: '4d579591-1de4-4fab-83e2-9d8abf596c5b', img: '画册/唇彩管/4d579591-1de4-4fab-83e2-9d8abf596c5b.png' },
            { name: '5586640c-529c-4478-8128-ac3b4660de6c', img: '画册/唇彩管/5586640c-529c-4478-8128-ac3b4660de6c.png' },
            { name: '57d31296-7892-42c9-a7e3-4d786c299387', img: '画册/唇彩管/57d31296-7892-42c9-a7e3-4d786c299387.png' },
            { name: '59b5a0bb-e49c-4f85-a2f7-c90521a5c4f7', img: '画册/唇彩管/59b5a0bb-e49c-4f85-a2f7-c90521a5c4f7.png' },
            { name: '6089cab0-9c76-4af1-913d-683219de12dd', img: '画册/唇彩管/6089cab0-9c76-4af1-913d-683219de12dd.png' },
            { name: '79a6cfbf-4c36-44a5-9116-980f1931c49b', img: '画册/唇彩管/79a6cfbf-4c36-44a5-9116-980f1931c49b.png' },
            { name: '7b82e856-5933-4a65-b256-3bee986493f7', img: '画册/唇彩管/7b82e856-5933-4a65-b256-3bee986493f7.png' },
            { name: '855d49a7-67f6-4f21-9e73-d7f31772e054', img: '画册/唇彩管/855d49a7-67f6-4f21-9e73-d7f31772e054.png' },
            { name: '905b2b7d-6282-4a39-918c-f9d5ef32ef3b', img: '画册/唇彩管/905b2b7d-6282-4a39-918c-f9d5ef32ef3b.png' },
            { name: 'a05a1f19-b2e7-4d8d-a0f6-6b93857a0e92', img: '画册/唇彩管/a05a1f19-b2e7-4d8d-a0f6-6b93857a0e92.png' },
            { name: 'b65642dc-5333-4fb5-add7-931add49fc1d', img: '画册/唇彩管/b65642dc-5333-4fb5-add7-931add49fc1d.png' },
            { name: 'b6c537d8-3b1e-4cc2-9c39-f804fb60698a', img: '画册/唇彩管/b6c537d8-3b1e-4cc2-9c39-f804fb60698a.png' },
            { name: 'b7fe3583-3d8d-41cf-9f06-abe1b89ee30c', img: '画册/唇彩管/b7fe3583-3d8d-41cf-9f06-abe1b89ee30c.png' },
            { name: 'b84f06b8-f54f-4651-90d3-e7b9d4dc415f', img: '画册/唇彩管/b84f06b8-f54f-4651-90d3-e7b9d4dc415f.png' },
            { name: 'b876f7c0-a0c5-424a-b547-a601304d16b5', img: '画册/唇彩管/b876f7c0-a0c5-424a-b547-a601304d16b5.png' },
            { name: 'c0bfdd72-af51-4604-8854-99a8e630ce7a', img: '画册/唇彩管/c0bfdd72-af51-4604-8854-99a8e630ce7a.png' },
            { name: 'c1921733-fc26-4617-9d91-c9f134550054', img: '画册/唇彩管/c1921733-fc26-4617-9d91-c9f134550054.png' },
            { name: 'c949a52a-e484-481a-9cf5-762230db92c4', img: '画册/唇彩管/c949a52a-e484-481a-9cf5-762230db92c4.png' },
            { name: 'd9393b07-2cae-42b7-8d96-6c282887d2a9', img: '画册/唇彩管/d9393b07-2cae-42b7-8d96-6c282887d2a9.png' },
            { name: 'd9f04da7-e574-4238-9e74-56294bcefcd6', img: '画册/唇彩管/d9f04da7-e574-4238-9e74-56294bcefcd6.png' },
            { name: 'e1ee10c2-551a-43bd-b61f-1ba9dc0dd22f', img: '画册/唇彩管/e1ee10c2-551a-43bd-b61f-1ba9dc0dd22f.png' },
            { name: 'eb59ba4c-a587-4e89-9ffa-8d6b0a419e12', img: '画册/唇彩管/eb59ba4c-a587-4e89-9ffa-8d6b0a419e12.png' },
            { name: 'eea98dcf-7fc8-4c79-bd23-470c67eb2580', img: '画册/唇彩管/eea98dcf-7fc8-4c79-bd23-470c67eb2580.png' },
            { name: 'f5f13229-ec34-4021-8684-488c60478be2', img: '画册/唇彩管/f5f13229-ec34-4021-8684-488c60478be2.png' }
        ],
        '粉盒眼影盒': [
            { name: '1a27eb82-89a1-4104-b8f9-329bede303f4', img: '画册/粉盒眼影盒/1a27eb82-89a1-4104-b8f9-329bede303f4.png' },
            { name: '6b40baea-cf28-4aac-af45-64112fc27151', img: '画册/粉盒眼影盒/6b40baea-cf28-4aac-af45-64112fc27151.png' }
        ],
        '膏体棒': [
            { name: '2563a907-d7aa-458f-8041-9e49208eb557', img: '画册/膏体棒/2563a907-d7aa-458f-8041-9e49208eb557.png' },
            { name: 'b0c4a519-1235-44d2-b0fd-dfbda9c172f8', img: '画册/膏体棒/b0c4a519-1235-44d2-b0fd-dfbda9c172f8.png' }
        ]
    };

    function normalizeLocalImagePath(path) {
        if (!path) return '';
        let cleanPath = String(path).trim().replace(/\\/g, '/');

        // 严禁外链
        if (/^(https?:)?\/\//i.test(cleanPath) || /^data:/i.test(cleanPath)) {
            return '';
        }

        // 优先保留以“画册/”开头的相对路径
        const albumIndex = cleanPath.indexOf('画册/');
        if (albumIndex >= 0) {
            cleanPath = cleanPath.slice(albumIndex);
        }

        if (cleanPath.startsWith('./')) {
            cleanPath = cleanPath.slice(2);
        }
        if (cleanPath.startsWith('/')) {
            cleanPath = cleanPath.slice(1);
        }

        return cleanPath.startsWith('画册/') ? cleanPath : '';
    }

    // 统一清洗：只保留本地画册路径
    Object.keys(categoryProducts).forEach(categoryName => {
        categoryProducts[categoryName] = (categoryProducts[categoryName] || []).map(product => ({
            ...product,
            img: normalizeLocalImagePath(product.img)
        }));
    });

    const getImageCount = (categoryName) => (categoryProducts[categoryName] || []).filter(p => !!p.img).length;

    // 分类排序：有图在前，无图在后；同组内按中文名称排序
    const sortedCategoryNames = Object.keys(categoryProducts).sort((a, b) => {
        const aHasImage = getImageCount(a) > 0;
        const bHasImage = getImageCount(b) > 0;
        if (aHasImage !== bHasImage) return aHasImage ? -1 : 1;
        return a.localeCompare(b, 'zh-CN');
    });

    // 按排序结果重建分类列表
    function renderCategoryList() {
        if (!categoryList) return;
        categoryList.innerHTML = sortedCategoryNames
            .map(name => `<li class="category-item" data-category="${name}"><span>${name}</span></li>`)
            .join('');
    }

    // 渲染产品：仅显示本地图片和名称（价格可选）
    function renderProducts(products) {
        productsGrid.innerHTML = products.map(product => {
            const productName = product.name || '';
            const productImage = normalizeLocalImagePath(product.img);
            const imageHtml = productImage
                ? `<img src="${productImage}" alt="${productName}" loading="lazy">`
                : `<div class="product-image-empty"></div>`;
            const priceHtml = product.price ? `\n                <p class="product-price">\n                    <span class="currency">¥:</span>\n                    <span class="price">${product.price}</span>\n                </p>` : '';

            return `
            <div class="product-card" data-name="${productName}">
                <div class="product-image">
                    ${imageHtml}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${productName}</h3>
                    ${priceHtml}
                </div>
            </div>`;
        }).join('');
    }

    // 卡片点击：跳转详情，传递稳定参数 name + img
    if (productsGrid) {
        productsGrid.addEventListener('click', function(e) {
            const card = e.target.closest('.product-card');
            if (!card) return;

            const productName = card.querySelector('.product-name')?.textContent?.trim() || '';
            // 从当前显示的分类中找到对应产品的图片路径
            const activeCategory = document.querySelector('.category-item.active')?.dataset?.category || '';
            const products = categoryProducts[activeCategory] || [];
            const product = products.find(p => p.name === productName);
            const productImage = product ? product.img : '';

            const params = new URLSearchParams({ name: productName, img: productImage });
            window.location.href = `detail.html?${params.toString()}`;
        });
    }

    function setActiveCategory(categoryName) {
        document.querySelectorAll('.category-item').forEach(item => {
            const isActive = (item.dataset.category || item.querySelector('span')?.textContent) === categoryName;
            item.classList.toggle('active', isActive);
        });
    }

    function switchCategory(categoryName) {
        const products = categoryProducts[categoryName] || [];
        productsGrid.style.opacity = '0.5';
        productsGrid.style.transform = 'translateY(10px)';
        setTimeout(() => {
            renderProducts(products);
            productsGrid.style.opacity = '1';
            productsGrid.style.transform = 'translateY(0)';
        }, 150);
    }

    if (categoryList) {
        categoryList.addEventListener('click', function(e) {
            const item = e.target.closest('.category-item');
            if (!item) return;
            const categoryName = item.dataset.category || item.querySelector('span')?.textContent;
            if (!categoryName) return;
            setActiveCategory(categoryName);
            switchCategory(categoryName);
        });
    }

    renderCategoryList();

    // 初始化显示：优先第一个“有图分类”，否则第一个分类
    const defaultCategory = sortedCategoryNames.find(name => getImageCount(name) > 0) || sortedCategoryNames[0] || '';
    if (defaultCategory) {
        setActiveCategory(defaultCategory);
        renderProducts(categoryProducts[defaultCategory] || []);
    }

    // 懒加载与滚动优化保留
    const lazyImages = document.querySelectorAll('.product-image img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset?.src || img.src;
                    observer.unobserve(img);
                }
            });
        });
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});
