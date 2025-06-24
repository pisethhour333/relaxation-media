
document.addEventListener('DOMContentLoaded', function() {
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
