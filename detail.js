// 产品详情页交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数中的产品信息
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('name') || '中粮 可益康蛋白粉礼盒500g*2';
    const productPrice = urlParams.get('price') || '328.00';
    const productImage = urlParams.get('img') || 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=600&fit=crop';
    
    // 更新页面产品信息
    updateProductInfo(productName, productPrice, productImage);
    
    // 轮播图功能
    const indicators = document.querySelectorAll('.gallery-indicators .indicator');
    const mainImage = document.getElementById('mainImage');
    let currentSlide = 0;
    
    // 产品图片数组
    const productImages = [
        productImage,
        'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=600&h=600&fit=crop',
        'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=600&fit=crop'
    ];
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateGallery();
        });
    });
    
    // 更新轮播图
    function updateGallery() {
        indicators.forEach((ind, idx) => {
            ind.classList.toggle('active', idx === currentSlide);
        });
        
        // 切换图片
        mainImage.style.opacity = '0.7';
        setTimeout(() => {
            mainImage.src = productImages[currentSlide];
            mainImage.style.opacity = '1';
        }, 150);
    }
    
    // 自动轮播
    setInterval(() => {
        currentSlide = (currentSlide + 1) % productImages.length;
        updateGallery();
    }, 5000);
    
    // 分享按钮功能
    const shareBtn = document.querySelector('.share-btn');
    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: productName,
                text: `来看看这个产品：${productName}`,
                url: window.location.href
            }).catch(err => console.log('分享失败:', err));
        } else {
            // 复制链接到剪贴板
            navigator.clipboard.writeText(window.location.href).then(() => {
                showNotification('链接已复制到剪贴板');
            }).catch(() => {
                showNotification('分享功能需要在支持的设备上使用');
            });
        }
    });
    
    // 返回顶部功能
    const backToTopBtn = document.getElementById('backToTop');
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 滚动时显示/隐藏返回顶部按钮
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 初始化返回顶部按钮状态
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
    backToTopBtn.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    
    // 更新产品信息函数
    function updateProductInfo(name, price, image) {
        // 更新标题
        const titleEl = document.querySelector('.product-title');
        if (titleEl) titleEl.textContent = name;
        
        // 更新价格
        const priceEl = document.querySelector('.price-value');
        if (priceEl) priceEl.textContent = price;
        
        // 更新主图
        if (mainImage) {
            mainImage.src = image;
            productImages[0] = image;
        }
        
        // 更新页面标题
        document.title = name;
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
        
        // 添加动画样式
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
    mainImage.addEventListener('click', function() {
        openImagePreview(this.src);
    });
    
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
    
    console.log('产品详情页已加载:', productName);
});
