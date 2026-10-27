import { ArrowUpRight, MoveUp } from "lucide-react";
import "./Footer.css";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Experience", href: "#experience" },
  { label: "Register", href: "#register" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <a className="footer-brand" href="#top" aria-label="Back to ROBOFEST top">
            <span className="footer-symbol">R<span>/</span></span>
            <span>ROBOTiX CLUB<small>NIT RAIPUR</small></span>
          </a>
          <p className="footer-line">Make something that makes<br />you think differently.</p>
          <div className="footer-nav-wrap">
            <span className="footer-nav-label">EXPLORE</span>
            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>
          </div>
          <a className="back-top" href="#top">
            Back to top <MoveUp size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ROBOTiX CLUB · NIT RAIPUR</span>
          <span>AN INDEPENDENT FESTIVAL CONCEPT</span>
          <span>BUILT FOR WHAT&apos;S NEXT <ArrowUpRight size={12} aria-hidden="true" /></span>
        </div>
      </div>
    </footer>
  );
}
