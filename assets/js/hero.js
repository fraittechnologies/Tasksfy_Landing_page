document.addEventListener('DOMContentLoaded', function() {
    // Animation for the heroo section
    const herooContent = document.querySelector('.heroo-content');
    const herooImage = document.querySelector('.heroo-image');
    
    // Set initial state for animation
    herooContent.style.opacity = '0';
    herooContent.style.transform = 'translateX(-20px)';
    herooContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    herooImage.style.opacity = '0';
    herooImage.style.transform = 'translateX(20px)';
    herooImage.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
    
    // Trigger animations
    setTimeout(() => {
        herooContent.style.opacity = '1';
        herooContent.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        herooImage.style.opacity = '1';
        herooImage.style.transform = 'translateX(0)';
    }, 300);
    
    // Play Store link click event
    const playstoreLink = document.querySelector('.playstore-link');
    if (playstoreLink) {
        playstoreLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with your actual Play Store link
            window.location.href = 'https://play.google.com/store';
        });
    }
});