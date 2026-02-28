// 2. SMOOTH SCROLLING & AUTO-CLOSE MENU
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // 1. Perform the smooth scroll
            window.scrollTo({
                top: targetId === '#hero' ? 0 : targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // 2. Update the URL in the address bar without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }

        // Close mobile menu automatically
        const navLinksContainer = document.getElementById('nav-links');
        const hamburger = document.getElementById('hamburger');
        if (navLinksContainer.classList.contains('nav-active')) {
            navLinksContainer.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        }
    });
});
