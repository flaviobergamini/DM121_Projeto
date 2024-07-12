document.querySelectorAll('.progress-container').forEach(container => {
    const percentage = container.getAttribute('data-percentage');
    const progressBar = container.querySelector('.progress-bar');
    progressBar.style.width = percentage + '%';
});