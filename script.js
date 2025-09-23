// Data Awal Produk
let products = [
  {
    id: Date.now() + 1,
    name: "Cappuccino",
    desc: "Espresso dengan susu hangat dan busa lembut.",
    price: 18000,
    image: "cappuccino.jpg"
  },
  {
    id: Date.now() + 2,
    name: "Red Velvet Cake",
    desc: "Kue red velvet lembut dengan cream cheese frosting.",
    price: 25000,
    image: "velvet-cake.jpg"
  },
  {
    id: Date.now() + 3,
    name: "Latte Caramel",
    desc: "Latte manis dengan sirup caramel spesial.",
    price: 25000,
    image: "latte-caramel.jpg"
  },
  {
    id: Date.now() + 4,
    name: "Cheesecake",
    desc: "Kue keju lembut dengan rasa creamy yang nikmat.",
    price: 25000,
    image: "cheesake.jpg"
  },
  {
    id: Date.now() + 5,
    name: "Taro Latte",
    desc: "Latte manis dengan bubuk talas ungu khas.",
    price: 29000,
    image: "taro-latte.jpg"
  },
  {
    id: Date.now() + 6,
    name: "Croissant Butter",
    desc: "Roti croissant renyah dengan aroma butter harum.",
    price: 22000,
    image: "croissant-butter.jpg"
  },
  {
    id: Date.now() + 7,
    name: "Vanilla Cold Brew",
    desc: "Kopi cold brew segar dengan sentuhan vanilla.",
    price: 30000,
    image: "vanilla.jpg"
  },
  {
    id: Date.now() + 8,
    name: "Mango Smoothie",
    desc: "Minuman segar dari mangga asli yang manis.",
    price: 22000,
    image: "mango.jpg"
  },
  {
    id: Date.now() + 9,
    name: "Waffle Ice Cream",
    desc: "Waffle hangat dengan topping es krim lezat.",
    price: 28000,
    image: "waffle.jpg"
  }
];

let cart = [];

const productList = document.getElementById("product-list");
const productForm = document.getElementById("product-form");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout");

// Render Produk
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p class="price">Rp ${item.price.toLocaleString()}</p>
      <button onclick="addToCart(${item.id})">Tambah ke Keranjang</button>
      <button onclick="deleteProduct(${item.id})">Hapus Item</button>
    `;

    productList.appendChild(card);
  });
}

// Render Keranjang
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - Rp ${item.price.toLocaleString()}
      <button onclick="removeFromCart(${index})">❌</button>
    `;
    cartList.appendChild(li);
  });

  cartTotal.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Tambah ke Keranjang
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

// Hapus dari Keranjang
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Checkout
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }
  alert("Pesanan anda diterima!");
  cart = [];
  renderCart();
});

// Tambah Produk Baru
productForm.addEventListener("submit", e => {
  e.preventDefault();

  const newProduct = {
    id: Date.now(),
    name: document.getElementById("name").value,
    desc: document.getElementById("desc").value,
    price: parseInt(document.getElementById("price").value),
    image: document.getElementById("image").value
  };

  products.push(newProduct);
  renderProducts();
  productForm.reset();
});

// Hapus Produk
function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  renderProducts();
}

// Load Awal
renderProducts();
renderCart();
