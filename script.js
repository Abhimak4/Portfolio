// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU LOGIC
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            // Toggle the side drawer
            navLinksContainer.classList.toggle('nav-active');
            // Animate the hamburger icon to an X
            hamburger.classList.toggle('toggle');
        });
    }

    // 2. SMOOTH SCROLLING & AUTO-CLOSE MENU
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll to target with offset for sticky nav
                window.scrollTo({
                    top: targetId === '#hero' ? 0 : targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu automatically after clicking a link
            if (navLinksContainer.classList.contains('nav-active')) {
                navLinksContainer.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

});
