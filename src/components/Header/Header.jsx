import { useEffect, useState } from "react";
import "./Header.css";

export default function Header({ navItems }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"header" + (scrolled ? " header--scrolled" : "")}>
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="Flavia Coman - Home">
          <div className="header__logo-stack">
            <span className="header__logo-line1">FLAVIA</span>
            <span className="header__logo-line2">COMAN</span>
          </div>
          <span className="header__logo-sub">Financial Empowerment Mentor</span>
        </a>
        <nav className="header__nav" aria-label="Navigazione principale">
          {navItems.map(({ label, href }) => (
            <a key={label} href={href} className="header__nav-link">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
