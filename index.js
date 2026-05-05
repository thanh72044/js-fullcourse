const products = [
    {
        id: 1,
        name: "tai nghe bluetooth",
        price: 200000,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "Bàn phím cơ Keychron",
        price: 2100000,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Chuột Logitech Master 3",
        price: 1800000,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        name: "Màn hình Dell Ultrasharp",
        price: 6500000,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
];
console.log("danh sách sản phầm của tôi", products)

const productContainer = document.getElementById("products-container");

function renderProduct() {
    products.forEach(function (product) {
        const productHTML = `
    <div class = "product-card">
    <img src = "${product.image}" alt ="${product.name}" class = "product-img">
<div class = "product-info">
<h3 class ="product-name">${product.name}</h3> 
<p class = "product-price">${product.price.toLocaleString('vi-VN')}đ</p>
<button class="add-to-cart-btn" data-id="${product.id}">thêm vào giỏ hàng</button>
</div>
    </div>
        `;
        productContainer.innerHTML += productHTML
    })

}
renderProduct()
const cart = JSON.parse(localStorage.getItem("goodshop_cart")) || []
const cartBadge = document.querySelector(".cart-count");

function updateCartBadge() {
    cartBadge.innerText = cart.length
}

function saveCart() {
    localStorage.setItem("goodshop_cart", JSON.stringify(cart))
}
updateCartBadge()
const addToCart = document.querySelectorAll(".add-to-cart-btn");

addToCart.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const productId = Number(btn.getAttribute("data-id"));
        const productClicked = products.find(function (p) {
            return p.id === productId
        })
        cart.push(productClicked)
        showToast("đã thêm" + productClicked.name + "vào giỏ hàng")
        updateCartBadge()
        saveCart()
        renderCart()
        console.log("giỏ hàng hiện tại", cart)
        btn.innerText = "dã thêm ✔"
        btn.style.background = "#10b981";
        setTimeout(function () {
            btn.innerText = "thêm vào giỏ hàng";
            btn.style.background = "";
        }, 1500)
    });
});
const cartIcon = document.querySelector(".cart-icon")
const cartSideBar = document.getElementById("cart-sidebar")
const closeCartBtn = document.getElementById("close-cart")
const cartOverLay = document.getElementById("cart-overlay")

cartIcon.addEventListener("click", function () {
    cartSideBar.classList.add("open")
    cartOverLay.classList.add("open")
})

function closeCart() {
    cartSideBar.classList.remove("open")
    cartOverLay.classList.remove("open")
}
closeCartBtn.addEventListener("click", closeCart)
cartOverLay.addEventListener("click", closeCart)

const cartItemContainer = document.getElementById("cart-items")
const totalPrice = document.getElementById("total-price")

function renderCart() {
    cartItemContainer.innerHTML = ""
    let total = 0
    cart.forEach(function (item, index) {
        total += item.price
        const itemHTML = ` <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString('vi-VN')}đ</p>
                </div>
                <button class="remove-item" onclick="removeItem(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>`;
        cartItemContainer.innerHTML += itemHTML

    })
    totalPrice.innerText = total.toLocaleString('vi-vn') + "đ"
}

function removeItem(index) {
    cart.splice(index, 1)
    saveCart()
    updateCartBadge()
    renderCart()
}
renderCart()

function showToast(message) {
    const toastContainer = document.getElementById("toast-container")
    const toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerText = message
    toastContainer.appendChild(toast)
    setTimeout(function () {
        toast.remove()
    }, 3000)
}