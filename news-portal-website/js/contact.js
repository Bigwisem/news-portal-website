// Contact Page Functionality

// Handle contact form submission
function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show success message
            alert(`Thank you for your message, ${name}!\n\nWe have received your inquiry and will get back to you soon at ${email}.\n\nSubject: ${subject}`);
            
            // Reset form
            form.reset();
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupContactForm();
});
