let cartItems = [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
}

function addToCart(productName) {
    cartItems.push(productName);
    updateCartCount();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        addToCart(productName);
    });
});

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = (cartModal.style.display === "flex") ? "none" : "flex";

    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = cartItems.map(item => `<li>${item}</li>`).join('');
}

function proceedToCheckout() {
    alert("Thank you for your purchase!");
    cartItems = [];
    updateCartCount();
    toggleCart();
}

// Initialize Slick Carousel
