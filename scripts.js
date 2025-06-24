
document.addEventListener("DOMContentLoaded", () => {
    // Light/Dark Mode Toggle
    const toggleButton = document.getElementById("mode-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });

    // Contact Form Submission with Thank You Message
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual form submission
        form.reset(); // Optional: clear the form
        thankYouMessage.style.display = "block";
    });
});
