import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1400;
const TOUCH_MIN_DELTA = 30;
const ANIMATION_DURATION = 1.3;

export function useScrollSection(totalSections) {
  const wrapperRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    () => window.innerWidth > DESKTOP_BREAKPOINT,
  );
  const isAnimating = useRef(false);

  const goTo = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(totalSections - 1, index));

      if (!isDesktop) {
        const sections = document.querySelectorAll(".fp-section");
        if (sections[clamped]) {
          sections[clamped].scrollIntoView({ behavior: "smooth" });
        }
        setCurrentSection(clamped);
        return;
      }

      if (isAnimating.current) return;
      isAnimating.current = true;

      gsap.to(wrapperRef.current, {
        y: -clamped * 100 + "vh",
        duration: ANIMATION_DURATION,
        ease: "power3.inOut",
        onComplete: () => {
          isAnimating.current = false;
        },
      });
      setCurrentSection(clamped);
    },
    [isDesktop, totalSections],
  );

  // Sync GSAP position when switching between desktop and mobile
  useEffect(() => {
    if (isDesktop && wrapperRef.current) {
      gsap.set(wrapperRef.current, { y: -currentSection * 100 + "vh" });
    } else if (!isDesktop && wrapperRef.current) {
      gsap.set(wrapperRef.current, { y: 0 });
    }
  }, [isDesktop]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > DESKTOP_BREAKPOINT);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop input handling
  useEffect(() => {
    if (!isDesktop) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;
      if (e.deltaY > 0) goTo(currentSection + 1);
      else goTo(currentSection - 1);
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < TOUCH_MIN_DELTA) return;
      if (delta > 0) goTo(currentSection + 1);
      else goTo(currentSection - 1);
    };

    const handleKeyDown = (e) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) goTo(currentSection + 1);
      if (["ArrowUp", "PageUp"].includes(e.key)) goTo(currentSection - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, goTo, isDesktop]);

  return { currentSection, goTo, wrapperRef, isDesktop };
}
