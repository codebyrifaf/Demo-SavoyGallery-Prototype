// Savoy Gallery - Application Logic

// Mock Data
const MOCK = {
  products: [
    {
      id: 1,
      name: "Carrot Delight",
      shortDesc: "Smooth carrot-based premium ice cream",
      fullDesc: "A creamy and refreshing carrot ice cream made with natural carrot puree and Savoy's premium base. Perfect blend of sweetness and natural vegetable goodness.",
      priceBDT: 160,
      category: "premium",
      images: ["assets/img/p1.jpg"],
      isSeasonal: false,
      allergens: ["milk"],
      isGalleryExclusive: true
    },
    {
      id: 2,
      name: "Jalpai Sorbet",
      shortDesc: "Fresh and tangy natural jalpai",
      fullDesc: "A natural sorbet made from fresh jalpai (olive), offering a sweet–tangy flavor perfect for warm days. Locally inspired, naturally delicious.",
      priceBDT: 140,
      category: "natural",
      images: ["assets/img/p2.jpg"],
      isSeasonal: false,
      allergens: [],
      isGalleryExclusive: true
    },
    {
      id: 3,
      name: "Chocolate Fudge",
      shortDesc: "Rich, dense chocolate experience",
      fullDesc: "Our signature chocolate fudge made with high-quality cocoa, delivering a decadent chocolate punch. European-style richness in every scoop.",
      priceBDT: 200,
      category: "premium",
      images: ["assets/img/p3.jpg"],
      isSeasonal: false,
      allergens: ["milk"],
      isGalleryExclusive: false
    },
    {
      id: 4,
      name: "Lychee Bliss",
      shortDesc: "Seasonal lychee flavor",
      fullDesc: "Made from fresh seasonal lychee pulp, this soft and juicy flavor is one of our summer specials. Available for limited time only.",
      priceBDT: 180,
      category: "seasonal",
      images: ["assets/img/p4.jpg"],
      isSeasonal: true,
      allergens: ["milk"],
      isGalleryExclusive: false
    },
    {
      id: 5,
      name: "Orange Blast",
      shortDesc: "Zesty citrus refreshment",
      fullDesc: "A citrusy ice cream made from natural orange zest and juice, refreshing and aromatic. Pure orange goodness with no artificial flavors.",
      priceBDT: 150,
      category: "natural",
      images: ["assets/img/p5.jpg"],
      isSeasonal: false,
      allergens: [],
      isGalleryExclusive: false
    },
    {
      id: 6,
      name: "Discone Special",
      shortDesc: "Chocolate disc + molten fudge",
      fullDesc: "Savoy's innovation: a dark chocolate disc with molten fudge core, honeycomb bits, and crunchy cone layers. A multi-textured dessert experience.",
      priceBDT: 250,
      category: "premium",
      images: ["assets/img/p6.jpg"],
      isSeasonal: false,
      allergens: ["milk", "nuts"],
      isGalleryExclusive: true
    },
    {
      id: 7,
      name: "Shahi Kheer",
      shortDesc: "Traditional Bengali dessert flavor",
      fullDesc: "Inspired by the classic Bangladeshi rice pudding, this ice cream captures the essence of cardamom, milk, and slow-cooked rice in every spoonful.",
      priceBDT: 170,
      category: "premium",
      images: ["assets/img/p7.jpg"],
      isSeasonal: false,
      allergens: ["milk"],
      isGalleryExclusive: false
    },
    {
      id: 8,
      name: "Mawa Kulfi",
      shortDesc: "Authentic kulfi experience",
      fullDesc: "Dense, creamy kulfi made with reduced milk (mawa), cardamom, and pistachios. A timeless favorite with Savoy's premium touch.",
      priceBDT: 190,
      category: "premium",
      images: ["assets/img/p8.jpg"],
      isSeasonal: false,
      allergens: ["milk", "nuts"],
      isGalleryExclusive: false
    },
    {
      id: 9,
      name: "Vanilla Supreme",
      shortDesc: "Classic Madagascar vanilla",
      fullDesc: "Made with real Madagascar vanilla beans, this is vanilla ice cream at its finest. Smooth, rich, and perfectly balanced.",
      priceBDT: 130,
      category: "regular",
      images: ["assets/img/p9.jpg"],
      isSeasonal: false,
      allergens: ["milk"],
      isGalleryExclusive: false
    },
    {
      id: 10,
      name: "Strawberry Fields",
      shortDesc: "Fresh strawberry goodness",
      fullDesc: "Real strawberry pieces in creamy ice cream base. Sweet, fruity, and naturally colored.",
      priceBDT: 140,
      category: "regular",
      images: ["assets/img/p10.jpg"],
      isSeasonal: false,
      allergens: ["milk"],
      isGalleryExclusive: false
    },
    {
      id: 11,
      name: "Butterscotch Cashew",
      shortDesc: "Crunchy butterscotch with cashews",
      fullDesc: "Buttery caramel ice cream loaded with crunchy butterscotch chips and premium cashew pieces.",
      priceBDT: 165,
      category: "premium",
      images: ["assets/img/p11.jpg"],
      isSeasonal: false,
      allergens: ["milk", "nuts"],
      isGalleryExclusive: false
    },
    {
      id: 12,
      name: "Coffee Craze",
      shortDesc: "Bold coffee flavor",
      fullDesc: "Real coffee extract blended into rich cream. Perfect for coffee lovers who want their caffeine fix in frozen form.",
      priceBDT: 155,
      category: "premium",
      images: ["assets/img/p12.jpg"],
      isSeasonal: false,
      allergens: ["milk"],
      isGalleryExclusive: false
    }
  ],
  outlets: [
    {
      id: 1,
      name: "Savoy Gallery Banani",
      address: "Plot 50, Road 7B, Banani, Dhaka 1213",
      lat: 23.7935,
      lng: 90.4066,
      hours: "10 AM – 11 PM",
      phone: "+880 1234-567890",
      isFlagship: true
    },
    {
      id: 2,
      name: "Savoy Gallery Dhanmondi",
      address: "Chef's Table, Road 27, Dhanmondi, Dhaka",
      lat: 23.7465,
      lng: 90.3742,
      hours: "10 AM – 11 PM",
      phone: "+880 1234-567891",
      isFlagship: false
    },
    {
      id: 3,
      name: "Savoy Gallery United City",
      address: "United City, Madani Ave, Dhaka",
      lat: 23.8158,
      lng: 90.4462,
      hours: "10 AM – 11 PM",
      phone: "+880 1234-567892",
      isFlagship: false
    },
    {
      id: 4,
      name: "Savoy Gallery Gulshan",
      address: "Gulshan Avenue, Gulshan 1, Dhaka",
      lat: 23.7809,
      lng: 90.4161,
      hours: "10 AM – 11 PM",
      phone: "+880 1234-567893",
      isFlagship: false
    },
    {
      id: 5,
      name: "Savoy Gallery Tejgaon",
      address: "The Garage Food Court, Tejgaon, Dhaka",
      lat: 23.7563,
      lng: 90.3997,
      hours: "11 AM – 10 PM",
      phone: "+880 1234-567894",
      isFlagship: false
    }
  ],
  tours: [
    {
      id: 1,
      title: "Savoy Factory Tour",
      durationMinutes: 60,
      priceBDT: 0,
      availableSlots: ["10:00 AM", "12:00 PM", "3:00 PM"]
    },
    {
      id: 2,
      title: "Premium Ice Cream Lab Experience",
      durationMinutes: 90,
      priceBDT: 500,
      availableSlots: ["11:00 AM", "2:00 PM"]
    }
  ]
};

// Initialize bookings array
if (!MOCK.bookings) MOCK.bookings = [];

// Cart State
const CART = [];

// Orders State
const ORDERS = [];

// Generate order ID
function generateOrderId() {
  return 'ORD' + Date.now().toString().slice(-8);
}

// Utility: Toast notification
const ui = {};

ui.toast = function(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '100px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'rgba(0, 0, 0, 0.85)';
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '24px';
    toast.style.zIndex = '10000';
    toast.style.fontSize = '14px';
    toast.style.fontWeight = '500';
    toast.style.transition = 'opacity 0.3s ease';
    toast.style.opacity = '0';
    toast.style.pointerEvents = 'none';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.style.opacity = '1';
  
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 3000);
};

// Header interactions will go here
const searchBtn = document.querySelector('.header-right .icon-btn:first-child');
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    navigateTo('menu');
    setTimeout(() => {
      showSearchBar();
    }, 100);
  });
}

function showSearchBar() {
  const menuScreen = document.getElementById('screen-menu');
  let searchBar = document.getElementById('search-bar');
  
  if (!searchBar) {
    searchBar = document.createElement('div');
    searchBar.id = 'search-bar';
    searchBar.className = 'search-bar';
    searchBar.innerHTML = `
      <input type="text" id="search-input" placeholder="Search flavors..." autofocus>
      <button id="search-close">×</button>
    `;
    
    const menuCategories = menuScreen.querySelector('.menu-categories');
    menuCategories.parentNode.insertBefore(searchBar, menuCategories);
    
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query) {
        const filtered = MOCK.products.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.shortDesc.toLowerCase().includes(query)
        );
        renderFilteredProducts(filtered);
      } else {
        renderMenu('all');
      }
    });
    
    searchClose.addEventListener('click', () => {
      searchBar.remove();
      renderMenu('all');
    });
  }
}

function renderFilteredProducts(products) {
  productGrid.innerHTML = '';
  
  if (products.length === 0) {
    productGrid.innerHTML = '<div class="no-results">No products found</div>';
    return;
  }
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p class="card-desc">${product.shortDesc}</p>
        <div class="card-footer">
          <span class="price">${product.priceBDT} BDT</span>
          <button class="add-btn" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('add-btn')) {
        openProductModal(product);
      }
    });
    
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product);
    });
    
    productGrid.appendChild(card);
  });
}

function showSearchBar() {
  const menuScreen = document.getElementById('screen-menu');
  let searchBar = document.getElementById('search-bar');
  
  if (!searchBar) {
    searchBar = document.createElement('div');
    searchBar.id = 'search-bar';
    searchBar.className = 'search-bar';
    searchBar.innerHTML = `
      <input type="text" id="search-input" placeholder="Search flavors..." autofocus>
      <button id="search-close">×</button>
    `;
    
    const menuCategories = menuScreen.querySelector('.menu-categories');
    menuCategories.parentNode.insertBefore(searchBar, menuCategories);
    
    const searchInput = document.getElementById('search-input');
    const searchClose = document.getElementById('search-close');
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (query) {
        const filtered = MOCK.products.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.shortDesc.toLowerCase().includes(query)
        );
        renderFilteredProducts(filtered);
      } else {
        renderMenu('all');
      }
    });
    
    searchClose.addEventListener('click', () => {
      searchBar.remove();
      renderMenu('all');
    });
  }
}

function renderFilteredProducts(products) {
  productGrid.innerHTML = '';
  
  if (products.length === 0) {
    productGrid.innerHTML = '<div class="no-results">No products found</div>';
    return;
  }
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p class="card-desc">${product.shortDesc}</p>
        <div class="card-footer">
          <span class="price">${product.priceBDT} BDT</span>
          <button class="add-btn" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('add-btn')) {
        openProductModal(product);
      }
    });
    
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product);
    });
    
    productGrid.appendChild(card);
  });
}

// Render Home Screen
function renderHomeScreen() {
  const homeScreen = document.getElementById('screen-home');
  
  // Clear existing static content
  homeScreen.innerHTML = '';
  
  // Hero Banner - use first product as featured
  const heroBanner = document.createElement('section');
  heroBanner.className = 'hero-banner';
  const heroProduct = MOCK.products[0];
  heroBanner.innerHTML = `
    <img src="${heroProduct.images[0]}" alt="${heroProduct.name}">
    <div class="hero-overlay">
      <h2>${heroProduct.name}</h2>
      <p>${heroProduct.shortDesc}</p>
    </div>
  `;
  homeScreen.appendChild(heroBanner);
  
  // Quick Actions
  const quickActions = document.createElement('section');
  quickActions.className = 'quick-actions';
  const actions = [
    { name: "Order", icon: "order-icon.svg" },
    { name: "Locator", icon: "locator-icon.svg" },
    { name: "Tours", icon: "tours-icon.svg" },
    { name: "Loyalty", icon: "loyalty-icon.svg" }
  ];
  
  actions.forEach(action => {
    const btn = document.createElement('button');
    btn.className = 'action-btn';
    btn.innerHTML = `
      <img src="assets/icons/${action.icon}" alt="${action.name}">
      <span>${action.name}</span>
    `;
    
    btn.addEventListener('click', () => {
      console.log(`${action.name} clicked`);
      
      // Handle Tours button - open booking modal
      if (action.name === 'Tours') {
        document.getElementById('tour-modal').classList.remove('hidden');
      }
      
      // Handle Locator button
      if (action.name === 'Locator') {
        navigateTo('locator');
      }
      
      // Handle Loyalty button - navigate to account to see points
      if (action.name === 'Loyalty') {
        navigateTo('account');
        // Scroll to stats section
        setTimeout(() => {
          const statsSection = document.querySelector('.account-stats');
          if (statsSection) {
            statsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      
      // Handle Order button
      if (action.name === 'Order') {
        navigateTo('menu');
      }
    });
    quickActions.appendChild(btn);
  });
  homeScreen.appendChild(quickActions);
  
  // Featured Flavors
  const featuredFlavors = document.createElement('section');
  featuredFlavors.className = 'featured-flavors';
  
  const title = document.createElement('h2');
  title.textContent = 'Featured Flavors';
  featuredFlavors.appendChild(title);
  
  const flavorScroll = document.createElement('div');
  flavorScroll.className = 'flavor-scroll';
  
  MOCK.products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p class="card-desc">${product.shortDesc}</p>
        <div class="card-footer">
          <span class="price">${product.priceBDT} BDT</span>
          <button class="add-btn" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    
    // Add to cart button handler
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
      addToCart(product);
    });
    
    flavorScroll.appendChild(card);
  });
  
  featuredFlavors.appendChild(flavorScroll);
  homeScreen.appendChild(featuredFlavors);
  
  // Today's Specials
  const todaySpecials = document.createElement('section');
  todaySpecials.className = 'today-specials';
  
  const specialTitle = document.createElement('h2');
  specialTitle.textContent = "Today's Specials";
  todaySpecials.appendChild(specialTitle);
  
  const specialCard = document.createElement('div');
  specialCard.className = 'special-card';
  
  // Find a seasonal product for today's special
  const seasonalProduct = MOCK.products.find(p => p.isSeasonal) || MOCK.products[3];
  specialCard.innerHTML = `
    <img src="${seasonalProduct.images[0]}" alt="${seasonalProduct.name}">
    <div class="special-content">
      <h3>${seasonalProduct.name}</h3>
      <p>${seasonalProduct.fullDesc}</p>
      <span class="price">${seasonalProduct.priceBDT} BDT</span>
      <button class="order-btn">Order Now</button>
    </div>
  `;
  
  // Add click handler for Order Now button
  specialCard.querySelector('.order-btn').addEventListener('click', () => {
    addToCart(seasonalProduct);
  });
  
  todaySpecials.appendChild(specialCard);
  homeScreen.appendChild(todaySpecials);
}

// Initialize home screen on load
document.addEventListener('DOMContentLoaded', () => {
  renderHomeScreen();
});

// Render Menu Screen
const productGrid = document.querySelector('.product-grid');

function renderMenu(category = 'all') {
  // Clear existing products
  productGrid.innerHTML = '';
  
  // Filter products by category
  let filtered = MOCK.products;
  if (category !== 'all') {
    filtered = MOCK.products.filter(p => p.category === category);
  }
  
  // Render filtered products
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      <div class="card-content">
        <h3>${product.name}</h3>
        <p class="card-desc">${product.shortDesc}</p>
        <div class="card-footer">
          <span class="price">${product.priceBDT} BDT</span>
          <button class="add-btn" data-id="${product.id}">+</button>
        </div>
      </div>
    `;
    
    // Open modal when card is clicked (except the add button)
    card.addEventListener('click', (e) => {
      // Don't open modal if clicking the add button
      if (!e.target.classList.contains('add-btn')) {
        openProductModal(product);
      }
    });
    
    // Add to cart button handler (quick add without opening modal)
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent opening modal
      addToCart(product);
    });
    
    productGrid.appendChild(card);
  });
  
  console.log(`Menu rendered with ${filtered.length} products (category: ${category})`);
}

// Product Detail Modal
const productModal = document.getElementById('product-modal');
const modalName = productModal.querySelector('.modal-name');
const modalDesc = productModal.querySelector('.modal-fullDesc');
const modalPrice = productModal.querySelector('.modal-price');
const modalAllergens = productModal.querySelector('.modal-allergens');
const modalImages = productModal.querySelector('.modal-images');
const modalAddBtn = document.getElementById('modal-add-to-cart');
const modalCloseBtn = document.getElementById('modal-close');
const modalOverlay = productModal.querySelector('.modal-overlay');

function openProductModal(product) {
  // Populate modal with product data
  modalName.textContent = product.name;
  modalDesc.textContent = product.fullDesc;
  modalPrice.textContent = product.priceBDT + ' BDT';
  modalAllergens.textContent = product.allergens.join(', ') || 'None';
  
  // Render product images
  modalImages.innerHTML = '';
  product.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = product.name;
    img.loading = 'lazy';
    modalImages.appendChild(img);
  });
  
  // Show modal
  productModal.classList.remove('hidden');
  
  // Add to cart handler
  modalAddBtn.onclick = () => {
    addToCart(product);
    productModal.classList.add('hidden');
  };
}

// Close modal handlers
modalCloseBtn.addEventListener('click', () => {
  productModal.classList.add('hidden');
});

modalOverlay.addEventListener('click', () => {
  productModal.classList.add('hidden');
});

// Cart Drawer
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartCloseBtn = document.getElementById('cart-close');
const cartCheckoutBtn = document.getElementById('cart-checkout');

function addToCart(product) {
  // Check if product already exists in cart
  const existingItem = CART.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.qty = (existingItem.qty || 1) + 1;
    ui.toast(`${product.name} quantity updated`);
  } else {
    CART.push({ ...product, qty: 1 });
    ui.toast(`${product.name} added to cart`);
  }
  
  renderCart();
  cartDrawer.classList.remove('hidden');
  console.log("Cart updated:", CART);
}

function removeFromCart(productId) {
  const index = CART.findIndex(item => item.id === productId);
  if (index !== -1) {
    CART.splice(index, 1);
    renderCart();
  }
}

function updateQuantity(productId, delta) {
  const item = CART.find(item => item.id === productId);
  if (item) {
    item.qty = (item.qty || 1) + delta;
    if (item.qty <= 0) {
      removeFromCart(productId);
    } else {
      renderCart();
    }
  }
}

function renderCart() {
  cartItemsContainer.innerHTML = '';
  
  if (CART.length === 0) {
    cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    cartSubtotal.textContent = '0 BDT';
    return;
  }
  
  let subtotal = 0;
  
  CART.forEach(item => {
    const qty = item.qty || 1;
    subtotal += item.priceBDT * qty;
    
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">${item.priceBDT} BDT</span>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn minus">−</button>
        <span class="qty">${qty}</span>
        <button class="qty-btn plus">+</button>
      </div>
    `;
    
    const qtySpan = div.querySelector('.qty');
    
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty = (item.qty || 1) + 1;
      qtySpan.textContent = item.qty;
      renderCart();
    });
    
    div.querySelector('.minus').addEventListener('click', () => {
      if ((item.qty || 1) > 1) {
        item.qty--;
        qtySpan.textContent = item.qty;
        renderCart();
      }
    });
    
    cartItemsContainer.appendChild(div);
  });
  
  cartSubtotal.textContent = subtotal + ' BDT';
}

// Cart close button
cartCloseBtn.addEventListener('click', () => {
  cartDrawer.classList.add('hidden');
});

// Cart checkout button
cartCheckoutBtn.addEventListener('click', () => {
  if (CART.length === 0) {
    ui.toast("Cart is empty");
    return;
  }
  
  // Navigate to checkout screen
  cartDrawer.classList.add('hidden');
  navigateTo('checkout');
});

// Factory Tour Booking Modal
const tourModal = document.getElementById('tour-modal');
const tourCloseBtn = document.getElementById('tour-close');
const tourForm = document.getElementById('tour-form');
const tourOverlay = tourModal.querySelector('.modal-overlay');

// Close tour modal
tourCloseBtn.addEventListener('click', () => {
  tourModal.classList.add('hidden');
});

tourOverlay.addEventListener('click', () => {
  tourModal.classList.add('hidden');
});

// Handle tour form submission
tourForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const booking = {
    id: Date.now(),
    name: formData.get('name'),
    phone: formData.get('phone'),
    datetime: formData.get('datetime'),
    pax: parseInt(formData.get('pax')),
    createdAt: new Date().toISOString()
  };
  
  // Add booking to mock data
  MOCK.bookings.push(booking);
  console.log("Booking created:", booking);
  console.log("All bookings:", MOCK.bookings);
  
  // Reset form and close modal
  e.target.reset();
  tourModal.classList.add('hidden');
  
  // Show success message
  ui.toast("Tour booking confirmed! ✓");
});

// Initialize menu screen
renderMenu();

// Future: menu screen rendering and filters
const menuScreen = document.getElementById('screen-menu');
const menuCategoryButtons = document.querySelectorAll('.menu-categories button');

menuCategoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Category selected:", btn.dataset.cat);
    
    // Remove active class from all category buttons
    menuCategoryButtons.forEach(b => b.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Render menu with selected category
    renderMenu(btn.dataset.cat);
  });
});

// Render Outlet Locator Screen
function renderLocatorScreen() {
  const outletsList = document.querySelector('.outlets-list');
  outletsList.innerHTML = '';
  
  MOCK.outlets.forEach(outlet => {
    const card = document.createElement('div');
    card.className = 'locator-outlet-card';
    card.innerHTML = `
      <div class="locator-outlet-header">
        <h3>${outlet.name}</h3>
        ${outlet.isFlagship ? '<span class="flagship-badge">Flagship</span>' : ''}
      </div>
      <div class="locator-outlet-details">
        <div class="locator-detail">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 14.5C8 14.5 13.5 10 13.5 6C13.5 3.23858 11.2614 1 8.5 1C5.73858 1 3.5 3.23858 3.5 6C3.5 10 8 14.5 8 14.5Z" stroke="#6b4423" stroke-width="1.5"/>
            <circle cx="8" cy="6" r="1.5" fill="#6b4423"/>
          </svg>
          <span>${outlet.address}</span>
        </div>
        <div class="locator-detail">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z" stroke="#6b4423" stroke-width="1.5"/>
            <path d="M8 4V8L10.5 9.5" stroke="#6b4423" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>${outlet.hours}</span>
        </div>
        <div class="locator-detail">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1.5 3.5H14.5V12C14.5 12.8284 13.8284 13.5 13 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V3.5Z" stroke="#6b4423" stroke-width="1.5"/>
            <path d="M5 1.5V5.5M11 1.5V5.5" stroke="#6b4423" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span>${outlet.phone}</span>
        </div>
      </div>
      <div class="locator-actions">
        <button class="locator-btn" onclick="window.open('https://maps.google.com/?q=${outlet.lat},${outlet.lng}', '_blank')">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1.5L14.5 5.5V10.5L8 14.5L1.5 10.5V5.5L8 1.5Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M8 8.5V14.5M8 8.5L14.5 5.5M8 8.5L1.5 5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Directions
        </button>
        <button class="locator-btn-secondary" onclick="window.location.href='tel:${outlet.phone}'">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.32929L4.79999 9.09899C5.61344 10.875 7.125 12.3866 8.90101 13.2L9.67071 11.6606C9.86603 11.2679 10.2955 11.0492 10.7285 11.1214L15.1644 11.8607C15.6466 11.9411 16 12.3583 16 12.8471V15C16 15.5523 15.5523 16 15 16H13C6.92487 16 2 11.0751 2 5V3Z" fill="#6b4423"/>
          </svg>
          Call
        </button>
      </div>
    `;
    outletsList.appendChild(card);
  });
}

// Locator back button
const locatorBackBtn = document.getElementById('locator-back');
if (locatorBackBtn) {
  locatorBackBtn.addEventListener('click', () => {
    navigateTo('home');
  });
}

// Render Checkout Screen
function renderCheckoutScreen() {
  const checkoutItems = document.getElementById('checkout-items');
  const outletSelector = document.getElementById('outlet-selector');
  const checkoutTotal = document.getElementById('checkout-total-amount');
  
  // Render checkout items
  checkoutItems.innerHTML = '';
  let subtotal = 0;
  
  CART.forEach(item => {
    const qty = item.qty || 1;
    const itemTotal = item.priceBDT * qty;
    subtotal += itemTotal;
    
    const div = document.createElement('div');
    div.className = 'checkout-item';
    div.innerHTML = `
      <div class="checkout-item-info">
        <span class="checkout-item-name">${item.name}</span>
        <span class="checkout-item-qty">×${qty}</span>
      </div>
      <span class="checkout-item-price">${itemTotal} BDT</span>
    `;
    checkoutItems.appendChild(div);
  });
  
  checkoutTotal.textContent = subtotal + ' BDT';
  
  // Render outlets
  outletSelector.innerHTML = '';
  MOCK.outlets.forEach((outlet, index) => {
    const label = document.createElement('label');
    label.className = 'outlet-option';
    label.innerHTML = `
      <input type="radio" name="outlet" value="${outlet.id}" ${index === 0 ? 'checked' : ''}>
      <div class="outlet-card">
        <div class="outlet-info">
          <span class="outlet-name">${outlet.name}</span>
          ${outlet.isFlagship ? '<span class="flagship-badge">Flagship</span>' : ''}
          <span class="outlet-address">${outlet.address}</span>
          <span class="outlet-hours">⏰ ${outlet.hours}</span>
        </div>
      </div>
    `;
    outletSelector.appendChild(label);
  });
}

// Checkout back button
const checkoutBackBtn = document.getElementById('checkout-back');
if (checkoutBackBtn) {
  checkoutBackBtn.addEventListener('click', () => {
    navigateTo('home');
    cartDrawer.classList.remove('hidden');
  });
}

// Place order button
const placeOrderBtn = document.getElementById('place-order-btn');
if (placeOrderBtn) {
  placeOrderBtn.addEventListener('click', () => {
    const customerName = document.getElementById('customer-name').value;
    const customerPhone = document.getElementById('customer-phone').value;
    
    if (!customerName || !customerPhone) {
      ui.toast('Please fill in your contact information');
      return;
    }
    
    const selectedOutlet = document.querySelector('input[name="outlet"]:checked');
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    const selectedTime = document.querySelector('input[name="pickup-time"]:checked');
    const orderNotes = document.getElementById('order-notes').value;
    
    const outlet = MOCK.outlets.find(o => o.id === parseInt(selectedOutlet.value));
    
    const itemCount = CART.reduce((sum, item) => sum + (item.qty || 1), 0);
    const subtotal = CART.reduce((sum, item) => sum + (item.priceBDT * (item.qty || 1)), 0);
    
    // Create order
    const order = {
      id: generateOrderId(),
      items: JSON.parse(JSON.stringify(CART)),
      subtotal: subtotal,
      itemCount: itemCount,
      status: 'confirmed',
      orderDate: new Date().toISOString(),
      estimatedTime: selectedTime.value === 'asap' ? '20-30 mins' : 'Scheduled',
      outlet: outlet.name,
      customer: {
        name: customerName,
        phone: customerPhone
      },
      payment: selectedPayment.value,
      notes: orderNotes
    };
    
    ORDERS.unshift(order);
    console.log('Order placed:', order);
    
    // Clear cart
    CART.length = 0;
    renderCart();
    
    // Clear form
    document.getElementById('customer-name').value = '';
    document.getElementById('customer-phone').value = '';
    document.getElementById('order-notes').value = '';
    
    // Navigate to orders screen
    navigateTo('orders');
    
    // Show success message
    ui.toast('Order placed successfully! 🎉');
  });
}

// Render Orders Screen
function renderOrdersScreen() {
  const ordersScreen = document.getElementById('screen-orders');
  const ordersHeader = ordersScreen.querySelector('.orders-header');
  const ordersEmpty = ordersScreen.querySelector('.orders-empty');
  
  // Check if we have a container for order list
  let ordersContainer = document.getElementById('orders-container');
  if (!ordersContainer) {
    ordersContainer = document.createElement('div');
    ordersContainer.id = 'orders-container';
    ordersContainer.className = 'orders-container';
    ordersScreen.appendChild(ordersContainer);
  }
  
  if (ORDERS.length === 0) {
    // Show empty state
    ordersEmpty.style.display = 'flex';
    ordersContainer.style.display = 'none';
  } else {
    // Show orders list
    ordersEmpty.style.display = 'none';
    ordersContainer.style.display = 'block';
    ordersContainer.innerHTML = '';
    
    ORDERS.forEach(order => {
      const orderCard = document.createElement('div');
      orderCard.className = 'order-card';
      
      const statusClass = order.status === 'confirmed' ? 'status-confirmed' : 
                         order.status === 'preparing' ? 'status-preparing' : 
                         order.status === 'ready' ? 'status-ready' : 'status-completed';
      
      const statusText = order.status === 'confirmed' ? 'Confirmed' : 
                        order.status === 'preparing' ? 'Preparing' : 
                        order.status === 'ready' ? 'Ready for Pickup' : 'Completed';
      
      // Format date
      const orderDate = new Date(order.orderDate);
      const formattedDate = orderDate.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      });
      const formattedTime = orderDate.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
      
      orderCard.innerHTML = `
        <div class="order-header">
          <div class="order-id-date">
            <h3 class="order-id">${order.id}</h3>
            <p class="order-date">${formattedDate} at ${formattedTime}</p>
          </div>
          <span class="order-status ${statusClass}">${statusText}</span>
        </div>
        
        <div class="order-items">
          ${order.items.map(item => `
            <div class="order-item">
              <div class="order-item-info">
                <span class="order-item-name">${item.name}</span>
                <span class="order-item-qty">×${item.qty || 1}</span>
              </div>
              <span class="order-item-price">${item.priceBDT * (item.qty || 1)} BDT</span>
            </div>
          `).join('')}
        </div>
        
        <div class="order-footer">
          <div class="order-total">
            <span class="order-total-label">Total</span>
            <span class="order-total-amount">${order.subtotal} BDT</span>
          </div>
          <div class="order-actions">
            <button class="order-btn-secondary" data-order-id="${order.id}">View Details</button>
            <button class="order-btn-primary" data-order-id="${order.id}">Reorder</button>
          </div>
        </div>
        
        ${order.status !== 'completed' && order.status !== 'cancelled' ? `
          <div class="order-estimate">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z" stroke="#6b4423" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 4V8L10.5 9.5" stroke="#6b4423" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Estimated time: ${order.estimatedTime}</span>
          </div>
        ` : ''}
      `;
      
      // Add reorder button handler
      const reorderBtn = orderCard.querySelector('.order-btn-primary');
      reorderBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        reorderItems(order.id);
      });
      
      // Add view details handler
      const detailsBtn = orderCard.querySelector('.order-btn-secondary');
      detailsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        ui.toast('Order details: ' + order.id);
      });
      
      ordersContainer.appendChild(orderCard);
    });
  }
}

// Reorder function
function reorderItems(orderId) {
  const order = ORDERS.find(o => o.id === orderId);
  if (!order) return;
  
  // Clear current cart
  CART.length = 0;
  
  // Add all items from order to cart
  order.items.forEach(item => {
    CART.push({ ...item });
  });
  
  renderCart();
  cartDrawer.classList.remove('hidden');
  ui.toast(`${order.items.length} items added to cart`);
}

// Future: redirect user to Menu screen when no orders
document.getElementById('start-order-btn').addEventListener('click', () => {
  navigateTo('menu');
});

// QR Scanner button handler (home screen)
const qrScannerBtn = document.getElementById('qr-scanner-btn');
if (qrScannerBtn) {
  qrScannerBtn.addEventListener('click', () => {
    navigateTo('qr');
  });
}

// QR Scanner button handler (bottom nav)
const qrNavBtn = document.getElementById('qr-nav-btn');
if (qrNavBtn) {
  qrNavBtn.addEventListener('click', () => {
    navigateTo('qr');
  });
}

// Simulate QR code scan (for demo purposes)
let scannedProducts = []; // Track scanned products to prevent duplicates

window.simulateQRScan = function() {
  // Generate random product code
  const productCode = 'SG' + Math.random().toString(36).substring(2, 10).toUpperCase();
  
  // Check if already scanned
  if (scannedProducts.includes(productCode)) {
    showToast('⚠️ This product has already been scanned');
    return;
  }
  
  // Random points between 50-200
  const pointsEarned = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  
  // Add scanning animation
  const scanLine = document.querySelector('.scan-line');
  if (scanLine) {
    scanLine.style.animation = 'none';
    setTimeout(() => {
      scanLine.style.animation = 'scan 2s ease-in-out infinite';
    }, 10);
  }
  
  // Simulate scan delay
  setTimeout(() => {
    // Create a mock order to award points
    const pointsOrder = {
      id: Date.now() + '-qr',
      items: [{ name: 'QR Scan Bonus', qty: 1, price: pointsEarned / 10 }],
      total: pointsEarned / 10, // Since 10 points = 1 BDT
      outlet: 'QR Scan',
      payment: 'Loyalty Bonus',
      status: 'Completed',
      date: new Date().toLocaleDateString(),
      isQRBonus: true
    };
    
    ORDERS.push(pointsOrder);
    scannedProducts.push(productCode);
    
    // Update stats
    updateAccountStats();
    
    // Navigate back and show success
    navigateTo('home');
    showToast(`🎉 Success! Earned ${pointsEarned} loyalty points!`);
  }, 1500);
};

// Account options handlers
document.querySelectorAll('.account-options button').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    console.log('Account option clicked:', action);
    
    switch(action) {
      case 'profile':
        ui.toast('Profile editing coming soon');
        break;
      case 'outlets':
        navigateTo('locator');
        break;
      case 'tours':
        document.getElementById('tour-modal').classList.remove('hidden');
        break;
      case 'support':
        ui.toast('Support: +880 1712-345678');
        break;
      case 'about':
        ui.toast('Savoy Gallery - Premium Ice Cream Experience');
        break;
      case 'logout':
        if (confirm('Are you sure you want to logout?')) {
          ui.toast('Logged out successfully');
        }
        break;
    }
  });
});

// Update account stats with loyalty points calculation
function updateAccountStats() {
  const statOrders = document.getElementById('stat-orders');
  const statPoints = document.getElementById('stat-points');
  const statRewards = document.getElementById('stat-rewards');
  
  if (statOrders) {
    const orderCount = ORDERS.length;
    
    // Calculate loyalty points: 10 points per BDT spent
    const totalPoints = ORDERS.reduce((sum, order) => {
      return sum + Math.floor(order.total * 10);
    }, 0);
    
    // Calculate rewards: 1 reward per 500 points
    const rewardsEarned = Math.floor(totalPoints / 500);
    
    statOrders.textContent = orderCount;
    if (statPoints) statPoints.textContent = totalPoints;
    if (statRewards) statRewards.textContent = rewardsEarned;
  }
}

// Edit profile button
const editProfileBtn = document.querySelector('.edit-profile-btn');
if (editProfileBtn) {
  editProfileBtn.addEventListener('click', () => {
    ui.toast('Profile editing coming soon');
  });
}

// Navigation function
function navigateTo(tab) {
  // Hide all screens
  document.querySelectorAll('main').forEach(screen => {
    screen.classList.add('hidden');
  });

  // Show correct one
  const activeScreen = document.getElementById(`screen-${tab}`);
  if (activeScreen) activeScreen.classList.remove('hidden');
  
  // Render orders screen if navigating to orders
  if (tab === 'orders') {
    renderOrdersScreen();
  }
  
  // Render checkout screen if navigating to checkout
  if (tab === 'checkout') {
    renderCheckoutScreen();
  }
  
  // Render locator screen if navigating to locator
  if (tab === 'locator') {
    renderLocatorScreen();
  }
  
  // Update account stats if navigating to account
  if (tab === 'account') {
    updateAccountStats();
  }

  // Update active nav button (only for main tabs)
  if (['home', 'menu', 'orders', 'account'].includes(tab)) {
    document.querySelectorAll('#bottom-nav button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tab);
    });
  }

  console.log("Navigated to:", tab);
}

// Bottom navigation handler
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#bottom-nav button').forEach(btn => {
    btn.addEventListener('click', () => {
      navigateTo(btn.dataset.tab);
    });
  });
});
