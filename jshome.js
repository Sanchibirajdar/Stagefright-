// Popup Ad functionality
const popupAdModal = document.getElementById('popup-ad-modal');
const closePopupAdBtn = document.getElementById('close-popup-ad-btn');

// Show the popup ad after 3 seconds
setTimeout(() => {
    popupAdModal.style.display = 'flex';
}, 3000);

// Close the popup ad when the "X" is clicked
closePopupAdBtn.addEventListener('click', () => {
    popupAdModal.style.display = 'none';
});
