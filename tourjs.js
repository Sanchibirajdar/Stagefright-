    <script>
        // Countdown Timer
        const countdownDate = new Date("March 15, 2025 08:00:00").getTime();
        const countdownTimer = document.getElementById('countdown-timer');
        
        const interval = setInterval(function() {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            
            if (distance < 0) {
                clearInterval(interval);
                countdownTimer.innerHTML = "Tour Started!";
            }
        }, 1000);

        // Show ticket modal when "Buy Tickets" button is clicked
        document.querySelectorAll('.buy-tickets').forEach(button => {
            button.addEventListener('click', function () {
                document.getElementById('ticket-modal').style.display = 'block';
            });
        });

        // Close ticket modal
        document.getElementById('close-modal').addEventListener('click', function () {
            document.getElementById('ticket-modal').style.display = 'none';
        });

        // Proceed to checkout (for demo purposes)
        document.getElementById('proceed-checkout').addEventListener('click', function () {
            alert('Proceeding to checkout...');
            document.getElementById('ticket-modal').style.display = 'none';
        });
    </script>