import { ArrowUpRight, Cpu, ScanLine } from "lucide-react";
import "./About.css";

function CircuitVisual() {
  return (
    <div
      className="circuit-visual"
      role="img"
      aria-label="Abstract circuit board illustration"
    >
      <div className="circuit-frame">
        <span className="circuit-corner circuit-corner--tl" />
        <span className="circuit-corner circuit-corner--br" />
        <div className="circuit-lines" aria-hidden="true">
          <i /><i /><i /><i /><i /><i />
        </div>
        <div className="circuit-chip">
          <Cpu size={38} strokeWidth={1.1} aria-hidden="true" />
          <span>IDEA<br />ENGINE</span>
        </div>
        <span className="circuit-tag circuit-tag--one">INPUT / CURIOSITY</span>
        <span className="circuit-tag circuit-tag--two">OUTPUT / IMPACT</span>
        <span className="circuit-coordinate">RFX—026<br />CORE / 01</span>
        <ScanLine className="circuit-scan" size={18} aria-hidden="true" />
      </div>
      <div className="visual-caption">
        <span>FROM FIRST SPARK</span><span className="caption-rule" /><span>TO WORKING PROTOTYPE</span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="shell">
        <div className="section-kicker" data-reveal>
          <span>01 / THE IDEA</span><span className="kicker-line" /><span>ABOUT ROBOFEST</span>
        </div>
        <div className="about-layout">
          <div className="about-visual" data-reveal>
            <CircuitVisual />
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow eyebrow--muted">A FESTIVAL FOR MAKERS</p>
            <h2 className="section-title" id="about-title">
              Curiosity is the<br />first <span>component.</span>
            </h2>
            <p className="about-lead">
              ROBOFEST is a robotics and innovation festival concept from
              ROBOTiX Club at NIT Raipur—built around the thrill of making
              something that moves, thinks, or solves.
            </p>
            <p className="about-detail">
              Bring a question. Bring a half-formed idea. Find people who want
              to test it with you. This is a space to experiment, build,
              collaborate, and take on engineering challenges—one prototype
              at a time.
            </p>
            <a className="inline-link" href="#experience">
              See how it unfolds <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="about-bottom" data-reveal>
          <span>MAKE THE IDEA REAL.</span>
          <span>OPEN SYSTEMS · OPEN MINDS</span>
        </div>
      </div>
    </section>
  );
}
