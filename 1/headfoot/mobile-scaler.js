(function() {
    const TARGET_WIDTH = 1200;
    const WRAPPER_ID = 'site-wrapper';

    function applyScale() {
        const wrapper = document.getElementById(WRAPPER_ID);
        if (!wrapper) return;

        const windowWidth = window.innerWidth;

        if (windowWidth < TARGET_WIDTH) {
            const scale = windowWidth / TARGET_WIDTH;
            
            wrapper.style.transform = `scale(${scale})`;
            wrapper.style.transformOrigin = 'top left';
            
            // This calculates the new visual height of the scaled element
            // and tells the body to be exactly that tall.
            const rect = wrapper.getBoundingClientRect();
            document.body.style.height = `${rect.height}px`;
        } else {
            // Reset for desktop
            wrapper.style.transform = 'none';
            wrapper.style.transformOrigin = 'unset';
            document.body.style.height = 'auto';
        }
    }

    window.addEventListener('resize', applyScale);
    window.addEventListener('load', applyScale);
    // Important: also run after a small delay to catch dynamic heights (like Three.js loading)
    setTimeout(applyScale, 100);
    applyScale();
})();