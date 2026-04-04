/* =========================================
   TOBI LOU — APP JS
   Products, Cart, Filters, Animations
   ========================================= */

// ---- PRODUCT DATA (from tobilou.com Shopify store) ----
const PRODUCTS = [
  {
    id: 'farada-vest',
    name: 'FARADA Vest',
    code: 'FV-01',
    price: 120,
    category: 'apparel',
    soldOut: false,
    images: ['images/gen_014500_3.webp', 'images/gen_014500_2.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-tee',
    name: 'FARADA Heart Tee',
    code: 'FT-01',
    price: 55,
    category: 'apparel',
    soldOut: false,
    images: ['images/gen_025236_3.webp', 'images/gen_025236_2.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-shorts',
    name: 'FARADA Shorts',
    code: 'FS-01',
    price: 65,
    category: 'apparel',
    soldOut: false,
    images: ['images/gen_024814_3.webp', 'images/gen_024814_2.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-headband',
    name: 'FARADA Headband',
    code: 'FH-01',
    price: 25,
    category: 'accessories',
    soldOut: false,
    images: ['images/gen_batch1_2.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-hat',
    name: 'FARADA Hat',
    code: 'FH-02',
    price: 45,
    category: 'accessories',
    soldOut: false,
    images: ['images/gen_batch2_1.webp', 'images/gen_batch3_1.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-hoodie',
    name: 'FARADA Brain Hoodie',
    code: 'FH-03',
    price: 95,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5650_windbreaker_clean.webp', 'images/IMG_5652_hoodie_clean.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-joggers',
    name: 'FARADA Joggers',
    code: 'FJ-01',
    price: 85,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5654_joggers_clean.webp', 'images/IMG_5654_joggers.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-life-tee',
    name: 'FARADA "New Ways" Tee',
    code: 'FT-02',
    price: 55,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5655_tee_front_clean.webp', 'images/IMG_5656_tee_back_clean.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-tank',
    name: 'FARADA Tank Top',
    code: 'FK-01',
    price: 45,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5658_tank_front_clean.webp', 'images/IMG_5658_tank_front.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-crop-tank',
    name: 'FARADA Crop Tank',
    code: 'FK-02',
    price: 40,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5660_crop_tank_clean.webp', 'images/IMG_5660_crop_tank_front.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-mesh-shorts',
    name: 'FARADA Mesh Shorts',
    code: 'FS-02',
    price: 60,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5661_shorts_front_clean.webp', 'images/IMG_5661_shorts_front.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-side-tee',
    name: 'FARADA Side Logo Tee',
    code: 'FT-03',
    price: 50,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5664_tee_side.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-longsleeve',
    name: 'FARADA Long Sleeve',
    code: 'FL-01',
    price: 65,
    category: 'apparel',
    soldOut: false,
    images: ['images/IMG_5665_longsleeve_clean.webp', 'images/IMG_5665_longsleeve.webp'],
    url: 'https://tobilou.com'
  },
];

// ---- STATE ----
let cart = [];
let currentFilter = 'all';
let currentDetailProduct = null;
let currentImageIndex = 0;

// ---- DOM REFS ----
const grid = document.getElementById('productGrid');
const detail = document.getElementById('productDetail');
const sideMenu = document.querySelector('.side-menu');
const cartDrawer = document.querySelector('.cart-drawer');

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  bindNav();
  bindMenu();
  bindCart();
  bindDetail();
});

// ---- RENDER PRODUCTS ----
function renderProducts(filter = 'all') {
  const filtered = filter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = '';

  filtered.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = `product-card${product.soldOut ? ' sold-out' : ''}`;
    card.style.animationDelay = `${i * 0.04}s`;
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="product-image-wrapper">
        <img class="product-image" src="${product.images[0]}" alt="${product.name}" loading="lazy">
      </div>
      <span class="product-name">${product.code}</span>
    `;

    const img = card.querySelector('.product-image');

    // Hover image cycling for products with multiple images
    if (product.images.length > 1) {
      let hoverInterval = null;
      let hoverIndex = 0;

      card.addEventListener('mouseenter', () => {
        hoverIndex = 0;
        hoverInterval = setInterval(() => {
          hoverIndex = (hoverIndex + 1) % product.images.length;
          img.src = product.images[hoverIndex];
        }, 250);
      });

      card.addEventListener('mouseleave', () => {
        clearInterval(hoverInterval);
        hoverInterval = null;
        hoverIndex = 0;
        img.src = product.images[0];
      });
    }

    card.addEventListener('click', () => openDetail(product));
    grid.appendChild(card);
  });
}

// ---- NAV FILTER ----
function bindNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
      if (filter === currentFilter) return;

      currentFilter = filter;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      renderProducts(filter);

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ---- SIDE MENU ----
function bindMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.side-menu-close');
  const overlay = document.querySelector('.side-menu-overlay');

  menuToggle.addEventListener('click', () => sideMenu.classList.add('active'));
  menuClose.addEventListener('click', () => sideMenu.classList.remove('active'));
  overlay.addEventListener('click', () => sideMenu.classList.remove('active'));
}

// ---- CART ----
function bindCart() {
  // Open cart from both header and detail cart buttons
  document.querySelectorAll('.cart-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      cartDrawer.classList.add('active');
    });
  });

  document.querySelector('.cart-drawer-close').addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });

  document.querySelector('.cart-drawer-overlay').addEventListener('click', () => {
    cartDrawer.classList.remove('active');
  });

  renderCart();
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  showToast(`ADDED ${product.code}`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function renderCart() {
  const itemsEl = document.querySelector('.cart-items');
  const countEls = document.querySelectorAll('.cart-count');
  const totalEl = document.querySelector('.cart-total-price');

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  countEls.forEach(el => {
    el.style.display = totalItems > 0 ? 'flex' : 'none';
    el.textContent = totalItems;
  });

  totalEl.textContent = `$${totalPrice}`;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<p class="cart-empty">YOUR CART IS EMPTY</p>';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-image" src="${item.images[0]}" alt="${item.name}">
      <div class="cart-item-info">
        <span class="cart-item-name">${item.code}</span>
        <span class="cart-item-price">$${item.price}${item.qty > 1 ? ` x ${item.qty}` : ''}</span>
        <button class="cart-item-remove" data-id="${item.id}">REMOVE</button>
      </div>
    </div>
  `).join('');

  itemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
  });
}

// ---- PRODUCT DETAIL ----
function bindDetail() {
  document.querySelector('.detail-back').addEventListener('click', closeDetail);

  document.querySelector('.detail-prev').addEventListener('click', () => {
    if (!currentDetailProduct) return;
    currentImageIndex = (currentImageIndex - 1 + currentDetailProduct.images.length) % currentDetailProduct.images.length;
    updateDetailImage();
  });

  document.querySelector('.detail-next').addEventListener('click', () => {
    if (!currentDetailProduct) return;
    currentImageIndex = (currentImageIndex + 1) % currentDetailProduct.images.length;
    updateDetailImage();
  });

  document.querySelector('.detail-add').addEventListener('click', () => {
    if (currentDetailProduct && !currentDetailProduct.soldOut) {
      addToCart(currentDetailProduct);
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!detail.classList.contains('active')) return;
    if (e.key === 'Escape') closeDetail();
    if (e.key === 'ArrowLeft') document.querySelector('.detail-prev').click();
    if (e.key === 'ArrowRight') document.querySelector('.detail-next').click();
  });
}

function openDetail(product) {
  currentDetailProduct = product;
  currentImageIndex = 0;

  document.querySelector('.detail-name').textContent = product.code;
  document.querySelector('.detail-price').textContent = `$${product.price}`;
  const detailImg = document.querySelector('.detail-image');
  detailImg.src = product.images[0];
  detailImg.alt = product.name;

  // Show/hide add button vs sold out
  const addBtn = document.querySelector('.detail-add');
  const soldOutEl = document.querySelector('.detail-sold-out');
  if (product.soldOut) {
    addBtn.style.display = 'none';
    soldOutEl.style.display = 'block';
  } else {
    addBtn.style.display = 'flex';
    soldOutEl.style.display = 'none';
  }

  // Render dots
  const dotsEl = document.querySelector('.detail-dots');
  dotsEl.innerHTML = product.images.map((_, i) =>
    `<span class="detail-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`
  ).join('');

  dotsEl.querySelectorAll('.detail-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      currentImageIndex = parseInt(dot.dataset.index);
      updateDetailImage();
    });
  });

  // Show arrows only if multiple images
  const hasMultiple = product.images.length > 1;
  document.querySelector('.detail-prev').style.display = hasMultiple ? 'flex' : 'none';
  document.querySelector('.detail-next').style.display = hasMultiple ? 'flex' : 'none';

  detail.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  detail.classList.remove('active');
  document.body.style.overflow = '';
  currentDetailProduct = null;
}

function updateDetailImage() {
  const img = document.querySelector('.detail-image');
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = currentDetailProduct.images[currentImageIndex];
    img.style.opacity = 1;
  }, 150);

  document.querySelectorAll('.detail-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentImageIndex);
  });
}

// ---- TOAST NOTIFICATION ----
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}
