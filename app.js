// Smooth Scroll
document.querySelectorAll('.smooth-scroll').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Simulate database save
        console.log('Saving to database:', { name, email, message });

        const responseMessage = document.getElementById('responseMessage');
        responseMessage.textContent = 'Thank you for reaching out!';
        responseMessage.classList.remove('hidden');

        this.reset();

        setTimeout(() => {
            responseMessage.textContent = '';
            responseMessage.classList.add('hidden');
        }, 3000);
    } else {
        alert('Please fill in all fields.');
    }
});
