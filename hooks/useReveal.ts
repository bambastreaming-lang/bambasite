import { useEffect, useRef } from 'react';

export const useReveal = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    const initReveal = () => {
      const reveals = document.querySelectorAll('.reveal:not(.active)');
      
      if (reveals.length === 0) return;

      if ('IntersectionObserver' in window) {
        // Clean up previous observer
        if (observerRef.current) {
          observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observerRef.current?.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });
        
        reveals.forEach(reveal => observerRef.current?.observe(reveal));
      } else {
        // Fallback for older browsers
        const handleScroll = () => {
          reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            const revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
              reveal.classList.add('active');
            }
          });
        };
        
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on load
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    };

    // Initialize after React renders
    const timeoutId = setTimeout(initReveal, 50);
    
    // Also re-initialize when window resizes or scrolls (for dynamic content)
    const handleResize = () => {
      setTimeout(initReveal, 50);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};
