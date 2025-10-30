document.addEventListener('DOMContentLoaded', function() {
    // Create progress bar element
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress-bar';
    
    // Style the progress bar
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '1px';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = '#FBAE00';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.2s ease-out';
    
    // Add progress bar to the page
    document.body.appendChild(progressBar);
    
    // Update progress bar width as user scrolls
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        
        // Update progress bar width
        progressBar.style.width = scrolled + '%';
    });
}); 