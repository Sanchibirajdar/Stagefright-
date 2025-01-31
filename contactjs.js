document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerText = 'Your message has been sent!';

    // Change button color on click
    const sendButton = document.getElementById('sendBtn');
    sendButton.style.backgroundColor = '#FFC107'; // Color change to indicate message sent

    // Clear the form after sending
    document.getElementById('contactForm').reset();
});
