// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    // Display a confirmation (or process data as needed)
    alert(`Thank you, ${fullName}! Your message has been received.`);
    
    // Optionally reset the form
    e.target.reset();
});
