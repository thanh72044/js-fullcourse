let Products = []

async function fetchProduct() {
  try {
    document.getElementById("product-container").innerHTML = "<p>Đang tải sản phẩm...</p>"
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    Products = data;
    renderProduct(Products)
  } catch {
    document.getElementById("producs-container").innerHTML = "hông thể tải sản phẩm. Vui lòng thử lại.</p>"
  }
}
fetchProduct();

const productContainer = document.getElementById("products-container");
const cartBadge = document.querySelector(".cart-count");
const cartIcon = document.querySelector(".cart-icon");
const cartSideBar = document.getElementById("cart-sidebar");
const closeCartBtn = document.getElementById("close-cart");
const cartOverLay = document.getElementById("cart-overlay");
const cartItemContainer = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const textInput = document.getElementById("search-input");

function renderProduct(danhsach) {
  productContainer.innerHTML = "";
  danhsach.forEach(function (product) {
    const productHTML = `
            <div class = "product-card">
    <img src="${product.image}" alt="${product.name}" class="product-img" onclick="openQuickView(${product.id})" style="cursor: pointer;">
        <div class = "product-info">
        <h3 class ="product-name">${product.name}</h3> 
        <p class = "product-price">${product.price.toLocaleString("vi-VN")}đ</p>
        <button class="add-to-cart-btn" data-id="${product.id}">thêm vào giỏ hàng</button>
        </div>
            </div>
                `;
    productContainer.innerHTML += productHTML;
  });

  const addToCart = document.querySelectorAll(".add-to-cart-btn");
  addToCart.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const productId = Number(btn.getAttribute("data-id"));
      const productClicked = products.find(function (p) {
        return p.id === productId;
      });
      const existingItem = cart.find(function (item) {
        return item.id === productId;
      });
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newProduct = { ...productClicked, quantity: 1 };
        cart.push(newProduct);
      }
      showToast("đã thêm " + productClicked.name + " vào giỏ hàng");
      updateCartBadge();
      saveCart();
      renderCart();
      btn.classList.add("animating");
      cartIcon.classList.add("bounce");
      btn.innerText = "dã thêm ✔";
      btn.style.background = "#10b981";
      setTimeout(function () {
        btn.classList.remove("animating")
      }, 300);
      setTimeout(function () {
        cartIcon.classList.remove("bounce")
      }, 400);
      setTimeout(function () {
        btn.innerText = "thêm vào giỏ hàng";
        btn.style.background = "";
      }, 1500);
    });
  });
}

const cart = JSON.parse(localStorage.getItem("goodshop_cart")) || [];
renderProduct(products);
function updateCartBadge() {
  let totalItem = 0;
  cart.forEach(function (item) {
    totalItem += item.quantity;
  });
  cartBadge.innerText = totalItem;
}
function saveCart() {
  localStorage.setItem("goodshop_cart", JSON.stringify(cart));
}
updateCartBadge();

cartIcon.addEventListener("click", function () {
  cartSideBar.classList.add("open");
  cartOverLay.classList.add("open");
});

function closeCart() {
  cartSideBar.classList.remove("open");
  cartOverLay.classList.remove("open");
}
closeCartBtn.addEventListener("click", closeCart);
cartOverLay.addEventListener("click", closeCart);

function renderCart() {
  cartItemContainer.innerHTML = "";
  let total = 0;
  cart.forEach(function (item, index) {
    total += item.price * item.quantity;
    const itemHTML = ` <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString("vi-VN")}đ</p>
                     <div class="quantity-controls">
                        <button onclick="changeQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeItem(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
    cartItemContainer.innerHTML += itemHTML;
  });
  totalPrice.innerText = total.toLocaleString("vi-vn") + "đ";
}
function changeQuantity(index, amount) {
  if (!cart[index]) {
    return;
  }
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCart();
}
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCart();
}
renderCart();

function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerText = message;
  toastContainer.appendChild(toast);
  setTimeout(function () {
    toast.remove();
  }, 3000);
}
textInput.addEventListener("input", function (event) {
  const TextCanTim = event.target.value.toLowerCase();
  const ketQua = products.filter(function (product) {
    const tenSanPham = product.name.toLowerCase();
    return tenSanPham.includes(TextCanTim);
  });
  renderProduct(ketQua);
});

const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const selectedCategory = event.target.getAttribute("data-category");
    let filterProducts = [];
    if (selectedCategory === "all") {
      filterProducts = products;
    } else {
      filterProducts = products.filter(function (product) {
        return product.category === selectedCategory;
      });
    }
    renderProduct(filterProducts);
    filterBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});

const sortSelect = document.getElementById("sort-select");

sortSelect.addEventListener("change", function (event) {
  const sortValue = event.target.value;

  // Tạo bản sao để không làm thay đổi mảng gốc
  let sortedProducts = [...products];

  if (sortValue === "asc") {
    // Sắp xếp tăng dần
    sortedProducts.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (sortValue === "desc") {
    sortedProducts.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  renderProduct(sortedProducts);
});

const quickViewModal = document.getElementById("quick-view-modal");
const CloseModalBtn = document.getElementById("close-modal");

function openQuickView(productId) {
  const productClick = products.find(function (q) {
    return q.id === productId;
  });
  if (productClick) {
    document.getElementById("modal-img").src = productClick.image;
    document.getElementById("modal-name").innerText = productClick.name;
    document.getElementById("modal-price").innerText =
      productClick.price.toLocaleString("vi-VN") + "đ";
    document.getElementById("modal-category").querySelector("span").innerText =
      productClick.category;
    quickViewModal.classList.add("open");
  }
  CloseModalBtn.addEventListener("click", function () {
    quickViewModal.classList.remove("open");
  });
}
