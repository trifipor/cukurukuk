document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.center-container h1');
    if (h1) {
        h1.style.cursor = 'pointer';
        h1.addEventListener('click', function() {
            window.location.href = 'tiwi.html';
        });
    }
});
