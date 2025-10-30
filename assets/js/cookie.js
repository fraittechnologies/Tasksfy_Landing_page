document.addEventListener('DOMContentLoaded', function() {
    // Check if cookie consent was already given
    if (!getCookie('cookie_consent')) {
        // Show the popup if no consent was given yet
        const cookiePopup = document.getElementById('cookie-consent-popup');
        cookiePopup.style.display = 'block';
        
        // Set up event listeners for the buttons
        document.getElementById('accept-cookies').addEventListener('click', function() {
            setCookie('cookie_consent', 'accepted', 365);
            cookiePopup.style.display = 'none';
        });
        
        document.getElementById('decline-cookies').addEventListener('click', function() {
            setCookie('cookie_consent', 'declined', 365);
            cookiePopup.style.display = 'none';
        });
    }
    
    // Cookie helper functions
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});