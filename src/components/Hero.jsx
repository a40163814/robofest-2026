import { ArrowDown, ArrowUpRight, Crosshair, Radio } from "lucide-react";
import "./Hero.css";

function ForgeRobot() {
  return (
    <svg
      className="forge-robot"
      viewBox="0 0 620 620"
      role="img"
      aria-labelledby="robot-title robot-description"
    >
      <title id="robot-title">Original robotic arena illustration</title>
      <desc id="robot-description">
        A geometric cyan and violet robot head floating above a technical
        circular platform, drawn in custom vector shapes.
      </desc>
      <defs>
        <linearGradient id="shell" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#263a52" />
          <stop offset="0.55" stopColor="#111d2b" />
          <stop offset="1" stopColor="#34234f" />
        </linearGradient>
        <linearGradient id="visor" x1="0" x2="1">
          <stop offset="0" stopColor="#41e7e3" />
          <stop offset="1" stopColor="#9b7aff" />
        </linearGradient>
        <filter id="soft-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="310" cy="298" r="217" fill="none" stroke="#1b2b3c" strokeWidth="1" />
      <circle cx="310" cy="298" r="184" fill="none" stroke="#344657" strokeDasharray="2 10" />
      <circle cx="310" cy="298" r="154" fill="none" stroke="#41e7e3" strokeOpacity=".35" />
      <path d="M92 298a218 218 0 0 1 43-130" fill="none" stroke="#41e7e3" strokeWidth="2" />
      <path d="M477 330a168 168 0 0 1-76 124" fill="none" stroke="#9b7aff" strokeWidth="2" />
      <path d="M146 448 117 477M456 138l28-28" stroke="#41e7e3" strokeWidth="2" />
      <g className="robot-float">
        <path d="M236 111h148l48 48v164l-48 54H236l-48-54V159z" fill="url(#shell)" stroke="#57718a" strokeWidth="2" />
        <path d="m236 111 30-22h88l30 22M188 184h-27v101h27M432 184h27v101h-27" fill="none" stroke="#41e7e3" strokeWidth="5" />
        <path d="M222 190h176l19 21v79l-19 22H222l-18-22v-79z" fill="#08111c" stroke="url(#visor)" strokeWidth="3" />
        <path d="M250 245h39M332 245h39" stroke="#41e7e3" strokeWidth="8" strokeLinecap="round" filter="url(#soft-glow)" />
        <path d="m310 249 10 12-10 12-10-12z" fill="#ff8758" />
        <path d="m223 339 27 38h120l27-38" fill="#131c2c" stroke="#9b7aff" strokeWidth="2" />
        <path d="M276 356v36m68-36v36" stroke="#41e7e3" strokeWidth="3" />
        <circle cx="310" cy="409" r="19" fill="#101c29" stroke="#41e7e3" strokeWidth="2" />
        <circle cx="310" cy="409" r="5" fill="#ff8758" />
      </g>
      <g fill="#41e7e3">
        <circle cx="115" cy="264" r="3" />
        <circle cx="483" cy="322" r="3" />
        <circle cx="207" cy="100" r="2" />
      </g>
      <g fill="#a5b5c5" fontFamily="monospace" fontSize="9" letterSpacing="2">
        <text x="74" y="286">UNIT 01 / ACTIVE</text>
        <text x="404" y="484">CORE SYSTEMS</text>
        <text x="413" y="499">N° 26—RF</text>
      </g>
      <path d="M70 308h34m442 0h34M310 66v22m0 425v22" stroke="#344657" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />
      <div className="hero-layout shell">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> ROBOTiX CLUB <span>•</span> NIT RAIPUR</p>
          <h1 id="hero-title">
            <span className="headline-first">BUILD BEYOND</span>
            <span className="headline-last">THE <em>POSSIBLE.</em></span>
          </h1>
          <p className="hero-description">
            A meeting ground for curious minds, ambitious builds, and ideas
            that refuse to stay on the drawing board.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#events">
              Explore the Arena <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <a className="text-link" href="#register">
              Join the Revolution <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span className="status-indicator"><i /> CONCEPT IN MOTION</span>
            <span className="hero-footnote-line" />
            <span>ENGINEERED FOR THE CURIOUS</span>
          </div>
        </div>

        <div className="hero-art" data-reveal>
          <div className="art-label art-label--top"><Crosshair size={13} /> SYSTEM / 026</div>
          <ForgeRobot />
          <div className="art-label art-label--side"><Radio size={13} /> SIGNAL DETECTED</div>
          <div className="art-coordinate">21°14&apos;N<br />81°38&apos;E</div>
          <span className="art-index">01 — 06</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span><ArrowDown size={14} aria-hidden="true" />
      </a>
      <div className="hero-vertical-note" aria-hidden="true">ROBOTICS / IDEAS / IMPACT</div>
    </section>
  );
}
