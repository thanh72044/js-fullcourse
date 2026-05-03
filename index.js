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
const cart = []
const cartBadge = document.querySelector(".cart-count");

const addToCart = document.querySelectorAll(".add-to-cart-btn");

addToCart.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const productId = Number(btn.getAttribute("data-id"));
        const productClicked = products.find(function (p) {
            return p.id === productId
        })
        cart.push(productClicked)
        cartBadge.innerText = cart.length;
        console.log("giỏ hàng hiện tại", cart)
        btn.innerText = "dã thêm ✔"
        btn.style.background = "#10b981";
        setTimeout(function () {
            btn.innerText = "thêm vào giỏ hàng";
            btn.style.background = "";
        }, 1500)
    });
});
