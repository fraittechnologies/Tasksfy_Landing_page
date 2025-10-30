document.addEventListener('DOMContentLoaded', function() {
    // Hero section animation effects
    const heroContent = document.querySelector('.hero-content');
    
    // Add animation class when page loads
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
    
    // Smooth scroll for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID from href
            const targetId = this.getAttribute('href');
            if(targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                
                if(targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Video fallback for mobile devices
    const heroVideo = document.querySelector('.hero-video');
    
    function checkVideoSupport() {
        // Check if the video is playing (some mobile browsers won't autoplay even with muted)
        heroVideo.play().then(() => {
            // Video is playing
        }).catch(error => {
            // Video failed to play - apply fallback background
            heroVideo.style.display = 'none';
            document.querySelector('.video-overlay').style.backgroundImage = 'linear-gradient(135deg, var(--primary-black), var(--primary-green))';
        });
    }
    
    // Run check on load
    checkVideoSupport();
    
    // Re-check on orientation change
    window.addEventListener('orientationchange', checkVideoSupport);
});