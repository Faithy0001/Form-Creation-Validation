// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Listen for form submission
    form.addEventListener('submit', function(event) {
        // Stop the form from actually submitting
        event.preventDefault();

        // Get input values and remove extra spaces
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Start with assuming everything is valid
        let isValid = true;
        const messages = [];

        // Check username (must be at least 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Check email (must have @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain @ and a dot (.).');
        }

        // Check password (must be at least 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Show the feedback div
        feedbackDiv.style.display = 'block';

        // Display success or error messages
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
