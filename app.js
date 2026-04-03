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
    images: ['images/gen_batch1_2.webp', 'images/gen_batch1_3.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-hat',
    name: 'FARADA Hat',
    code: 'FH-02',
    price: 45,
    category: 'accessories',
    soldOut: false,
    images: ['images/gen_batch3_3.webp', 'images/gen_batch2_1.webp', 'images/gen_batch2_3.webp', 'images/gen_batch3_1.webp'],
    url: 'https://tobilou.com'
  },
  {
    id: 'farada-shoe',
    name: 'FARADA x "Breathing Room" Shoe',
    code: 'FR-01',
    price: 175,
    category: 'shoes',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/Screenshot2025-06-26at3.14.37PM.png?v=1750977989&width=800'],
    url: 'https://tobilou.com/products/breathing-room-3-shoe-merch'
  },
  {
    id: 'buff-baby-blue',
    name: 'Buff Baby Plushie (Blue)',
    code: 'BB-01',
    price: 30,
    category: 'plushies',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/IMG_0425.jpg?v=1731027141&width=800'],
    url: 'https://tobilou.com/products/buff-baby-plushie-blue'
  },
  {
    id: 'buff-baby-pink',
    name: 'Buff Baby Plushie (Pink)',
    code: 'BB-02',
    price: 20,
    category: 'plushies',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/IMG_0445.jpg?v=1731026648&width=800'],
    url: 'https://tobilou.com/products/buff-baby-plush'
  },
  {
    id: 'buff-baby-keychain',
    name: 'Buff Baby Keychain (Pink)',
    code: 'KC-01',
    price: 16,
    category: 'accessories',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/IMG_0416.jpg?v=1731028226&width=800'],
    url: 'https://tobilou.com/products/buff-baby-keychain-pink'
  },
  {
    id: 'buff-baby-backpack',
    name: 'Buff Baby Backpack (Pink)',
    code: 'BK-01',
    price: 65,
    category: 'accessories',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/IMG_0419.jpg?v=1731024689&width=800'],
    url: 'https://tobilou.com/products/buff-baby-backpack-pink'
  },
  {
    id: 'live-on-ice-vinyl',
    name: 'Live On Ice Vinyl',
    code: 'VN-01',
    price: 50,
    category: 'vinyl',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/s-l1600-1_2e795b29-2128-4d98-9807-d4ff1c9eff90.jpg?v=1722561527&width=800'],
    url: 'https://tobilou.com/products/live-on-ice-vinyl'
  },
  {
    id: 'plushie-vinyl',
    name: 'Plushie Vinyl',
    code: 'VN-02',
    price: 30,
    category: 'vinyl',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/VINYLMOCKUP.png?v=1711514774&width=800'],
    url: 'https://tobilou.com/products/vinyl'
  },
  {
    id: 'baggy-weather-vinyl',
    name: 'Baggy Weather Vinyl',
    code: 'VN-03',
    price: 35,
    category: 'vinyl',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/BW-LP-MOCK-WHITE.jpg?v=1713225295&width=800'],
    url: 'https://tobilou.com/products/baggy-weather-vinyl'
  },
  {
    id: 'plushie-tee',
    name: 'Plushie Tee',
    code: 'TS-01',
    price: 30,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/Plushieteeback_ecomm.jpg?v=1712802839&width=800'],
    url: 'https://tobilou.com/products/plushie-tee'
  },
  {
    id: 't-pain-tee',
    name: 'T-Pain Tour Tee',
    code: 'TS-02',
    price: 30,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/Tpainfront_ecomm.jpg?v=1712817873&width=800'],
    url: 'https://tobilou.com/products/t-pain-tour-tee'
  },
  {
    id: 'fall-tour-tee',
    name: 'Fall Tour Tee',
    code: 'TS-03',
    price: 20,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/tourdetee_ecomm.jpg?v=1712803969&width=800'],
    url: 'https://tobilou.com/products/tour-de-tobi-lou-tee'
  },
  {
    id: 'scuba-sylvie-tee',
    name: 'Scuba Sylvie Long Sleeve Tee',
    code: 'LS-01',
    price: 20,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/sylieteefront_ecomm.jpg?v=1712803174&width=800'],
    url: 'https://tobilou.com/products/scuba-sylvie-long-sleeve-tee'
  },
  {
    id: 'tyger-tee',
    name: 'Tyger Tie-Dye Tour Tee',
    code: 'TS-04',
    price: 15,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/tygerteefront_ecomm.jpg?v=1712803579&width=800'],
    url: 'https://tobilou.com/products/perish-blu-tyger-tee'
  },
  {
    id: 'grey-hoodie',
    name: 'Happy+Extra Sad Grey Hoodie',
    code: 'HD-01',
    price: 35,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/hoodie_ecomm_gray.jpg?v=1712801625&width=800'],
    url: 'https://tobilou.com/products/happy-extra-sad-perish-blue-tour-hoodie'
  },
  {
    id: 'green-hoodie',
    name: 'Happy+Extra Sad Green Hoodie',
    code: 'HD-02',
    price: 35,
    category: 'apparel',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/hoodiegreen_ecomm.jpg?v=1712805145&width=800'],
    url: 'https://tobilou.com/products/happy-extra-sad-green-hoodie'
  },
  {
    id: 'white-hoodie',
    name: 'Goodnightmeesh Hoodie',
    code: 'HD-03',
    price: 35,
    category: 'apparel',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/whitehoodiefront_ecomm.jpg?v=1712805281&width=800'],
    url: 'https://tobilou.com/products/happy-extra-sad-tour-white-hoodie'
  },
  {
    id: 'blue-hoodie',
    name: '"Sad Last Night" Hoodie',
    code: 'HD-04',
    price: 35,
    category: 'apparel',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/bluehoodiefront_ecomm.jpg?v=1712805614&width=800'],
    url: 'https://tobilou.com/products/i-was-sad-last-night-im-ok-now-blue-hoodie'
  },
  {
    id: 'bmx-jersey',
    name: 'Perish Blue BMX Jersey',
    code: 'JR-01',
    price: 30,
    category: 'apparel',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/Jerseyfront_ecomm.jpg?v=1712801917&width=800'],
    url: 'https://tobilou.com/products/perish-blue-racing-jersey'
  },
  {
    id: 'bmx-pants',
    name: 'Perish Blue BMX Pants',
    code: 'PT-01',
    price: 30,
    category: 'apparel',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/racingpantsfront_ecomm.jpg?v=1712802340&width=800'],
    url: 'https://tobilou.com/products/perish-blue-racing-pants'
  },
  {
    id: 'baggy-tote',
    name: 'Baggy Weather Tote',
    code: 'BG-01',
    price: 5,
    category: 'accessories',
    soldOut: false,
    images: ['https://tobilou.com/cdn/shop/files/bag_ecommcopy.jpg?v=1712815805&width=800'],
    url: 'https://tobilou.com/products/baggy-weather-tote'
  },
  {
    id: 'trucker-hat',
    name: 'Little Lou Trucker Hat',
    code: 'HT-01',
    price: 10,
    category: 'accessories',
    soldOut: true,
    images: ['https://tobilou.com/cdn/shop/files/truckhat_ecomm.jpg?v=1712804260&width=800'],
    url: 'https://tobilou.com/products/trucker-hat'
  }
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
