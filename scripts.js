
document.addEventListener('DOMContentLoaded', function() {
    // Light/Dark Mode Toggle
    const toggleButton = document.getElementById("mode-toggle");
    const body = document.body;

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
    });
    const filterButtons = document.querySelectorAll('.filter-button');
    const videos = document.querySelectorAll('.video');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            videos.forEach(video => {
                if (category === 'all' || video.getAttribute('data-category') === category) {
                    video.style.display = 'block';
                } else {
                    video.style.display = 'none';
                }
            });
        });
    });
});
