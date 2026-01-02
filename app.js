const products = document.querySelectorAll(".product-card");
let cartCountDisplay = document.querySelector(".cart-count");
const cart = document.querySelector(".cart");
let emptyCart = document.querySelector(".empty-cart");
let cartCount = 0;
const template = document.querySelector(".cart-item-template");


products.forEach((product) => {
    const addToCart = product.querySelector(".add-to-cart");
    const quantitySelector = product.querySelector(".quantity-selector");
    const quantityDecrement = product.querySelector(".decrease-quantity-btn");
    const quantityIncrement = product.querySelector(".increase-quantity-btn");
    const productImage = product.querySelector(".product-image");
    const productName = product.querySelector(".product-name").textContent;
    let quantityText = product.querySelector(".quantity-text").textContent;
    let quantity = parseInt(quantityText);
    const productPriceText = product.querySelector(".product-price").textContent;
    const productPrice = parseFloat(productPriceText.replace(/[^0-9.]/g, "")).toFixed(2);

    addToCart.addEventListener("click", () => {
        quantitySelector.classList.toggle("hidden");
        addToCart.classList.toggle("hidden");
        productImage.classList.toggle("active");
        cartCount++;
        cartCountDisplay.textContent = cartCount;

        emptyCart.classList.add("hidden");

        const clone = template.content.cloneNode(true);

        clone.querySelector("h3").textContent = productName;
        clone.querySelector(".cart-item-count").textContent = quantityText + "x";
        clone.querySelector(".cart-item-per-price").textContent = "@ " + productPrice;
        clone.querySelector(".cart-item-total-price").textContent = "$" + productPrice;

        cart.appendChild(clone);
    });


    quantityDecrement.addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            product.querySelector(".quantity-text").textContent = quantity;
        } else {
            quantitySelector.classList.toggle("hidden");
            addToCart.classList.toggle("hidden");
            productImage.classList.toggle("active");
        }
        cartCount--;
        cartCountDisplay.textContent = cartCount;
        if (cartCount === 0) {
            emptyCart.classList.remove("hidden");
        }
    });

    quantityIncrement.addEventListener("click", () => {
        quantity++;
        product.querySelector(".quantity-text").textContent = quantity;
        cartCount++;
        cartCountDisplay.textContent = cartCount;
        // querySelector(".cart-item-total-price").textContent = "$" + (productPrice * quantity).toFixed(2);
    });
});