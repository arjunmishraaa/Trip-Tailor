// Switch to Sign Up form
document.getElementById('switchToSignUp').addEventListener('click', function() {
    document.getElementById('signInForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
});

// Switch to Sign In form
document.getElementById('switchToSignIn').addEventListener('click', function() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
});

// Sign Up Form Validation
document.getElementById('signUpFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get password and confirm password values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Get the error message container
    const errorMessage = document.getElementById('error-message');

    // Clear any previous error message
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

    // Validate passwords match
    if (password !== confirmPassword) {
        // Show error message if passwords do not match
        errorMessage.textContent = "Passwords do not match. Please try again.";
        errorMessage.style.display = 'block';
        document.getElementById('confirmPassword').classList.add('error'); // Add error class to confirm password field
        return false; // Prevent form submission
    }

    // If passwords match, proceed with form submission
    alert("Sign Up successful!");
    // You can submit the form here if required, like:
    // document.getElementById('signUpFormSubmit').submit();
});

// Clear error message and error styling when user changes the password or confirm password field
document.getElementById('password').addEventListener('input', function() {
    clearError();
});
document.getElementById('confirmPassword').addEventListener('input', function() {
    clearError();
});

// Function to clear error message and error styling
function clearError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';
    document.getElementById('confirmPassword').classList.remove('error');
}
