document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.querySelector('.menu-trigger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-items a');
    
    // Create and append overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        mobileMenu.style.display = 'block';
        overlay.classList.add('active');
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenuHandler() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            mobileMenu.style.display = 'none';
        }, 300); // Match this with CSS transition time
    }

    menuTrigger.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuHandler);
    overlay.addEventListener('click', closeMenuHandler);

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenuHandler);
    });
});
