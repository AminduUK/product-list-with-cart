const products = document.querySelectorAll('.product-card');

products.forEach((product) => {

    const addToCart = product.querySelector('.add-to-cart');
    const quantitySelector = product.querySelector('.quantity-selector');
    const quantityDecrement = product.querySelector('.decrease-quantity-btn');
    const quantityIncrement = product.querySelector('.increase-quantity-btn');
    const productImage = product.querySelector('.product-image');
    let quantity = product.querySelector('.quantity-text').textContent;

    addToCart.addEventListener('click', () => {
        quantitySelector.classList.toggle('hidden');
        addToCart.classList.toggle('hidden');
        productImage.classList.toggle('active');
    });

    quantityDecrement.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            product.querySelector('.quantity-text').textContent = quantity;
        } else {
            quantitySelector.classList.toggle('hidden');
            addToCart.classList.toggle('hidden');
            productImage.classList.toggle('active');
        }
    });

    quantityIncrement.addEventListener('click', () => {
        quantity++;
        product.querySelector('.quantity-text').textContent = quantity;
    });

})



