// Product Data
const products = [
    {
        id: 1,
        name: "MacBook Pro 14\"",
        price: 1999,
        category: "laptops",
        image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "The MacBook Pro 14\" delivers game-changing performance with the M1 Pro chip, featuring a stunning Liquid Retina XDR display, incredible battery life, and all the ports you need.",
        specs: {
            processor: "M1 Pro chip (8-core CPU, 14-core GPU)",
            memory: "16GB unified memory",
            storage: "512GB SSD",
            display: "14.2-inch Liquid Retina XDR (3024×1964)",
            battery: "Up to 17 hours",
            weight: "3.5 pounds (1.6 kg)"
        },
        images: [
            "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2148220/pexels-photo-2148220.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        ]
    },
    {
        id: 2,
        name: "iPhone 13 Pro",
        price: 999,
        category: "phones",
        image: "https://images.pexels.com/photos/13360476/pexels-photo-13360476.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "The iPhone 13 Pro features a Pro camera system optimized for low-light photography, Cinematic mode for recording videos with shallow depth of field, and the powerful A15 Bionic chip.",
        specs: {
            display: "6.1-inch Super Retina XDR",
            chip: "A15 Bionic",
            cameras: "Pro 12MP camera system (Telephoto, Wide, Ultra Wide)",
            battery: "Up to 22 hours video playback",
            storage: "128GB",
            colors: "Graphite, Gold, Silver, Sierra Blue"
        },
        images: [
            "https://images.pexels.com/photos/13367286/pexels-photo-13367286.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/8947493/pexels-photo-8947493.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        ]
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249,
        category: "accessories",
        image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "AirPods Pro feature Active Noise Cancellation for immersive sound, Transparency mode for hearing the world around you, and a customizable fit for all-day comfort.",
        specs: {
            battery: "Up to 4.5 hours listening time (ANC on)",
            case: "Wireless charging case",
            features: "Active Noise Cancellation, Transparency mode",
            connectivity: "Bluetooth 5.0",
            waterResistance: "Sweat and water resistant (IPX4)"
        },
        images: [
            "https://images.pexels.com/photos/7987846/pexels-photo-7987846.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/6857205/pexels-photo-6857205.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        ]
    },
    {
        id: 4,
        name: "Dell XPS 15",
        price: 1499,
        category: "laptops",
        image: "https://images.pexels.com/photos/1092652/pexels-photo-1092652.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "The Dell XPS 15 combines powerful performance with a stunning InfinityEdge display in a thin, lightweight design perfect for creators and professionals.",
        specs: {
            processor: "11th Gen Intel Core i7-11800H",
            memory: "16GB DDR4",
            storage: "512GB SSD",
            display: "15.6\" 4K UHD+ (3840×2400) InfinityEdge",
            graphics: "NVIDIA GeForce RTX 3050 Ti",
            weight: "4.5 pounds (2.05 kg)"
        },
        images: [
            "https://images.pexels.com/photos/3776438/pexels-photo-3776438.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/15598924/pexels-photo-15598924/free-photo-of-indian-man-is-holding-his-laptop-in-his-lap.jpeg?auto=compress&cs=tinysrgb&w=600",
            
        ]
    },
    {
        id: 5,
        name: "Samsung Galaxy S22",
        price: 799,
        category: "phones",
        image: "https://images.pexels.com/photos/13780425/pexels-photo-13780425.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "The Samsung Galaxy S22 features a pro-grade camera system, Nightography for stunning low-light photos, and the fastest chip ever in a Galaxy phone.",
        specs: {
            display: "6.1\" Dynamic AMOLED 2X (2340×1080)",
            chip: "Snapdragon 8 Gen 1",
            cameras: "50MP wide + 12MP ultra wide + 10MP telephoto",
            battery: "3700mAh (all-day battery)",
            storage: "128GB",
            colors: "Phantom Black, White, Green, Pink Gold"
        },
        images: [
            "https://images.pexels.com/photos/15493878/pexels-photo-15493878/free-photo-of-hands-on-samsung-galaxy-s23-ultra-5g-green-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/30466750/pexels-photo-30466750/free-photo-of-close-up-of-a-samsung-smartphone-in-hand.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/30466738/pexels-photo-30466738/free-photo-of-close-up-of-modern-smartphone-with-triple-cameras.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        id: 6,
        name: "Apple Watch Series 7",
        price: 399,
        category: "accessories",
        image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Apple Watch Series 7 features a larger, more advanced display, faster charging, and the most durable Apple Watch yet. Measure your blood oxygen level and take an ECG anytime.",
        specs: {
            display: "45mm or 41mm Always-On Retina",
            features: "Blood Oxygen app, ECG app, Fall Detection",
            battery: "All-day battery (18 hours)",
            waterResistance: "Water resistant 50 meters",
            connectivity: "GPS + Cellular options"
        },
        images: [
            "https://images.pexels.com/photos/5081424/pexels-photo-5081424.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/5083221/pexels-photo-5083221.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/3927389/pexels-photo-3927389.jpeg?auto=compress&cs=tinysrgb&w=600"
        ]
    },
    {
        id: 7,
        name: "iPad Pro 12.9\"",
        price: 1099,
        category: "laptops",
        image: "https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "The iPad Pro features the M1 chip for next-level performance, a stunning Liquid Retina XDR display, and 5G connectivity. The ultimate iPad experience.",
        specs: {
            chip: "M1 chip with 8-core CPU, 8-core GPU",
            display: "12.9\" Liquid Retina XDR (2732×2048)",
            storage: "128GB",
            cameras: "12MP Wide + 10MP Ultra Wide",
            accessories: "Compatible with Magic Keyboard and Apple Pencil"
        },
        images: [
            "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/1334596/pexels-photo-1334596.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ]
    },
    {
        id: 8,
        name: "Sony WH-1000XM4",
        price: 349,
        category: "accessories",
        image: "https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Industry-leading noise cancellation with Dual Noise Sensor technology, touch controls, and up to 30-hour battery life make these wireless headphones perfect for travel and work.",
        specs: {
            noiseCancellation: "Industry-leading ANC",
            battery: "Up to 30 hours (with ANC on)",
            features: "Touch controls, Speak-to-Chat, DSEE Extreme",
            connectivity: "Bluetooth 5.0, NFC",
            weight: "8.95 oz (254 g)"
        },
        images: [
            "https://images.pexels.com/photos/5382359/pexels-photo-5382359.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/29377913/pexels-photo-29377913/free-photo-of-close-up-of-black-over-ear-headphones.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
            "https://images.pexels.com/photos/10292806/pexels-photo-10292806.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
        ]
    }
];

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const cartCountElements = document.querySelectorAll('#cart-count');
const featuredProductsContainer = document.getElementById('featured-products');
const allProductsContainer = document.getElementById('all-products');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalElement = document.getElementById('subtotal');
const totalElement = document.getElementById('total');
const categoryFilter = document.getElementById('category-filter');
const sortBy = document.getElementById('sort-by');

// Cart State
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the app
function init() {
    setupEventListeners();
    updateCartCount();
    
    // Load content based on current page
    if (featuredProductsContainer) {
        loadFeaturedProducts();
    }
    
    if (allProductsContainer) {
        loadAllProducts();
    }
    
    if (cartItemsContainer) {
        loadCartItems();
    }
    
    // Load product detail if on that page
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetail();
    }
}

// Set up event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    // Sort by
    if (sortBy) {
        sortBy.addEventListener('change', sortProducts);
    }
}

// Load featured products on home page
function loadFeaturedProducts() {
    // Get 4 random featured products
    const featuredProducts = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
    
    featuredProductsContainer.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            </div>
            <div class="product-info">
                <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Load all products on products page
function loadAllProducts(filteredProducts = products) {
    allProductsContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <a href="product-detail.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            </div>
            <div class="product-info">
                <h3><a href="product-detail.html?id=${product.id}">${product.name}</a></h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Load product details
function loadProductDetail() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Find the product
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update breadcrumb
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-name-breadcrumb').textContent = product.name;
    
    // Create array of all images (main + additional)
    const allImages = [product.image, ...product.images];
    let currentImageIndex = 0;
    
    // Render product details
    document.getElementById('product-detail').innerHTML = `
        <div class="product-detail-image">
            <div class="main-image">
                <img src="${allImages[0]}" alt="${product.name}" id="main-product-image">
                <button class="image-nav-btn prev-btn">&lt;</button>
                <button class="image-nav-btn next-btn">&gt;</button>
            </div>
            <div class="thumbnail-images">
                ${allImages.map((img, index) => `
                    <img src="${img}" alt="${product.name} - ${index + 1}" 
                         class="thumbnail ${index === 0 ? 'active' : ''}" 
                         data-index="${index}">
                `).join('')}
            </div>
        </div>
        <div class="product-detail-info">
            <!-- Rest of your product info HTML -->
        </div>
    `;
    
    // Get DOM elements
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Navigation functions
    function showImage(index) {
        // Validate index
        if (index < 0) index = allImages.length - 1;
        if (index >= allImages.length) index = 0;
        
        // Update main image
        mainImage.src = allImages[index];
        
        // Update active thumbnail
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        
        currentImageIndex = index;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        showImage(currentImageIndex - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showImage(currentImageIndex + 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showImage(currentImageIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showImage(currentImageIndex + 1);
        }
    });
    
    // Thumbnail click events
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            showImage(index);
        });
    });
    
    // Add to cart button event listener
    document.querySelector('.add-to-cart-detail')?.addEventListener('click', addToCartFromDetail);
}

// Add to cart from detail page
function addToCartFromDetail() {
    const productId = parseInt(this.dataset.id);
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const product = products.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification(`${quantity} ${product.name} added to cart!`);
}

// Filter products by category
function filterProducts() {
    const category = categoryFilter.value;
    
    if (category === 'all') {
        loadAllProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => product.category === category);
    loadAllProducts(filteredProducts);
}

// Sort products
function sortProducts() {
    const sortValue = sortBy.value;
    let sortedProducts = [...products];
    
    if (categoryFilter.value !== 'all') {
        sortedProducts = sortedProducts.filter(product => product.category === categoryFilter.value);
    }
    
    switch (sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    loadAllProducts(sortedProducts);
}

// Add product to cart
function addToCart(e) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Update cart count in header
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Load cart items on cart page
function loadCartItems() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty. <a href="products.html">Browse products</a></p>';
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <span class="remove-item" data-id="${item.id}">Remove</span>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to quantity controls
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', updateQuantity);
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
    
    updateCartSummary();
}

// Update item quantity in cart
function updateQuantity(e) {
    const productId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === productId);
    
    if (e.target.classList.contains('minus')) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
    } else if (e.target.classList.contains('plus')) {
        item.quantity += 1;
    } else if (e.target.classList.contains('quantity-input')) {
        const newQuantity = parseInt(e.target.value);
        if (newQuantity >= 1) {
            item.quantity = newQuantity;
        }
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Reload cart items
    loadCartItems();
    updateCartCount();
}

// Remove item from cart
function removeItem(e) {
    const productId = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== productId);
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Reload cart items
    loadCartItems();
    updateCartCount();
    
    // Show notification
    showNotification('Item removed from cart');
}

// Update cart summary (subtotal and total)
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5.99;
    const total = subtotal + shipping;
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);