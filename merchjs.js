document.addEventListener("DOMContentLoaded", function () {
    const cart = [];
    const cartModal = document.getElementById("cart-modal");
    const cartItemsList = document.getElementById("cart-items-list");
    const cartCount = document.getElementById("cart-count");
    
    // Toggle Cart Modal
    window.toggleCart = function () {
        cartModal.style.display = cartModal.style.display === "flex" ? "none" : "flex";
        updateCartDisplay();
    };

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productCard = this.closest(".product-card");
            const productName = productCard.querySelector("h3").innerText;
            const productPrice = productCard.querySelector("p").innerText;
            const productImage = productCard.querySelector("img").src;
            const selectedVariant = productCard.querySelector(".product-options select");
            const variant = selectedVariant ? selectedVariant.value : "Default";

            addToCart(productName, productPrice, productImage, variant);
        });
    });

    function addToCart(name, price, image, variant) {
        const existingItem = cart.find(item => item.name === name && item.variant === variant);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, image, variant, quantity: 1 });
        }

        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartItemsList.innerHTML = "";
        let totalCount = 0;

        cart.forEach((item, index) => {
            totalCount += item.quantity;
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; border-radius:5px;">
                ${item.name} (${item.variant}) - ${item.price} x ${item.quantity}
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsList.appendChild(li);
        });

        cartCount.innerText = totalCount;
    }

    window.removeFromCart = function (index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCartDisplay();
    };

    window.proceedToCheckout = function () {
        alert("Proceeding to checkout with " + cart.length + " items.");
    };

    // Handle Product Variant Selection
    document.querySelectorAll(".product-options select").forEach(select => {
        select.addEventListener("change", function () {
            const productCard = this.closest(".product-card");
            const productImage = productCard.querySelector("img");
            const newImage = this.options[this.selectedIndex].getAttribute("data-image");

            if (newImage) {
                productImage.src = newImage;
            }
        });
    });

    // Initialize Slick Carousel
    $(".product-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
