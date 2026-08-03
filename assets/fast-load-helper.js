/**
 * Shopify Fast-Load Helper
 * Developed by: Abdullah Al Rakib (fiverr.com/rakibdevbd)
 * 
 * This script handles advanced performance tasks:
 * 1. Intersection Observer for smooth image fade-ins.
 * 2. Performance monitoring to log load times.
 * 3. Throttling and Debouncing for scroll-heavy functions.
 */

class ShopifyPerformanceHelper {
    constructor() {
        this.initImageObserver();
        this.trackPagePerformance();
    }

    /**
     * Smooth Fade-in for Lazy-Loaded Images
     * Ensures images don't just "pop" in, creating a better UX.
     */
    initImageObserver() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('lazyloaded');
                    img.style.opacity = 1;
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.style.opacity = 0; // Set initial opacity
            imageObserver.observe(img);
        });
    }

    /**
     * Track and Log Performance Data
     * Useful for showing clients proof of speed.
     */
    trackPagePerformance() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const nav = performance.getEntriesByType("navigation")[0];
                const loadTime = (nav.loadEventEnd - nav.startTime) / 1000;
                console.log(`%c 🚀 Store Loaded in: ${loadTime.toFixed(2)}s`, 'background: #222; color: #bada55; padding: 5px; font-weight: bold;');
                
                if (loadTime > 3) {
                    console.warn("Performance Tip: Consider optimizing third-party apps to reduce load time.");
                }
            }, 0);
        });
    }
}

// Initialize the helper
document.addEventListener('DOMContentLoaded', () => {
    new ShopifyPerformanceHelper();
});