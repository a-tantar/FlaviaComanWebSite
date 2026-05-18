import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import "./Header.css";

const CALENDLY_URL = "https://calendly.com/flaviacoman/zoom";

export default function Header({ navItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header className={"header" + (scrolled ? " header--scrolled" : "")}>
        <div className="header__inner">
          <a href="/" className="header__logo" aria-label="Flavia Coman - Home">
            Flavia Coman
          </a>
          <nav className="header__nav" aria-label="Navigazione principale">
            {navItems.map(({ label, href }) => (
              <a key={label} href={href} className="header__nav-link">
                {label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="btn btn-outline btn-sm header__cta"
          >
            Prenota call
          </button>
        </div>
      </header>
      <PopupModal
        url={CALENDLY_URL}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={document.body}
      />
    </>
  );
}
