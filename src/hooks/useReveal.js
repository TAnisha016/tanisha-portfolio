import { useEffect, useRef } from 'react';

// Adds the `.is-visible` class to an element once it scrolls into view.
// Pairs with the `.reveal` CSS class defined in index.css.
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
