import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(
    () => !sessionStorage.getItem("fc_loaded"),
  );
  const loaderRef = useRef(null);
  const barRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (!visible) return;

    const duration = 2.5 + Math.random() * 2;

    const tl = gsap.timeline();
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 },
    );
    tl.fromTo(
      barRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
              sessionStorage.setItem("fc_loaded", "1");
              setVisible(false);
            },
          });
        },
      },
      "-=0.3",
    );
  }, [visible]);

  if (!visible) return null;

  return (
    <div ref={loaderRef} className="loader" aria-label="Caricamento in corso">
      <div className="loader__content">
        <div ref={logoRef} className="loader__logo">
          <span className="loader__brand">Flavia Coman</span>
          <span className="loader__tagline">
            Financial Empowerment Mentoring
          </span>
        </div>
        <div className="loader__bar-track">
          <div ref={barRef} className="loader__bar" />
        </div>
      </div>
    </div>
  );
}
