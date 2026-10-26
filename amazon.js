// Amazon Clone Functional Core Application
(function () {
    'use strict';

    // ==========================================
    // 1. PRODUCT CATALOG DATA
    // ==========================================
    const PRODUCTS = [
        {
            id: 'boat-450',
            title: 'boAt Rockerz 450 Bluetooth On-Ear Headphones with Mic',
            category: 'headphones',
            brand: 'boAt',
            price: 1499,
            originalPrice: 3990,
            discount: 62,
            rating: 4.5,
            reviews: 14238,
            image: 'boat.jpg',
            prime: true,
            badge: 'Best Seller',
            desc: 'Up to 15 hours playback, 40mm dynamic drivers, padded ear cushions, and integrated easy controls with built-in mic.',
            specs: { 'Battery': '15 Hours', 'Driver': '40mm', 'Connectivity': 'Bluetooth 5.0', 'Warranty': '1 Year' }
        },
        {
            id: 'boult-anc',
            title: 'Boult Audio Anchor ANC Wireless Active Noise Cancelling Headphones',
            category: 'headphones',
            brand: 'Boult',
            price: 1299,
            originalPrice: 3499,
            discount: 63,
            rating: 4.3,
            reviews: 8940,
            image: 'boult.jpg',
            prime: true,
            badge: 'Limited time deal',
            desc: 'Active Noise Cancellation with 30dB reduction, 30-hour massive playtime, low latency gaming mode, and ultra-soft protein leather cups.',
            specs: { 'ANC': 'Up to 30dB', 'Playtime': '30 Hours', 'Gaming Mode': '45ms Latency', 'Warranty': '1 Year' }
        },
        {
            id: 'noise-two',
            title: 'Noise Two Wireless On-Ear Headphones with 50H Playtime & Low Latency',
            category: 'headphones',
            brand: 'Noise',
            price: 1599,
            originalPrice: 4999,
            discount: 68,
            rating: 4.4,
            reviews: 6210,
            image: 'noise.jpg',
            prime: true,
            badge: 'Amazon\'s Choice',
            desc: 'Dual pairing, 4 play modes (BT, AUX, SD Card, FM), Bass boost EQ mode, and IPX5 sweat resistance.',
            specs: { 'Playtime': '50 Hours', 'Modes': 'BT/SD/AUX/FM', 'Drivers': '40mm Neodymium', 'Rating': 'IPX5' }
        },
        {
            id: 'zebronics-thunder',
            title: 'Zebronics Zeb-Thunder Wireless BT Headphone with Ergonomic Design',
            category: 'headphones',
            brand: 'Zebronics',
            price: 899,
            originalPrice: 1999,
            discount: 55,
            rating: 4.1,
            reviews: 21540,
            image: 'zebronics.jpg',
            prime: true,
            badge: 'Blockbuster Deal',
            desc: 'Comfortable headband with adjustable design, soft earcups, Micro SD card slot, and FM radio support.',
            specs: { 'Battery': '9 Hours', 'Driver': '40mm', 'Weight': '142g', 'Warranty': '1 Year' }
        },
        {
            id: 'prestige-mixer',
            title: 'Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jars',
            category: 'kitchen',
            brand: 'Prestige',
            price: 2899,
            originalPrice: 6295,
            discount: 54,
            rating: 4.6,
            reviews: 48920,
            image: 'mixer.jpg',
            prime: true,
            badge: '#1 Best Seller',
            desc: 'Heavy duty 750W motor with overload protection, 3 stainless steel multipurpose jars, and transparent polycarbonate juicer jar.',
            specs: { 'Power': '750 Watts', 'Jars': '4 (3 SS + 1 Juicer)', 'Speed': '3 Speed + Pulse', 'Warranty': '2 Years' }
        },
        {
            id: 'greensoul-chair',
            title: 'Green Soul Ergonomic Executive High-Back Chair with Lumbar Support',
            category: 'home',
            brand: 'Green Soul',
            price: 6499,
            originalPrice: 14990,
            discount: 57,
            rating: 4.7,
            reviews: 11450,
            image: 'furniture.jpg',
            prime: true,
            badge: 'Top Rated',
            desc: 'Breathable Korean mesh back, 2D adjustable armrests, heavy-duty metal wheelbase, and synchro-tilt mechanism.',
            specs: { 'Mechanism': 'Synchro-tilt', 'Weight Cap': '135 kg', 'Material': 'Breathable Mesh', 'Warranty': '3 Years' }
        },
        {
            id: 'urban-bike',
            title: 'Urban Terrain UT3000S Mountain Bike Cycle with Front Suspension',
            category: 'outdoors',
            brand: 'Urban Terrain',
            price: 8999,
            originalPrice: 19999,
            discount: 55,
            rating: 4.4,
            reviews: 7300,
            image: 'biker.jpg',
            prime: true,
            badge: 'Festival Special',
            desc: 'High-tensile steel frame with dual disc brakes, 21-speed Shimano gears, front suspension, and free Pan-India installation.',
            specs: { 'Gears': '21 Speed Shimano', 'Brakes': 'Dual Disc', 'Wheel Size': '27.5 Inch', 'Frame': 'Carbon Steel' }
        },
        {
            id: 'samsung-fridge',
            title: 'Samsung 236L 3-Star Inverter Double Door Refrigerator with Convertible Mode',
            category: 'appliances',
            brand: 'Samsung',
            price: 24990,
            originalPrice: 37990,
            discount: 34,
            rating: 4.6,
            reviews: 15300,
            image: 'fridge1.jpg',
            prime: true,
            badge: 'Deal of the Day',
            desc: 'Digital Inverter Compressor with 20-year warranty, all-around cooling, deodorizer, and toughened glass shelves.',
            specs: { 'Capacity': '236 Litres', 'Energy Rating': '3 Star', 'Defrost': 'Frost Free', 'Compressor': 'Digital Inverter' }
        },
        {
            id: 'lg-ac-15',
            title: 'LG 1.5 Ton 5-Star DUAL Inverter Split AC (Copper, AI Convertible 6-in-1)',
            category: 'appliances',
            brand: 'LG',
            price: 37490,
            originalPrice: 75990,
            discount: 51,
            rating: 4.8,
            reviews: 19800,
            image: 'ac.jpg',
            prime: true,
            badge: 'Top Choice',
            desc: 'Super convertible 6-in-1 cooling, HD filter with anti-virus protection, EZ clean filter, and 100% copper with Ocean Black protection.',
            specs: { 'Tonnage': '1.5 Ton', 'Energy': '5 Star BEE', 'Condenser': 'Copper Tubes', 'Warranty': '10 Yr Compressor' }
        },
        {
            id: 'bosch-washing',
            title: 'Bosch 7 kg 5-Star Fully-Automatic Front Loading Washing Machine',
            category: 'appliances',
            brand: 'Bosch',
            price: 28990,
            originalPrice: 44990,
            discount: 36,
            rating: 4.7,
            reviews: 24600,
            image: 'washing machine.jpg',
            prime: true,
            badge: 'Amazon\'s Choice',
            desc: 'EcoSilence Drive brushless motor with anti-vibration design, 1200 RPM spin speed, built-in heater, and reload function.',
            specs: { 'Capacity': '7.0 Kg', 'Speed': '1200 RPM', 'Programs': '15 Wash Cycles', 'Warranty': '2 Yr Comprehensive' }
        },
        {
            id: 'ifb-microwave',
            title: 'IFB 24L Convection Microwave Oven with 101 Auto-Cook Menus',
            category: 'appliances',
            brand: 'IFB',
            price: 11490,
            originalPrice: 16990,
            discount: 32,
            rating: 4.4,
            reviews: 8200,
            image: 'microwave.jpg',
            prime: true,
            badge: 'Limited Deal',
            desc: 'Stainless steel cavity, grill + convection + microwave modes, child safety lock, and express cooking with auto defrost.',
            specs: { 'Capacity': '24 Litres', 'Type': 'Convection', 'Power': '1400 Watts', 'Warranty': '3 Yrs Magnetron' }
        },
        {
            id: 'firefox-cycle',
            title: 'Firefox Bikes Tremor 27.5T Mountain Cycle with Front Suspension',
            category: 'outdoors',
            brand: 'Firefox',
            price: 12499,
            originalPrice: 18999,
            discount: 34,
            rating: 4.5,
            reviews: 4120,
            image: 'cycle.jpg',
            prime: true,
            badge: 'Prime Deal',
            desc: 'Lightweight alloy MTB frame, front suspension with 80mm travel, mechanical disc brakes, and wide all-terrain tires.',
            specs: { 'Wheel': '27.5 Inch', 'Brakes': 'Front & Rear Disc', 'Travel': '80mm Fork', 'Frame': 'Alloy 6061' }
        },
        {
            id: 'bosch-washer',
            title: 'Bosch EasyAquatak 120 Compact High Pressure Car & Garden Washer',
            category: 'tools',
            brand: 'Bosch',
            price: 4299,
            originalPrice: 8500,
            discount: 49,
            rating: 4.5,
            reviews: 13900,
            image: 'automotive.jpg',
            prime: true,
            badge: 'Best Seller',
            desc: '1500W all-metal motor delivering 120 bar pressure, variable fan jet nozzle, rotary nozzle, and detergent applicator.',
            specs: { 'Pressure': '120 Bar', 'Power': '1500W', 'Flow Rate': '350 l/h', 'Hose': '5m High Pressure' }
        },
        {
            id: 'bd-toolkit',
            title: 'BLACK+DECKER 550W Variable Speed Impact Drill with 50-Piece Home Toolkit',
            category: 'tools',
            brand: 'BLACK+DECKER',
            price: 2199,
            originalPrice: 4999,
            discount: 56,
            rating: 4.3,
            reviews: 9500,
            image: 'tool.jpg',
            prime: true,
            badge: 'Great Value',
            desc: 'Includes 10mm drill, hammer, pliers, screwdrivers, utility knife, measuring tape, and wall anchors in a sturdy blow-mold case.',
            specs: { 'Power': '550 Watts', 'Speed': '0-2800 RPM', 'Pieces': '50 Tools + Case', 'Chuck': '10mm Keyed' }
        },
        {
            id: 'sharpex-hose',
            title: 'Sharpex 50ft Expandable Multi-Function Garden Hose Pipe with 8-Pattern Spray Nozzle',
            category: 'outdoors',
            brand: 'Sharpex',
            price: 899,
            originalPrice: 2499,
            discount: 64,
            rating: 4.2,
            reviews: 6700,
            image: 'garden.jpg',
            prime: true,
            badge: 'Deal',
            desc: 'Triple-layer latex core expanding up to 50ft with water pressure, kink-free brass connectors, and 8-spray pattern ergonomic gun.',
            specs: { 'Length': '15m / 50ft', 'Patterns': '8 Spray Modes', 'Core': 'Triple Latex', 'Connectors': 'Solid Brass' }
        },
        {
            id: 'lg-single-fridge',
            title: 'LG 185L 5-Star Inverter Direct Cool Single Door Refrigerator',
            category: 'appliances',
            brand: 'LG',
            price: 14990,
            originalPrice: 20990,
            discount: 28,
            rating: 4.6,
            reviews: 31200,
            image: 'fridge.jpg',
            prime: true,
            badge: 'Energy Saver',
            desc: 'Fastest ice making technology, smart inverter compressor with silent operation, and anti-bacterial gasket.',
            specs: { 'Capacity': '185 Litres', 'Energy': '5 Star Rated', 'Cooling': 'Direct-Cool', 'Warranty': '10 Yrs' }
        }
    ];

    // ==========================================
    // 2. STATE MANAGEMENT
    // ==========================================
    let cart = [];
    let deliveryLocation = { city: 'Mumbai', pincode: '400001' };
    let currentSlide = 0;
    let slideTimer = null;
    let selectedCategory = 'all';

    function initStorage() {
        try {
            const savedCart = localStorage.getItem('amazon_cart');
            if (savedCart) cart = JSON.parse(savedCart);
        } catch (e) {
            cart = [];
        }

        try {
            const savedLoc = localStorage.getItem('amazon_location');
            if (savedLoc) deliveryLocation = JSON.parse(savedLoc);
        } catch (e) {}
    }

    function saveCart() {
        try {
            localStorage.setItem('amazon_cart', JSON.stringify(cart));
        } catch (e) {}
        updateCartUI();
    }

    function saveLocation() {
        try {
            localStorage.setItem('amazon_location', JSON.stringify(deliveryLocation));
        } catch (e) {}
        updateLocationUI();
    }

    // ==========================================
    // 3. UI RENDERERS & UPDATES
    // ==========================================
    function formatINR(val) {
        return '₹' + Number(val).toLocaleString('en-IN');
    }

    function updateCartUI() {
        const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

        // Header badge
        const badgeEl = document.getElementById('cartBadge');
        if (badgeEl) {
            badgeEl.textContent = totalCount;
            badgeEl.classList.add('bump');
            setTimeout(() => badgeEl.classList.remove('bump'), 300);
        }

        // Cart Drawer title
        const drawerCountEl = document.getElementById('drawerCartCount');
        if (drawerCountEl) drawerCountEl.textContent = `(${totalCount} items)`;

        // Cart Drawer subtotal
        const subtotalEl = document.getElementById('cartDrawerSubtotal');
        if (subtotalEl) subtotalEl.textContent = formatINR(subtotal);

        // Cart Drawer Items List
        const itemsListEl = document.getElementById('cartItemsList');
        const emptyStateEl = document.getElementById('cartEmptyState');
        const footerCheckoutEl = document.getElementById('cartDrawerFooter');
        const freeDeliveryBanner = document.getElementById('cartFreeDeliveryBanner');

        if (!itemsListEl) return;

        if (cart.length === 0) {
            itemsListEl.innerHTML = '';
            if (emptyStateEl) emptyStateEl.style.display = 'block';
            if (footerCheckoutEl) footerCheckoutEl.style.display = 'none';
            if (freeDeliveryBanner) freeDeliveryBanner.style.display = 'none';
        } else {
            if (emptyStateEl) emptyStateEl.style.display = 'none';
            if (footerCheckoutEl) footerCheckoutEl.style.display = 'block';
            if (freeDeliveryBanner) freeDeliveryBanner.style.display = 'flex';

            itemsListEl.innerHTML = cart.map(item => `
                <div class="cart-item-card" data-id="${item.id}">
                    <div class="cart-item-thumb">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">${formatINR(item.price)}</div>
                        <div class="cart-item-qty-row">
                            <div class="qty-control-box">
                                <button class="qty-btn btn-cart-dec" data-id="${item.id}">-</button>
                                <span class="qty-display">${item.qty}</span>
                                <button class="qty-btn btn-cart-inc" data-id="${item.id}">+</button>
                            </div>
                            <button class="cart-item-delete btn-cart-remove" data-id="${item.id}">Delete</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    function updateLocationUI() {
        const destEl = document.getElementById('navDeliveryDest');
        if (destEl) {
            destEl.textContent = `${deliveryLocation.city} ${deliveryLocation.pincode}`;
        }
    }

    function checkUserLoginState() {
        const userNavMain = document.getElementById('userNavMain');
        const userNavSub = document.getElementById('userNavSub');
        const sideMenuGreeting = document.getElementById('sideMenuGreeting');
        const dropdownHeader = document.getElementById('userDropdownHeader');

        try {
            const rawUser = localStorage.getItem('amazon_user');
            if (rawUser) {
                const user = JSON.parse(rawUser);
                const firstName = user.name ? user.name.split(' ')[0] : 'User';
                if (userNavSub) userNavSub.textContent = `Hello, ${firstName}`;
                if (userNavMain) userNavMain.innerHTML = `Account & Lists <svg style="width:10px;height:10px;fill:#ccc;margin-left:2px" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>`;
                if (sideMenuGreeting) sideMenuGreeting.textContent = `Hello, ${user.name}`;

                if (dropdownHeader) {
                    dropdownHeader.innerHTML = `
                        <div style="font-size:14px;font-weight:700;margin-bottom:6px;">Hi, ${user.name}</div>
                        <div style="font-size:12px;color:#666;margin-bottom:10px;">${user.email || ''}</div>
                        <button id="btnSignOut" style="width:100%;background:#f0f2f2;border:1px solid #d5d9d9;padding:6px;border-radius:4px;cursor:pointer;font-weight:600;font-size:12px;">Sign Out</button>
                    `;
                    const signOutBtn = document.getElementById('btnSignOut');
                    if (signOutBtn) {
                        signOutBtn.addEventListener('click', () => {
                            localStorage.removeItem('amazon_user');
                            showToast('Signed out successfully');
                            setTimeout(() => window.location.reload(), 400);
                        });
                    }
                }
            }
        } catch (e) {}
    }

    // ==========================================
    // 4. PRODUCT CARDS & SHELF RENDERER
    // ==========================================
    function renderProductShelf(items) {
        const shelfContainer = document.getElementById('productShelfGrid');
        if (!shelfContainer) return;

        if (items.length === 0) {
            shelfContainer.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">
                    <h3>No products found matching your search.</h3>
                    <p style="font-size: 14px; margin-top: 8px;">Try clearing filters or search for "headphones", "mixer", "cycle", or "fridge".</p>
                </div>
            `;
            return;
        }

        shelfContainer.innerHTML = items.map(p => `
            <div class="product-card" data-id="${p.id}" data-category="${p.category}">
                ${p.badge ? `<div class="product-card-badge">${p.badge}</div>` : ''}
                <button class="product-wishlist-btn" title="Add to Wishlist" data-id="${p.id}">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </button>
                <div class="product-thumb-area btn-trigger-modal" data-id="${p.id}">
                    <img src="${p.image}" alt="${p.title}" loading="lazy">
                </div>
                <div class="product-info-area">
                    <span class="product-brand">${p.brand}</span>
                    <h3 class="product-title btn-trigger-modal" data-id="${p.id}" title="${p.title}">${p.title}</h3>
                    <div class="product-rating">
                        <span class="stars">★★★★${p.rating >= 4.5 ? '★' : '☆'}</span>
                        <span class="review-count">(${p.reviews.toLocaleString()})</span>
                    </div>
                    ${p.prime ? `<div class="prime-tag">prime <span>Fast Delivery</span></div>` : ''}
                    <div class="product-pricing">
                        <div class="price-row">
                            <span class="current-price">${formatINR(p.price)}</span>
                            <span class="original-price">${formatINR(p.originalPrice)}</span>
                            <span class="discount-percent">(${p.discount}% off)</span>
                        </div>
                    </div>
                    <div class="delivery-note">✓ FREE One-Day Delivery</div>
                    <div class="product-card-actions">
                        <button class="btn-add-cart" data-id="${p.id}">
                            <svg style="width:16px;height:16px;fill:#111" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            Add to Cart
                        </button>
                        <button class="btn-quick-view btn-trigger-modal" data-id="${p.id}" title="Quick View">
                            <svg style="width:16px;height:16px;fill:#444" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ==========================================
    // 5. TOAST NOTIFICATIONS
    // ==========================================
    function showToast(message, icon = '✓') {
        const container = document.getElementById('amzToastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'amz-toast';
        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span>${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    // ==========================================
    // 6. CART ACTIONS
    // ==========================================
    function addToCart(productId, quantity = 1) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += quantity;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                qty: quantity
            });
        }
        saveCart();
        showToast(`Added to Cart: ${product.title.substring(0, 32)}...`);
    }

    function updateCartItemQty(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(i => i.id !== productId);
        saveCart();
        showToast('Item removed from cart', '🗑');
    }

    // ==========================================
    // 7. MODALS LOGIC
    // ==========================================
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('open');
    }

    function openQuickView(productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (!product) return;

        const modalBody = document.getElementById('quickViewBody');
        if (!modalBody) return;

        modalBody.innerHTML = `
            <div class="quick-view-grid">
                <div class="quick-view-media">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="quick-view-content">
                    <span class="product-brand">${product.brand}</span>
                    <h2 class="quick-view-title">${product.title}</h2>
                    <div class="product-rating">
                        <span class="stars">★★★★★</span>
                        <span class="review-count">(${product.reviews.toLocaleString()} ratings)</span>
                    </div>
                    <div style="margin: 12px 0;">
                        <span class="current-price" style="font-size:26px;">${formatINR(product.price)}</span>
                        <span class="original-price" style="margin-left: 8px;">${formatINR(product.originalPrice)}</span>
                        <span class="deal-tag-red" style="margin-left: 8px;">Save ${product.discount}%</span>
                    </div>
                    <div class="delivery-note">✓ In Stock • FREE Scheduled Delivery available</div>
                    <p class="quick-view-desc">${product.desc}</p>
                    <ul class="quick-view-specs">
                        ${Object.entries(product.specs || {}).map(([k, v]) => `<li><strong>${k}:</strong> ${v}</li>`).join('')}
                    </ul>
                    <div style="display:flex;gap:12px;align-items:center;margin-top:auto;">
                        <button class="btn-add-cart" id="modalAddToCartBtn" style="padding:12px 24px;font-size:15px;">
                            Add to Cart
                        </button>
                        <button class="slide-btn" id="modalBuyNowBtn" style="padding:12px 24px;background:var(--amz-btn-orange);border:1px solid #d46b08;color:#fff;">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
            addToCart(product.id, 1);
            closeModal('quickViewModal');
        });

        document.getElementById('modalBuyNowBtn').addEventListener('click', () => {
            addToCart(product.id, 1);
            closeModal('quickViewModal');
            openCartDrawer();
        });

        openModal('quickViewModal');
    }

    function openCartDrawer() {
        const overlay = document.getElementById('cartDrawerOverlay');
        const drawer = document.getElementById('cartDrawer');
        if (overlay) overlay.classList.add('open');
        if (drawer) drawer.classList.add('open');
    }

    function closeCartDrawer() {
        const overlay = document.getElementById('cartDrawerOverlay');
        const drawer = document.getElementById('cartDrawer');
        if (overlay) overlay.classList.remove('open');
        if (drawer) drawer.classList.remove('open');
    }

    function openSideMenu() {
        const overlay = document.getElementById('sideMenuOverlay');
        const drawer = document.getElementById('sideMenuDrawer');
        if (overlay) overlay.classList.add('open');
        if (drawer) drawer.classList.add('open');
    }

    function closeSideMenu() {
        const overlay = document.getElementById('sideMenuOverlay');
        const drawer = document.getElementById('sideMenuDrawer');
        if (overlay) overlay.classList.remove('open');
        if (drawer) drawer.classList.remove('open');
    }

    function triggerCheckoutFlow() {
        if (cart.length === 0) {
            showToast('Your cart is empty!', '⚠️');
            return;
        }

        const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        const orderId = 'OD' + Math.floor(10000000 + Math.random() * 90000000);
        const orderDate = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

        // Save into Orders History
        let orders = [];
        try {
            const rawOrders = localStorage.getItem('amazon_orders');
            if (rawOrders) orders = JSON.parse(rawOrders);
        } catch (e) {}

        orders.unshift({
            id: orderId,
            date: orderDate,
            items: [...cart],
            total: subtotal,
            address: `${deliveryLocation.city} - ${deliveryLocation.pincode}`
        });

        try {
            localStorage.setItem('amazon_orders', JSON.stringify(orders));
        } catch (e) {}

        // Clear cart
        cart = [];
        saveCart();
        closeCartDrawer();

        // Render Checkout Success Modal
        const successBody = document.getElementById('checkoutSuccessBody');
        if (successBody) {
            successBody.innerHTML = `
                <div class="checkout-success-view">
                    <div class="success-check-icon">✓</div>
                    <h2 style="font-size:24px;font-weight:800;color:#0f1111;margin-bottom:8px;">Order Placed Successfully!</h2>
                    <p style="font-size:14px;color:#565959;margin-bottom:16px;">Thank you for your purchase. We have sent you a confirmation email.</p>
                    <div style="background:#f7f7f7;padding:16px;border-radius:6px;margin-bottom:20px;text-align:left;font-size:13.5px;">
                        <p style="margin-bottom:4px;"><strong>Order ID:</strong> #${orderId}</p>
                        <p style="margin-bottom:4px;"><strong>Delivery to:</strong> ${deliveryLocation.city} (${deliveryLocation.pincode})</p>
                        <p style="margin-bottom:4px;"><strong>Estimated Delivery:</strong> Tomorrow by 9 PM</p>
                        <p><strong>Total Paid:</strong> ${formatINR(subtotal)} (Amazon Pay / Prime)</p>
                    </div>
                    <div style="display:flex;gap:12px;justify-content:center;">
                        <button class="slide-btn" id="btnContinueShopping" style="border:none;cursor:pointer;">Continue Shopping</button>
                        <button class="btn-quick-view" id="btnViewPlacedOrders" style="padding:10px 20px;font-weight:600;">View Orders</button>
                    </div>
                </div>
            `;

            document.getElementById('btnContinueShopping').addEventListener('click', () => {
                closeModal('checkoutSuccessModal');
            });

            document.getElementById('btnViewPlacedOrders').addEventListener('click', () => {
                closeModal('checkoutSuccessModal');
                showOrdersModal();
            });
        }

        openModal('checkoutSuccessModal');
    }

    function showOrdersModal() {
        let orders = [];
        try {
            const rawOrders = localStorage.getItem('amazon_orders');
            if (rawOrders) orders = JSON.parse(rawOrders);
        } catch (e) {}

        const listEl = document.getElementById('ordersListContainer');
        if (!listEl) return;

        if (orders.length === 0) {
            listEl.innerHTML = `
                <div style="text-align:center;padding:30px;color:#666;">
                    <p style="font-size:15px;margin-bottom:8px;">You have no past orders yet.</p>
                    <span style="font-size:13px;color:#888;">Items you purchase will appear right here.</span>
                </div>
            `;
        } else {
            listEl.innerHTML = orders.map(order => `
                <div class="order-entry">
                    <div class="order-header-line">
                        <span>ORDER # ${order.id} • ${order.date}</span>
                        <span>Total: <strong>${formatINR(order.total)}</strong></span>
                    </div>
                    <div style="font-size:12px;color:var(--amz-green);font-weight:700;margin-bottom:6px;">✓ Arriving Tomorrow • Delivered to ${order.address}</div>
                    <div class="order-body-items">
                        ${order.items.map(it => `
                            <div style="display:flex;gap:10px;align-items:center;margin-top:6px;">
                                <img src="${it.image}" style="width:36px;height:36px;object-fit:contain;background:#fff;border-radius:3px;border:1px solid #eee;">
                                <span style="font-size:13px;">${it.title} (x${it.qty}) - <strong>${formatINR(it.price * it.qty)}</strong></span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        openModal('ordersModal');
    }

    // ==========================================
    // 8. HERO CAROUSEL LOGIC
    // ==========================================
    function initHeroCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        if (slides.length <= 1) return;

        function setSlide(index) {
            slides.forEach((s, idx) => {
                s.classList.toggle('active', idx === index);
            });
            currentSlide = index;
        }

        const prevBtn = document.getElementById('heroPrevBtn');
        const nextBtn = document.getElementById('heroNextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                const nextIdx = (currentSlide - 1 + slides.length) % slides.length;
                setSlide(nextIdx);
                resetAutoSlide();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const nextIdx = (currentSlide + 1) % slides.length;
                setSlide(nextIdx);
                resetAutoSlide();
            });
        }

        function resetAutoSlide() {
            clearInterval(slideTimer);
            slideTimer = setInterval(() => {
                const nextIdx = (currentSlide + 1) % slides.length;
                setSlide(nextIdx);
            }, 6000);
        }

        resetAutoSlide();
    }

    // ==========================================
    // 9. SEARCH & FILTER LOGIC
    // ==========================================
    function initSearchAndFilter() {
        const searchInput = document.getElementById('mainSearchInput');
        const searchBtn = document.getElementById('mainSearchBtn');
        const searchSelect = document.getElementById('searchCategorySelect');
        const suggestionsBox = document.getElementById('searchSuggestionsBox');
        const clearBtn = document.getElementById('clearSearchBtn');

        function doSearch(query) {
            const cleanQuery = (query || '').toLowerCase().trim();
            const cat = searchSelect ? searchSelect.value : 'all';

            let filtered = PRODUCTS;
            if (cat !== 'all') {
                filtered = filtered.filter(p => p.category === cat);
            }

            if (cleanQuery) {
                filtered = filtered.filter(p =>
                    p.title.toLowerCase().includes(cleanQuery) ||
                    p.brand.toLowerCase().includes(cleanQuery) ||
                    p.category.toLowerCase().includes(cleanQuery) ||
                    (p.desc && p.desc.toLowerCase().includes(cleanQuery))
                );
            }

            renderProductShelf(filtered);

            // Smooth scroll to results
            const shelf = document.getElementById('todaysDealsShelf');
            if (shelf) {
                shelf.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const val = e.target.value.trim();
                if (clearBtn) clearBtn.style.display = val ? 'block' : 'none';

                if (val.length >= 2) {
                    const matches = PRODUCTS.filter(p =>
                        p.title.toLowerCase().includes(val.toLowerCase()) ||
                        p.brand.toLowerCase().includes(val.toLowerCase())
                    ).slice(0, 5);

                    if (suggestionsBox) {
                        if (matches.length > 0) {
                            suggestionsBox.innerHTML = matches.map(m => `
                                <div class="suggestion-item" data-query="${m.title}">
                                    <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                                    <span>${m.title}</span>
                                </div>
                            `).join('');
                            suggestionsBox.style.display = 'block';
                        } else {
                            suggestionsBox.style.display = 'none';
                        }
                    }
                } else if (suggestionsBox) {
                    suggestionsBox.style.display = 'none';
                }
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    if (suggestionsBox) suggestionsBox.style.display = 'none';
                    doSearch(searchInput.value);
                }
            });
        }

        if (clearBtn && searchInput) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                clearBtn.style.display = 'none';
                if (suggestionsBox) suggestionsBox.style.display = 'none';
                doSearch('');
            });
        }

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => {
                if (suggestionsBox) suggestionsBox.style.display = 'none';
                doSearch(searchInput.value);
            });
        }

        if (suggestionsBox && searchInput) {
            suggestionsBox.addEventListener('click', (e) => {
                const item = e.target.closest('.suggestion-item');
                if (item) {
                    const q = item.dataset.query;
                    searchInput.value = q;
                    suggestionsBox.style.display = 'none';
                    doSearch(q);
                }
            });
        }

        // Close suggestions on outside click
        document.addEventListener('click', (e) => {
            if (suggestionsBox && !e.target.closest('.search-container')) {
                suggestionsBox.style.display = 'none';
            }
        });

        // Category Pills
        const categoryPills = document.querySelectorAll('.cat-pill');
        categoryPills.forEach(pill => {
            pill.addEventListener('click', () => {
                categoryPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');

                const cat = pill.dataset.cat;
                selectedCategory = cat;

                if (searchSelect) searchSelect.value = cat;

                if (cat === 'all') {
                    renderProductShelf(PRODUCTS);
                } else {
                    const filtered = PRODUCTS.filter(p => p.category === cat);
                    renderProductShelf(filtered);
                }

                const shelf = document.getElementById('todaysDealsShelf');
                if (shelf) shelf.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // Sub navbar category links
        const subNavLinks = document.querySelectorAll('.sub-nav-link[data-cat]');
        subNavLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const cat = link.dataset.cat;
                const matchPill = document.querySelector(`.cat-pill[data-cat="${cat}"]`);
                if (matchPill) matchPill.click();
            });
        });
    }

    // ==========================================
    // 10. GLOBAL EVENT DELEGATION
    // ==========================================
    function initGlobalListeners() {
        // Add to Cart buttons
        document.addEventListener('click', (e) => {
            const addBtn = e.target.closest('.btn-add-cart');
            if (addBtn && addBtn.dataset.id) {
                addToCart(addBtn.dataset.id, 1);
                return;
            }

            // Quick view modal trigger
            const modalTrigger = e.target.closest('.btn-trigger-modal');
            if (modalTrigger && modalTrigger.dataset.id) {
                openQuickView(modalTrigger.dataset.id);
                return;
            }

            // Wishlist toggle
            const wishBtn = e.target.closest('.product-wishlist-btn');
            if (wishBtn) {
                wishBtn.classList.toggle('active');
                const isSaved = wishBtn.classList.contains('active');
                showToast(isSaved ? 'Item added to your Wish List' : 'Item removed from Wish List', isSaved ? '❤️' : '🤍');
                return;
            }

            // Cart Drawer Quantity controls
            const incBtn = e.target.closest('.btn-cart-inc');
            if (incBtn) {
                updateCartItemQty(incBtn.dataset.id, 1);
                return;
            }

            const decBtn = e.target.closest('.btn-cart-dec');
            if (decBtn) {
                updateCartItemQty(decBtn.dataset.id, -1);
                return;
            }

            const remBtn = e.target.closest('.btn-cart-remove');
            if (remBtn) {
                removeFromCart(remBtn.dataset.id);
                return;
            }

            // Close modal button
            const closeBtn = e.target.closest('.modal-close-btn');
            if (closeBtn) {
                const overlay = closeBtn.closest('.modal-overlay');
                if (overlay) overlay.classList.remove('open');
                return;
            }

            // 4-Pack quad items click
            const quadItem = e.target.closest('.amz-quad-item');
            if (quadItem && quadItem.dataset.id) {
                openQuickView(quadItem.dataset.id);
                return;
            }
        });

        // Open Cart Drawer
        const cartNavBtn = document.getElementById('cartNavBtn');
        if (cartNavBtn) {
            cartNavBtn.addEventListener('click', (e) => {
                e.preventDefault();
                openCartDrawer();
            });
        }

        // Close Cart Drawer
        const cartDrawerClose = document.getElementById('cartDrawerClose');
        const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
        if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
        if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCartDrawer);

        // All menu drawer
        const allMenuBtn = document.getElementById('allMenuBtn');
        const sideMenuClose = document.getElementById('sideMenuCloseBtn');
        const sideMenuOverlay = document.getElementById('sideMenuOverlay');
        if (allMenuBtn) allMenuBtn.addEventListener('click', openSideMenu);
        if (sideMenuClose) sideMenuClose.addEventListener('click', closeSideMenu);
        if (sideMenuOverlay) sideMenuOverlay.addEventListener('click', closeSideMenu);

        // Delivery Location Modal
        const deliverNavBtn = document.getElementById('deliverNavBtn');
        if (deliverNavBtn) {
            deliverNavBtn.addEventListener('click', () => {
                openModal('locationModal');
            });
        }

        const cityPills = document.querySelectorAll('.city-pill');
        cityPills.forEach(p => {
            p.addEventListener('click', () => {
                deliveryLocation.city = p.dataset.city;
                deliveryLocation.pincode = p.dataset.pin;
                saveLocation();
                closeModal('locationModal');
                showToast(`Delivering to ${deliveryLocation.city} - ${deliveryLocation.pincode}`);
            });
        });

        const pincodeSubmit = document.getElementById('pincodeSubmitBtn');
        const pincodeInput = document.getElementById('pincodeInput');
        if (pincodeSubmit && pincodeInput) {
            pincodeSubmit.addEventListener('click', () => {
                const pin = pincodeInput.value.trim();
                if (pin && pin.length >= 5) {
                    deliveryLocation.pincode = pin;
                    deliveryLocation.city = 'India';
                    saveLocation();
                    closeModal('locationModal');
                    showToast(`Delivery location set to ${pin}`);
                } else {
                    showToast('Please enter a valid PIN code', '⚠️');
                }
            });
        }

        // Returns & Orders
        const returnsNavBtn = document.getElementById('returnsNavBtn');
        if (returnsNavBtn) {
            returnsNavBtn.addEventListener('click', (e) => {
                e.preventDefault();
                showOrdersModal();
            });
        }

        // Proceed to Checkout
        const proceedCheckoutBtn = document.getElementById('btnProceedCheckout');
        if (proceedCheckoutBtn) {
            proceedCheckoutBtn.addEventListener('click', triggerCheckoutFlow);
        }

        // Back to top
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    // ==========================================
    // 11. INITIALIZATION ON DOM READY
    // ==========================================
    document.addEventListener('DOMContentLoaded', () => {
        initStorage();
        updateLocationUI();
        checkUserLoginState();
        renderProductShelf(PRODUCTS);
        updateCartUI();
        initHeroCarousel();
        initSearchAndFilter();
        initGlobalListeners();
    });

})();
