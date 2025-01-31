function changeImage(selectElement, imageId) {
    var image = document.getElementById(imageId);
    var selectedValue = selectElement.value;
    image.src = 'Images/' + selectedValue;  // Update the image source
}

let cart = [];
let cartCount = 0;
let totalAmount = 0; // Variable to track the total amount

// Function to update the total price
function updateTotalPrice() {
    totalAmount = cart.reduce((total, item) => {
        let price = parseFloat(item.price.replace('$', ''));
        return total + price;
    }, 0);

    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
}

// Function to apply the discount
function applyDiscount() {
    const discountCode = document.getElementById('discount-code').value.trim();
    const discountMessage = document.getElementById('discount-message');
    
    // Example discount code logic (you can replace this with real codes)
    const validCodes = {
        'STAGE10': 10, // 10% off
        'FRIGHT20': 20  // 20% off
    };
    
    if (validCodes[discountCode]) {
        let discount = validCodes[discountCode];
        let discountedAmount = totalAmount * (1 - discount / 100);
        document.getElementById('total-amount').innerText = discountedAmount.toFixed(2);
        discountMessage.innerText = `Discount Applied: ${discount}% OFF!`;
        discountMessage.style.color = '#00FF00'; // Green color for success
    } else {
        discountMessage.innerText = 'Invalid discount code. Please try again.';
        discountMessage.style.color = '#FF0000'; // Red color for error
    }
}

// Add event listener to the 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        addToCart(e.target);
        updateTotalPrice(); // Update total price after adding to cart
    });
});

// Function to add item to cart
function addToCart(button) {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h3').innerText;
    const productPrice = productCard.querySelector('p').innerText;
    const productImage = productCard.querySelector('img').src;

    // Add product to cart
    cart.push({ name: productName, price: productPrice, image: productImage });
    cartCount++;
    updateCartCount();
}

// Update the cart count display
function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50"> 
            <span>${item.name}</span> - <span>${item.price}</span>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1);
    cartCount--;
    updateCartCount();
    updateTotalPrice(); // Recalculate the total after removal
    toggleCart();
}

// Proceed to checkout
function proceedToCheckout() {
    alert('Proceeding to checkout...');
    // Implement your checkout process here
}

// Continue shopping (close cart modal)
function continueShopping() {
    toggleCart();
}

// Wait until the DOM content is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('scrollToCart').addEventListener('click', function() {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
