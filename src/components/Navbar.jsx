import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="ROBOTiX home">
          <span className="brand-mark" aria-hidden="true">
            R<span>/</span>
          </span>
          <span className="brand-word">
            ROBOT<span>i</span>X
            <small>CLUB · NIT RAIPUR</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <div
          className={`nav-content${menuOpen ? " nav-content--open" : ""}`}
          id="primary-links"
        >
          <div className="nav-links">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={link.href}
                className={index === 0 ? "nav-link nav-link--active" : "nav-link"}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a className="nav-register" href="#register" onClick={closeMenu}>
            Register <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
