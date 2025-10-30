// Progress bar animation
window.onscroll = function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("myProgressBar").style.width = scrolled + "%";
};

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navbarLinks = document.getElementById('navbarLinks');
    const dropdowns = document.querySelectorAll('.dropdown');
    const icon = mobileMenuToggle.querySelector('i');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up
        navbarLinks.classList.toggle('active');
        
        // Change icon
        if (navbarLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            
            // Close all dropdowns when closing menu
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    
    // Handle dropdowns in mobile view
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link');
        
        // Enhance hover with touch events for mobile
        dropdown.addEventListener('touchstart', function(e) {
            if (window.innerWidth <= 768) {
                // Don't do anything special, let the hover CSS handle it
                // This just ensures the device registers touch events
            }
        });
        
        // Keep click functionality as backup
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation(); // Prevent event from bubbling up
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
                
                // Close other open dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!navbarLinks.contains(e.target) && e.target !== mobileMenuToggle) {
                navbarLinks.classList.remove('active');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                
                // Close all dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }
    });

    // Handle window resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state when switching to desktop
            navbarLinks.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            
            // Reset all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Hide navbar when scrolling up (as requested)
(function() {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        const currentY = window.scrollY;
        // Always show when near the very top
        if (currentY <= 10) {
            navbar.classList.remove('hide-on-scroll-up');
            lastScrollY = currentY;
            return;
        }

        if (currentY < lastScrollY) {
            // Scrolling up → hide navbar
            navbar.classList.add('hide-on-scroll-up');
        } else {
            // Scrolling down → show navbar
            navbar.classList.remove('hide-on-scroll-up');
        }

        lastScrollY = currentY;
    }, { passive: true });
})();


