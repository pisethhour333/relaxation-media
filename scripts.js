
document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for subscribing!');
    });
});
