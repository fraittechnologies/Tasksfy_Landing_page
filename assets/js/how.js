// ===== START OF NEW OPERATIONS SECTION JS =====
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const toggleButton = document.querySelector('.operations-toggle-button');
    const clientToggle = document.querySelector('.operations-toggle-option:first-child');
    const taskerToggle = document.querySelector('.operations-toggle-option:last-child');
    const clientContent = document.getElementById('client-content');
    const taskerContent = document.getElementById('tasker-content');
    const clientPreview = document.querySelector('.operations-mobile-mockup.client-visible');
    const taskerPreview = document.querySelector('.operations-mobile-mockup.tasker-hidden');
    
    // Toggle between Client and Tasker
    function toggleView(isTasker) {
        if (isTasker) {
            // Update toggle button
            toggleButton.classList.add('tasker-active');
            clientToggle.classList.remove('active');
            taskerToggle.classList.add('active');
            
            // Update content visibility
            clientContent.classList.remove('client-visible');
            clientContent.classList.add('tasker-hidden');
            taskerContent.classList.remove('tasker-hidden');
            taskerContent.classList.add('client-visible');
            
            // Update mobile preview
            clientPreview.classList.remove('client-visible');
            clientPreview.classList.add('tasker-hidden');
            taskerPreview.classList.remove('tasker-hidden');
            taskerPreview.classList.add('client-visible');
        } else {
            // Update toggle button
            toggleButton.classList.remove('tasker-active');
            clientToggle.classList.add('active');
            taskerToggle.classList.remove('active');
            
            // Update content visibility
            clientContent.classList.add('client-visible');
            clientContent.classList.remove('tasker-hidden');
            taskerContent.classList.add('tasker-hidden');
            taskerContent.classList.remove('client-visible');
            
            // Update mobile preview
            clientPreview.classList.add('client-visible');
            clientPreview.classList.remove('tasker-hidden');
            taskerPreview.classList.add('tasker-hidden');
            taskerPreview.classList.remove('client-visible');
        }
    }

    // Click event for toggle options
    clientToggle.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            toggleView(false);
        }
    });

    taskerToggle.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            toggleView(true);
        }
    });

    // Click event for the entire toggle button
    toggleButton.addEventListener('click', function(e) {
        if (e.target === this) {
            const isTaskerActive = toggleButton.classList.contains('tasker-active');
            toggleView(!isTaskerActive);
        }
    });

    // Adjust layout for mobile devices
    function adjustLayout() {
        const isMobile = window.innerWidth <= 992;
        
        if (isMobile) {
            clientContent.style.position = 'relative';
            taskerContent.style.position = 'relative';
        } else {
            clientContent.style.position = 'absolute';
            taskerContent.style.position = 'absolute';
        }
    }

    // Initial check and add resize listener
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
// ===== END OF NEW OPERATIONS SECTION JS =====