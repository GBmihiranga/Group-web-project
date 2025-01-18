// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example action (you can customize this)
    if (email && password) {
        alert('Login successful!');
        // Redirect or handle login logic here
    } else {
        alert('Please fill out all fields.');
    }

    e.target.reset(); // Reset form
});
