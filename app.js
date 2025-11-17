// Savoy Gallery - Application Logic

// Mock Data
const MOCK = {
  products: [
    {
      id: 1,
      name: "Carrot Delight",
      shortDesc: "Smooth carrot-based premium ice cream",
      fullDesc: "A creamy and refreshing carrot ice cream made with natural carrot puree and Savoy's premium base.",
      priceBDT: 160,
      category: "premium",
      images: ["assets/img/p1.jpg"],
      isSeasonal: false,
      allergens: ["milk"]
    },
    {
      id: 2,
      name: "Jalpai Sorbet",
      shortDesc: "Fresh and tangy natural jalpai",
      fullDesc: "A natural sorbet made from fresh jalpai (olive), offering a sweet–tangy flavor perfect for warm days.",
      priceBDT: 140,
      category: "natural",
      images: ["assets/img/p2.jpg"],
      isSeasonal: false,
      allergens: []
    },
    {
      id: 3,
      name: "Chocolate Fudge",
      shortDesc: "Rich, dense chocolate experience",
      fullDesc: "Our signature chocolate fudge made with high-quality cocoa, delivering a decadent chocolate punch.",
      priceBDT: 200,
      category: "premium",
      images: ["assets/img/p3.jpg"],
      isSeasonal: false,
      allergens: ["milk"]
    },
    {
      id: 4,
      name: "Lychee Bliss",
      shortDesc: "Seasonal lychee flavor",
      fullDesc: "Made from fresh seasonal lychee pulp, this soft and juicy flavor is one of our summer specials.",
      priceBDT: 180,
      category: "seasonal",
      images: ["assets/img/p4.jpg"],
      isSeasonal: true,
      allergens: ["milk"]
    },
    {
      id: 5,
      name: "Orange Blast",
      shortDesc: "Zesty citrus refreshment",
      fullDesc: "A citrusy ice cream made from natural orange zest and juice, refreshing and aromatic.",
      priceBDT: 150,
      category: "natural",
      images: ["assets/img/p5.jpg"],
      isSeasonal: false,
      allergens: []
    },
    {
      id: 6,
      name: "Discone Special",
      shortDesc: "Chocolate disc + molten fudge",
      fullDesc: "Savoy's innovation: a dark chocolate disc with molten fudge core and crunchy cone layers.",
      priceBDT: 250,
      category: "premium",
      images: ["assets/img/p6.jpg"],
      isSeasonal: false,
      allergens: ["milk", "nuts"]
    }
  ],
  outlets: [
    {
      id: 1,
      name: "Savoy Gallery Banani",
      address: "Road 7B, Banani, Dhaka",
      lat: 23.7935,
      lng: 90.4066,
      hours: "10 AM – 11 PM"
    },
    {
      id: 2,
      name: "Savoy Dhanmondi (Chef's Table)",
      address: "Dhanmondi 27, Dhaka",
      lat: 23.7465,
      lng: 90.3742,
      hours: "10 AM – 11 PM"
    },
    {
      id: 3,
      name: "Savoy United City",
      address: "United City, Madani Ave",
      lat: 23.8158,
      lng: 90.4462,
      hours: "10 AM – 11 PM"
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

// Header interactions will go here

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
      console.log(`Added ${product.name} to cart`);
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
    
    // Add to cart button handler
    const addBtn = card.querySelector('.add-btn');
    addBtn.addEventListener('click', () => {
      console.log("Add to cart - Product ID:", product.id, "Name:", product.name);
    });
    
    productGrid.appendChild(card);
  });
  
  console.log(`Menu rendered with ${filtered.length} products (category: ${category})`);
}

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

// Future: redirect user to Menu screen when no orders
document.getElementById('start-order-btn').addEventListener('click', () => {
  console.log("Go to Menu to start ordering");
});

// Account options handlers
document.querySelectorAll('.account-options button').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log("Account option clicked:", btn.textContent);
  });
});

// Navigation function
function navigateTo(tab) {
  // Hide all screens
  document.querySelectorAll('main').forEach(screen => {
    screen.classList.add('hidden');
  });

  // Show correct one
  const activeScreen = document.getElementById(`screen-${tab}`);
  if (activeScreen) activeScreen.classList.remove('hidden');

  // Update active nav button
  document.querySelectorAll('#bottom-nav button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });

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
