document.addEventListener("DOMContentLoaded", function () {

    // 🔹 Redirect to Sign In page
    let signInBtn = document.getElementById("signInBtn");
    if (signInBtn) {
        signInBtn.addEventListener("click", function () {
            window.location.href = "signin.html"; 
        });
    }

    // 🔹 Redirect to Sign Up page
    let signUpBtn = document.getElementById("signUpBtn");
    if (signUpBtn) {
        signUpBtn.addEventListener("click", function () {
            window.location.href = "signup.html"; 
        });
    }

    // 🔹 Instantly redirect to dashboard when submitting Sign In form
    let signinForm = document.getElementById("signinForm");
    if (signinForm) {
        signinForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            window.location.href = "dashboard.html"; // Go to dashboard
        });
    }

    // 🔹 Instantly redirect to dashboard when submitting Sign Up form
    let signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission
            window.location.href = "dashboard.html"; // Go to dashboard
        });
    }

    // 🔹 Redirect to Setup page on "Get Started" button click
    let startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", function () {
            window.location.href = "pages/setup.html";
        });
    }
});
