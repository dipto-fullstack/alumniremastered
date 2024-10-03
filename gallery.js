document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.tab-btn');
    const galleryItems = document.querySelectorAll('.item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get filter type (photos/videos/all)
            const filter = button.getAttribute('data-filter');

            // Loop through items and display/hide based on filter
            galleryItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    item.style.display = item.classList.contains(filter) ? 'block' : 'none';
                }
            });
        });
    });
});
