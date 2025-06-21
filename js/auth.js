// js/auth.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Login Form Handling ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Basic validation
            if (!email || !password) {
                alert('Please enter both email and password.');
                return;
            }

            // In a real application, you would send this data to your server
            console.log('Login attempt:', { email, password });
            alert('Login form submitted (Check console for data)!'); // Simulate success
            // window.location.href = 'dashboard.html'; // Redirect on successful login
        });
    }

    // --- Register Form Handling ---
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const fullName = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const termsAccepted = document.getElementById('terms').checked;

            // Basic validation for registration
            if (!fullName || !email || !password || !confirmPassword) {
                alert('All fields are required.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            if (!termsAccepted) {
                alert('You must agree to the Terms of Service and Privacy Policy.');
                return;
            }

            // In a real application, you would send this data to your server
            console.log('Registration attempt:', { fullName, email, password });
            alert('Registration form submitted (Check console for data)!'); // Simulate success
            // window.location.href = 'login.html'; // Redirect to login after successful registration
        });
    }

});

// js/auth.js - Add this to your existing DOMContentLoaded listener

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing Login Form Handling) ...

    // ... (existing Register Form Handling) ...

    // --- Forgot Password Form Handling ---
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const email = document.getElementById('forgot-email').value;

            // Basic validation
            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            // In a real application, you would send this email to your server
            // The server would then send a password reset link to the email.
            console.log('Forgot Password request for:', { email });
            alert('If an account with that email exists, a password reset link has been sent!'); // Generic success message for security
            // Optionally, redirect to a confirmation page or back to login
            // window.location.href = 'login.html';
        });
    }

});

// js/auth.js - Add this to your existing DOMContentLoaded listener

document.addEventListener('DOMContentLoaded', () => {
    // ... (existing Login Form Handling) ...
    // ... (existing Register Form Handling) ...
    // ... (existing Forgot Password Form Handling) ...

    // --- Logout Button Handling ---
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            // In a real application, you would:
            // 1. Clear any authentication tokens/cookies from localStorage or sessionStorage.
            //    localStorage.removeItem('authToken');
            //    sessionStorage.removeItem('userSession');
            // 2. Potentially send a request to your backend to invalidate the session.

            alert('You have been logged out!'); // Simulate logout
            window.location.href = 'login.html'; // Redirect to the login page
        });
    }

});