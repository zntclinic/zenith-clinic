import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const {
    threshold = 0.2,
    rootMargin = "0px 0px -10% 0px",
    triggerOnce = true,
  } = options;

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-reveal-index");
            if (indexAttr) {
              const idx = parseInt(indexAttr, 10);
              setVisibleItems((prev) => {
                const next = new Set(prev);
                next.add(idx);
                return next;
              });

              if (triggerOnce) {
                observer.unobserve(entry.target);
              }
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  const getItemProps = (index: number) => ({
    ref: (el: HTMLElement | null) => (itemRefs.current[index] = el),
    "data-reveal-index": index,
  });

  const isVisible = (index: number) => visibleItems.has(index);

  return {
    getItemProps,
    isVisible,
    visibleItems,
  };
};
