// 产品详情页交互脚本

// 产品详情数据配置
const PRODUCT_DETAILS = {
    '唇彩管': {
        brand: 'OEM/ODM定制',
        spec: 'φ16.8×73.5mm / 容量可定制',
        origin: '中国广东',
        description: [
            '精选高透光亚克力(PMMA)材质，质感通透高级',
            '3D立体浮雕工艺，触感细腻有层次',
            '垂直双色渐变设计，视觉层次丰富',
            '标准M12细牙螺纹，旋紧顺滑防漏',
            '人体工学握持设计，防滑易握',
            '支持OEM/ODM定制，满足品牌个性化需求'
        ]
    },
    '唇颊盒': {
        brand: 'OEM/ODM定制',
        spec: '尺寸可定制 / 多格设计',
        origin: '中国广东',
        description: [
            '多功能唇颊两用盒，一盘搞定多种妆容',
            '精致分格设计，可搭配不同质地产品',
            '磁吸开合结构，使用便捷安全',
            '高质感镜面或磨砂表面处理',
            '支持多色搭配，满足个性化需求',
            '便携小巧，适合随身携带补妆'
        ]
    },
    '粉盒眼影盒': {
        brand: 'OEM/ODM定制',
        spec: '尺寸可定制 / 多规格可选',
        origin: '中国广东',
        description: [
            '专业眼影/粉饼分装盒，多格设计可选',
            '透明视窗设计，内容物一目了然',
            '磁吸或卡扣式开合，牢固耐用',
            '可搭配镜子、刷槽等配件',
            '表面可丝印、烫金品牌LOGO',
            '适用于眼影、腮红、粉饼等多种彩妆'
        ]
    },
    '膏体棒': {
        brand: 'OEM/ODM定制',
        spec: 'φ25.8×69.6mm / 标准容量',
        origin: '中国广东',
        description: [
            '阳极氧化铝材外壳，金属质感高级',
            '旋转推升机构，出膏顺畅稳定',
            '食品级PP内胆，安全无异味',
            '精密螺纹密封，防干防漏抗氧化',
            '适用于唇膏、润唇膏、固体香膏等',
            '支持激光雕刻、UV印刷等定制工艺'
        ]
    },
    '睫毛管': {
        brand: 'OEM/ODM定制',
        spec: '尺寸可定制 / 多种刷头适配',
        origin: '中国广东',
        description: [
            '专业睫毛膏管，适配多种刷头规格',
            '精密密封设计，防止膏体干结',
            '高质感塑料或铝塑复合材质',
            '内壁特殊处理，减少膏体残留',
            '可搭配纤维刷、硅胶刷等多种刷头',
            '支持烫金、丝印、贴标等定制'
        ]
    },
    '口红': {
        brand: 'OEM/ODM定制',
        spec: 'φ25.8×69.6mm / 标准容量',
        origin: '中国广东',
        description: [
            '经典旋转式口红管，操作顺滑',
            '阳极氧化铝或ABS材质可选',
            '精密螺纹配合，盖子稳固不松脱',
            '磁吸款可选，开合手感更佳',
            '多色表面处理：哑光、亮面、渐变',
            '支持品牌LOGO定制，提升品牌辨识度'
        ]
    },
    '双头唇彩': {
        brand: 'OEM/ODM定制',
        spec: 'φ17.1×110.3mm / 双腔设计',
        origin: '中国广东',
        description: [
            '创新双腔分体设计，一管双色',
            '上层膏体仓+下层液体仓，独立密封',
            '按压泵头设计，精准控量出料',
            '内置刷头收纳槽，使用便捷卫生',
            '渐变粉雾外观，少女感十足',
            '适用于双效唇釉、唇蜜组合产品'
        ]
    },
    '双头睫毛': {
        brand: 'OEM/ODM定制',
        spec: '尺寸可定制 / 双头设计',
        origin: '中国广东',
        description: [
            '双头睫毛膏管，一头打底一头加密',
            '独立密封腔体，防止两相混合',
            '可搭配不同功能刷头（纤维+硅胶）',
            '中间连接区防滑设计，握持稳固',
            '支持烫金、丝印品牌定制',
            '满足多功能眼部彩妆需求'
        ]
    },
    '吸嘴管': {
        brand: 'OEM/ODM定制',
        spec: '尺寸可定制 / 多种口径',
        origin: '中国广东',
        description: [
            '软质吸嘴设计，精准控制用量',
            '适用于唇蜜、唇油、精华等产品',
            '食品级硅胶吸嘴，安全柔软',
            '挤压式管身，出料均匀可控',
            '透明或彩色管身可选',
            '支持丝印、贴标等表面工艺'
        ]
    }
};

// 根据图片路径推断产品类别
function getCategoryFromImage(imagePath) {
    if (!imagePath) return null;
    for (const category of Object.keys(PRODUCT_DETAILS)) {
        if (imagePath.includes(`画册/${category}`)) {
            return category;
        }
    }
    return null;
}

// 更新产品详情显示
function updateProductDetails(category) {
    const details = category ? PRODUCT_DETAILS[category] : null;

    // 更新品牌
    const brandEl = document.querySelector('.meta-item:nth-child(1) .meta-value');
    if (brandEl && details) {
        brandEl.textContent = details.brand;
    }

    // 更新规格
    const specEl = document.querySelector('.meta-item:nth-child(2) .meta-value');
    if (specEl && details) {
        specEl.textContent = details.spec;
    }

    // 更新产地
    const originEl = document.querySelector('.meta-item:nth-child(3) .meta-value');
    if (originEl && details) {
        originEl.textContent = details.origin;
    }

    // 更新产品描述
    const descContent = document.querySelector('.description-content');
    if (descContent && details) {
        descContent.innerHTML = details.description
            .map(item => `<p>${item}</p>`)
            .join('');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);

    const rawName = urlParams.get('name') || '';
    const rawImage = urlParams.get('img') || '';

    // 仅使用 index 传入的主图，不做"自动改主图"的兜底替换
    const productName = decodeURIComponent(rawName).trim();
    const productImage = decodeURIComponent(rawImage).trim();

    const mainImage = document.getElementById('mainImage');
    const indicatorsWrap = document.querySelector('.gallery-indicators');

    // 更新标题与主图（主图严格等于传入 img）
    const titleEl = document.querySelector('.product-title');
    if (titleEl) titleEl.textContent = productName;
    if (productName) document.title = productName;
    if (mainImage) {
        if (productImage) {
            mainImage.src = productImage;
        } else {
            mainImage.removeAttribute('src');
        }
    }

    // 根据图片路径获取产品类别并更新详情
    const category = getCategoryFromImage(productImage);
    if (category) {
        updateProductDetails(category);
    }

    // 轮播数据：只显示当前产品的图片（每个产品只有一张图）
    const productImages = productImage ? [productImage] : [];

    // 单图：不显示指示器、不自动轮播、不假切换
    // 多图：只允许手动点击指示器切换，默认不自动轮播
    let currentSlide = 0;

    function renderIndicators() {
        if (!indicatorsWrap) return;

        if (productImages.length <= 1) {
            indicatorsWrap.innerHTML = '';
            indicatorsWrap.style.display = 'none';
            return;
        }

        indicatorsWrap.style.display = '';
        indicatorsWrap.innerHTML = productImages
            .map((_, i) => `<span class="indicator${i === 0 ? ' active' : ''}" data-index="${i}"></span>`)
            .join('');

        const indicatorsEls = indicatorsWrap.querySelectorAll('.indicator');
        indicatorsEls.forEach(indicator => {
            indicator.addEventListener('click', function() {
                const index = Number(this.getAttribute('data-index'));
                if (Number.isNaN(index) || index < 0 || index >= productImages.length) return;
                currentSlide = index;
                updateGallery();
            });
        });
    }

    function updateGallery() {
        if (!mainImage || productImages.length <= 1) return;

        const nextSrc = productImages[currentSlide];
        if (!nextSrc) return;

        mainImage.src = nextSrc;

        if (indicatorsWrap) {
            const indicatorsEls = indicatorsWrap.querySelectorAll('.indicator');
            indicatorsEls.forEach((ind, idx) => {
                ind.classList.toggle('active', idx === currentSlide);
            });
        }
    }

    renderIndicators();

    // 分享按钮功能
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: productName || '产品详情',
                    text: productName ? `来看看这个产品：${productName}` : '来看看这个产品',
                    url: window.location.href
                }).catch(err => console.log('分享失败:', err));
            } else {
                navigator.clipboard.writeText(window.location.href).then(() => {
                    showNotification('链接已复制到剪贴板');
                }).catch(() => {
                    showNotification('分享功能需要在支持的设备上使用');
                });
            }
        });
    }

    // 返回顶部功能
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });

        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
        backToTopBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    }

    // 显示通知函数
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 16px 32px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            animation: fadeInOut 2s ease forwards;
        `;

        if (!document.querySelector('#notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                    20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // 图片点击放大预览
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            if (!this.src) return;
            openImagePreview(this.src);
        });
    }

    // 图片预览功能
    function openImagePreview(src) {
        const preview = document.createElement('div');
        preview.className = 'image-preview';
        preview.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            cursor: zoom-out;
        `;

        const img = document.createElement('img');
        img.src = src;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;

        preview.appendChild(img);
        document.body.appendChild(preview);

        preview.addEventListener('click', function() {
            preview.remove();
        });
    }

    console.log('产品详情页已加载:', productName || '(无名称)', category ? `类别: ${category}` : '');
});