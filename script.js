document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU LOGIC
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    // 2. SMOOTH SCROLL & URL HASH FIX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Stop the "snap" jump
            
            const targetId = this.getAttribute('href');
            
            // Handle "Home" link specifically to scroll to top
            if (targetId === '#hero' || targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                history.pushState(null, null, ' '); // Clears hash for Home
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Scroll to the element
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // FORCE the URL update
                    history.pushState(null, null, targetId);
                }
            }

            // Close mobile menu
            if (navLinksContainer.classList.contains('nav-active')) {
                navLinksContainer.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });
});
