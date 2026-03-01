// 产品图册交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 分类导航切换
    const categoryItems = document.querySelectorAll('.category-item');
    const productsGrid = document.querySelector('.products-grid');
    
    // 不同分类的产品数据
    const categoryProducts = {
        '米面粮油': [
            { name: '福临门泰玉香尚品香米', price: '40.90', img: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop' },
            { name: '中粮 福临门五常稻花香礼盒1kg*5', price: '218.00', img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=300&h=300&fit=crop' },
            { name: '中粮 福临门稻花香米2kg', price: '52.80', img: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=300&h=300&fit=crop' },
            { name: '中粮 福临门滋养米礼盒B款4kg', price: '118.00', img: 'https://images.unsplash.com/photo-1621993202323-c430e3522202?w=300&h=300&fit=crop' },
            { name: '中粮 福临门滋养米礼盒A款4kg', price: '99.00', img: 'https://images.unsplash.com/photo-1596910547037-846b1980329f?w=300&h=300&fit=crop' },
            { name: '中粮 吞古拉龙海泰国茉莉香米5kg', price: '148.00', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300&h=300&fit=crop' }
        ],
        '冲饮系列': [
            { name: '雀巢咖啡经典原味', price: '35.90', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&h=300&fit=crop' },
            { name: '立顿红茶包礼盒', price: '45.00', img: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300&h=300&fit=crop' },
            { name: '维维豆奶粉', price: '28.50', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&h=300&fit=crop' },
            { name: '伊利纯牛奶礼盒', price: '68.00', img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop' },
            { name: '蒙牛早餐奶', price: '52.00', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop' },
            { name: '椰树牌椰汁', price: '38.90', img: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=300&h=300&fit=crop' }
        ],
        '端午粽子礼盒': [
            { name: '五芳斋粽子礼盒', price: '128.00', img: 'https://images.unsplash.com/photo-1560159752-5bb9a0cd0af8?w=300&h=300&fit=crop' },
            { name: '稻香村粽子礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=300&h=300&fit=crop' },
            { name: '真真老老粽子礼盒', price: '88.00', img: 'https://images.unsplash.com/photo-1591706219783-63170d826d72?w=300&h=300&fit=crop' },
            { name: '思念粽子礼盒', price: '78.00', img: 'https://images.unsplash.com/photo-1560159752-5bb9a0cd0af8?w=300&h=300&fit=crop' },
            { name: '三全粽子礼盒', price: '68.00', img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=300&h=300&fit=crop' },
            { name: '良品铺子粽子礼盒', price: '158.00', img: 'https://images.unsplash.com/photo-1591706219783-63170d826d72?w=300&h=300&fit=crop' }
        ],
        '中粮熟食': [
            { name: '中粮火腿礼盒', price: '168.00', img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop' },
            { name: '中粮香肠礼盒', price: '128.00', img: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=300&h=300&fit=crop' },
            { name: '中粮酱鸭礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop' },
            { name: '中粮烧鸡礼盒', price: '88.00', img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300&h=300&fit=crop' },
            { name: '中粮卤味礼盒', price: '78.00', img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop' },
            { name: '中粮熟食大礼包', price: '198.00', img: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=300&h=300&fit=crop' }
        ],
        '中粮海鲜': [
            { name: '中粮海鲜礼盒A款', price: '298.00', img: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=300&h=300&fit=crop' },
            { name: '中粮海鲜礼盒B款', price: '398.00', img: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=300&h=300&fit=crop' },
            { name: '中粮虾仁礼盒', price: '168.00', img: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=300&h=300&fit=crop' },
            { name: '中粮鱼片礼盒', price: '128.00', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=300&fit=crop' },
            { name: '中粮鱿鱼礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=300&h=300&fit=crop' },
            { name: '中粮贝类礼盒', price: '158.00', img: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=300&h=300&fit=crop' }
        ],
        '中粮牛排': [
            { name: '中粮西冷牛排', price: '128.00', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop' },
            { name: '中粮菲力牛排', price: '158.00', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=300&h=300&fit=crop' },
            { name: '中粮眼肉牛排', price: '138.00', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop' },
            { name: '中粮牛排礼盒', price: '268.00', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=300&h=300&fit=crop' },
            { name: '中粮和牛牛排', price: '298.00', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&h=300&fit=crop' },
            { name: '中粮牛排组合装', price: '198.00', img: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=300&h=300&fit=crop' }
        ],
        '坚果干果礼盒': [
            { name: '三只松鼠坚果礼盒', price: '128.00', img: 'https://images.unsplash.com/photo-1536591375315-196000ea3676?w=300&h=300&fit=crop' },
            { name: '百草味坚果礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop' },
            { name: '良品铺子坚果礼盒', price: '158.00', img: 'https://images.unsplash.com/photo-1536591375315-196000ea3676?w=300&h=300&fit=crop' },
            { name: '沃隆坚果礼盒', price: '168.00', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop' },
            { name: '洽洽坚果礼盒', price: '88.00', img: 'https://images.unsplash.com/photo-1536591375315-196000ea3676?w=300&h=300&fit=crop' },
            { name: '来伊份坚果礼盒', price: '118.00', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop' }
        ],
        '干菌山珍礼包': [
            { name: '干菌山珍礼盒A款', price: '168.00', img: 'https://images.unsplash.com/photo-1576076567699-247103a75b10?w=300&h=300&fit=crop' },
            { name: '干菌山珍礼盒B款', price: '238.00', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop' },
            { name: '香菇木耳礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1576076567699-247103a75b10?w=300&h=300&fit=crop' },
            { name: '松茸礼盒', price: '298.00', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop' },
            { name: '竹荪礼盒', price: '188.00', img: 'https://images.unsplash.com/photo-1576076567699-247103a75b10?w=300&h=300&fit=crop' },
            { name: '银耳莲子礼盒', price: '78.00', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop' }
        ],
        '精品大枣礼盒': [
            { name: '新疆和田大枣礼盒', price: '88.00', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop' },
            { name: '若羌灰枣礼盒', price: '68.00', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop' },
            { name: '和田玉枣礼盒', price: '128.00', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop' },
            { name: '阿克苏红枣礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop' },
            { name: '骏枣礼盒', price: '78.00', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=300&h=300&fit=crop' },
            { name: '狗头枣礼盒', price: '108.00', img: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=300&h=300&fit=crop' }
        ],
        '熟食肉类礼盒': [
            { name: '双汇熟食礼盒', price: '128.00', img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop' },
            { name: '雨润熟食礼盒', price: '98.00', img: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=300&h=300&fit=crop' },
            { name: '金锣熟食礼盒', price: '88.00', img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop' },
            { name: '得利斯熟食礼盒', price: '108.00', img: 'https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=300&h=300&fit=crop' },
            { name: '煌上煌酱鸭礼盒', price: '138.00', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop' },
            { name: '周黑鸭礼盒', price: '118.00', img: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300&h=300&fit=crop' }
        ],
        '糖果瓜子礼盒': [
            { name: '徐福记糖果礼盒', price: '68.00', img: 'https://images.unsplash.com/photo-1582058993795-4f3c8605f10b?w=300&h=300&fit=crop' },
            { name: '大白兔奶糖礼盒', price: '58.00', img: 'https://images.unsplash.com/photo-1548691905-57c36cc8d935?w=300&h=300&fit=crop' },
            { name: '洽洽瓜子礼盒', price: '48.00', img: 'https://images.unsplash.com/photo-1582058993795-4f3c8605f10b?w=300&h=300&fit=crop' },
            { name: '旺旺糖果礼盒', price: '78.00', img: 'https://images.unsplash.com/photo-1548691905-57c36cc8d935?w=300&h=300&fit=crop' },
            { name: '阿尔卑斯糖果礼盒', price: '38.00', img: 'https://images.unsplash.com/photo-1582058993795-4f3c8605f10b?w=300&h=300&fit=crop' },
            { name: '德芙巧克力礼盒', price: '88.00', img: 'https://images.unsplash.com/photo-1548691905-57c36cc8d935?w=300&h=300&fit=crop' }
        ],
        '饰品盒': [
            { name: '精美首饰盒', price: '68.00', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop' },
            { name: '木质收纳盒', price: '48.00', img: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop' },
            { name: '珠宝首饰盒', price: '128.00', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop' },
            { name: '化妆盒', price: '38.00', img: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop' },
            { name: '手表收纳盒', price: '88.00', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop' },
            { name: '眼镜收纳盒', price: '28.00', img: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop' }
        ]
    };
    
    // 渲染产品函数
    function renderProducts(products) {
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">
                        <span class="currency">¥:</span>
                        <span class="price">${product.price}</span>
                    </p>
                </div>
            </div>
        `).join('');
        
        // 重新绑定产品卡片点击事件
        bindProductCardEvents();
    }
    
    // 绑定产品卡片点击事件
    function bindProductCardEvents() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', function() {
                const productName = this.querySelector('.product-name').textContent;
                const productPrice = this.querySelector('.price').textContent;
                const productImage = this.querySelector('.product-image img').src;
                
                console.log('点击产品:', productName, '价格:', productPrice);
                
                // 跳转到详情页，传递产品信息
                const params = new URLSearchParams({
                    name: productName,
                    price: productPrice,
                    img: productImage
                });
                window.location.href = `detail.html?${params.toString()}`;
            });
        });
    }
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            categoryItems.forEach(cat => cat.classList.remove('active'));
            // 添加active类到当前项
            this.classList.add('active');
            
            // 获取分类名称
            const categoryName = this.querySelector('span').textContent;
            console.log('切换到分类:', categoryName);
            
            // 添加切换动画
            productsGrid.style.opacity = '0.5';
            productsGrid.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                // 加载对应分类产品
                const products = categoryProducts[categoryName] || categoryProducts['米面粮油'];
                renderProducts(products);
                
                // 恢复动画
                productsGrid.style.opacity = '1';
                productsGrid.style.transform = 'translateY(0)';
            }, 200);
            
            showNotification(`已切换到: ${categoryName}`);
        });
    });
    
    // 轮播图功能
    let currentSlide = 2; // 从第3个开始（模拟原页面）
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = indicators.length;
    const bannerImages = [
        { left: 'https://images.unsplash.com/photo-1632663892839-0f6b5d8e33c4?w=600&h=400&fit=crop', right: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=400&fit=crop' },
        { left: 'https://images.unsplash.com/photo-1560167016-022b78a0258e?w=600&h=400&fit=crop', right: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&h=400&fit=crop' },
        { left: 'https://images.unsplash.com/photo-1632663892839-0f6b5d8e33c4?w=600&h=400&fit=crop', right: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=600&h=400&fit=crop' },
        { left: 'https://images.unsplash.com/photo-1560167016-022b78a0258e?w=600&h=400&fit=crop', right: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=600&h=400&fit=crop' }
    ];
    
    // 指示器点击事件
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateCarousel();
        });
    });
    
    // Banner区域点击切换
    const bannerLeft = document.querySelector('.banner-left');
    const bannerRight = document.querySelector('.banner-right');
    
    if (bannerLeft) {
        bannerLeft.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
        bannerLeft.style.cursor = 'pointer';
    }
    
    if (bannerRight) {
        bannerRight.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
        bannerRight.style.cursor = 'pointer';
    }
    
    // 更新轮播图
    function updateCarousel() {
        indicators.forEach((ind, idx) => {
            ind.classList.toggle('active', idx === currentSlide);
        });
        
        // 更新Banner图片
        const leftImg = document.querySelector('.banner-left .banner-bg-img');
        const rightImg = document.querySelector('.banner-right .banner-bg-img');
        
        if (leftImg && rightImg) {
            leftImg.style.opacity = '0.7';
            rightImg.style.opacity = '0.7';
            
            setTimeout(() => {
                leftImg.src = bannerImages[currentSlide].left;
                rightImg.src = bannerImages[currentSlide].right;
                leftImg.style.opacity = '1';
                rightImg.style.opacity = '1';
            }, 150);
        }
        
        console.log('切换到轮播图:', currentSlide + 1);
    }
    
    // 自动轮播
    let autoPlayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }, 5000);
    
    // 鼠标悬停时暂停自动轮播
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoPlayInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoPlayInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            }, 5000);
        });
    }
    
    // 产品卡片点击事件
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            const productPrice = this.querySelector('.price').textContent;
            console.log('点击产品:', productName, '价格:', productPrice);
            
            // 可以添加跳转到产品详情页的逻辑
            showProductDetail(productName, productPrice);
        });
    });
    

    
    // 分享按钮（已移除底部栏，保留代码以备后续使用）
    /*
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            console.log('分享');
            if (navigator.share) {
                navigator.share({
                    title: '佳图系列JT-02产品图册',
                    text: '来看看这些优质产品！',
                    url: window.location.href
                }).catch(err => console.log('分享失败:', err));
            } else {
                showNotification('分享功能需要在支持的设备上使用');
            }
        });
    }
    */
    
    // 收藏按钮（已移除底部栏，保留代码以备后续使用）
    /*
    const likeBtn = document.querySelector('.like-btn');
    let isLiked = false;
    if (likeBtn) {
        likeBtn.addEventListener('click', function() {
            isLiked = !isLiked;
            this.style.backgroundColor = isLiked ? 'rgba(230, 0, 18, 0.8)' : 'rgba(255, 255, 255, 0.2)';
            console.log(isLiked ? '已收藏' : '取消收藏');
            showNotification(isLiked ? '已添加到收藏' : '已取消收藏');
        });
    }
    */
    
    // 原音乐控制按钮代码已移除
    
    // 辅助函数：根据分类加载产品
    function loadProductsByCategory(category) {
        // 模拟加载动画
        const grid = document.querySelector('.products-grid');
        grid.style.opacity = '0.5';
        
        setTimeout(() => {
            grid.style.opacity = '1';
            // 这里应该根据分类从服务器获取产品数据
            console.log('已加载分类:', category);
        }, 300);
    }
    
    // 辅助函数：显示产品详情
    function showProductDetail(name, price) {
        // 可以创建模态框显示产品详情
        console.log('显示产品详情:', name, price);
    }
    
    // 辅助函数：显示通知
    function showNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            font-size: 14px;
            z-index: 1000;
            animation: fadeInOut 2.5s ease forwards;
        `;
        
        // 添加动画样式
        if (!document.querySelector('#notification-style')) {
            const style = document.createElement('style');
            style.id = 'notification-style';
            style.textContent = `
                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                    15% { opacity: 1; transform: translateX(-50%) translateY(0); }
                    85% { opacity: 1; transform: translateX(-50%) translateY(0); }
                    100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // 2.5秒后移除
        setTimeout(() => {
            notification.remove();
        }, 2500);
    }
    
    // 图片懒加载
    const lazyImages = document.querySelectorAll('.product-image img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // 页面滚动优化
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // 可以在这里添加滚动时的动画效果
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // 初始化产品卡片事件
    bindProductCardEvents();
    
    console.log('产品图册已加载完成！');
});
