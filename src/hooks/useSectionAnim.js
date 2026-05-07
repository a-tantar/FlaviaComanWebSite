import gsap from "gsap";
import { useEffect, useRef } from "react";

/**
 * useSectionAnim — triggers GSAP stagger fade-up on [data-anim] children
 * when the section scrolls into view (IntersectionObserver).
 */
export function useSectionAnim() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-anim]");
    if (!els.length) return;

    gsap.set(els, { opacity: 0, y: 28 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(els, {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
}
