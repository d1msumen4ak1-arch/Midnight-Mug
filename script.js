// Data produk
const products = [
  { id: 1, name: "Cappuccino", desc: "Espresso dengan susu hangat dan busa lembut.", price: 28000, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { id: 2, name: "Red Velvet Cake", desc: "Kue red velvet lembut dengan cream cheese frosting.", price: 32000, image: "https://images.unsplash.com/photo-1599785209707-28dbd83f0c44" },
  { id: 3, name: "Latte Caramel", desc: "Latte manis dengan sirup caramel spesial.", price: 30000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 4, name: "Cheesecake", desc: "Kue keju lembut dengan rasa creamy yang nikmat.", price: 35000, image: "https://images.unsplash.com/photo-1551024709-8f23befc6cf7" },
  { id: 5, name: "Taro Latte", desc: "Latte manis dengan bubuk talas ungu khas.", price: 29000, image: "https://images.unsplash.com/photo-1615486364546-3ad720e0d7d5" },
  { id: 6, name: "Croissant Butter", desc: "Roti croissant renyah dengan aroma butter harum.", price: 22000, image: "https://images.unsplash.com/photo-1565958011703-44e5c6e6c6b8" },
  { id: 7, name: "Vanilla Cold Brew", desc: "Kopi cold brew segar dengan sentuhan vanilla.", price: 33000, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { id: 8, name: "Mango Smoothie", desc: "Minuman segar dari mangga asli yang manis.", price: 27000, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0" },
  { id: 9, name: "Waffle Ice Cream", desc: "Waffle hangat dengan topping es krim lezat.", price: 38000, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f" }
];

let cart = [];

// Elemen
const welcomePage = document.getElementById("welcome");
const menuPage = document.getElementById("menuPage");
const checkoutPage = document.getElementById("checkoutPage");
const confirmPage = document.getElementById("confirmPage");

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartItems = document.getElementById("cart-items");
const checkoutForm = document.getElementById("checkoutForm");
const orderDetails = document.getElementById("orderDetails");
const payCode = document.getElementById("payCode");

// Pindah halaman
document.getElementById("goMenu").addEventListener("click", () => {
  welcomePage.classList.add("hidden");
  menuPage.classList.remove("hidden");
});

// Render Produk
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <p class="price">Rp ${p.price.toLocaleString()}</p>
      <button onclick="addToCart(${p.id})">Pesan Sekarang</button>
    `;
    productList.appendChild(card);
  });
}

// Tambah ke Keranjang
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  cartCount.textContent = cart.length;
  alert(`${item.name} ditambahkan ke keranjang!`);
}

// Checkout
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  menuPage.classList.add("hidden");
  checkoutPage.classList.remove("hidden");

  cartItems.innerHTML = cart.map(item => `<p>${item.name} - Rp ${item.price.toLocaleString()}</p>`).join("");
});

// Selesaikan Pesanan
checkoutForm.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("custName").value;
  const address = document.getElementById("custAddress").value;
  const payment = document.getElementById("paymentMethod").value;
  const code = "MM-" + Math.floor(100000 + Math.random() * 900000);

  checkoutPage.classList.add("hidden");
  confirmPage.classList.remove("hidden");

  orderDetails.textContent = `Atas nama ${name}, alamat ${address}, pembayaran via ${payment}.`;
  payCode.textContent = code;
});

// Load awal
renderProducts();
