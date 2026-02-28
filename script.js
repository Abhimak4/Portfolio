document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('nav-links');
    const nav = document.querySelector('nav');

    // 1. MOBILE MENU LOGIC
    if (hamburger && navLinksContainer) {
        hamburger.addEventListener('click', () => {
            navLinksContainer.classList.toggle('nav-active');
            hamburger.classList.toggle('toggle');
        });
    }

    // 2. SMOOTH SCROLL & URL HASH FIX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#hero') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Update URL to root
                history.pushState(null, null, window.location.pathname);
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Force the address bar to update with the hash
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
