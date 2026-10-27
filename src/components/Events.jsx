import { ArrowUpRight } from "lucide-react";
import { events } from "../data/events.js";
import "./Events.css";

function EventVisual({ type }) {
  if (type === "wars") {
    return (
      <svg viewBox="0 0 400 205" role="img" aria-label="Two geometric robots face off in a combat arena">
        <path d="M0 166h400M40 166V61h320v105M56 77h288v89" fill="none" stroke="#344255" />
        <path d="M65 165 113 144h177l45 21" fill="none" stroke="#ff8758" strokeOpacity=".55" />
        <path d="m110 117 18-43h62l20 43-13 30h-75z" fill="#172334" stroke="#9b7aff" strokeWidth="2" />
        <path d="m126 98 11-13h38l12 13v13h-61z" fill="#090f19" stroke="#9b7aff" />
        <path d="M141 100h11m18 0h11" stroke="#c7b9ff" strokeWidth="4" strokeLinecap="round" />
        <path d="m206 117 20-43h62l18 43-12 30h-75z" fill="#172334" stroke="#41e7e3" strokeWidth="2" />
        <path d="m219 98 12-13h38l11 13v13h-61z" fill="#090f19" stroke="#41e7e3" />
        <path d="M234 100h11m18 0h11" stroke="#9afffb" strokeWidth="4" strokeLinecap="round" />
        <path d="m189 113 16 8m-11-17 13 14" stroke="#ff8758" strokeWidth="2" />
        <circle cx="200" cy="120" r="21" fill="none" stroke="#ff8758" strokeOpacity=".55" />
        <path d="M73 55h21m212 0h21" stroke="#ff8758" />
      </svg>
    );
  }

  if (type === "race") {
    return (
      <svg viewBox="0 0 400 205" role="img" aria-label="A small racing rover follows a glowing track">
        <path d="M-20 142h126q32 0 32-32V67q0-24 25-24h83q27 0 27 25v22q0 26 26 26h122" fill="none" stroke="#29394a" strokeWidth="18" />
        <path d="M-20 142h126q32 0 32-32V67q0-24 25-24h83q27 0 27 25v22q0 26 26 26h122" fill="none" stroke="#41e7e3" strokeDasharray="5 7" strokeWidth="2" />
        <g transform="translate(193 89) rotate(-8)">
          <rect x="-32" y="-17" width="64" height="36" rx="5" fill="#172536" stroke="#41e7e3" strokeWidth="2" />
          <rect x="-14" y="-9" width="28" height="19" rx="2" fill="#0b121d" stroke="#7890a5" />
          <circle cx="-24" cy="21" r="7" fill="#090e16" stroke="#92a3b6" />
          <circle cx="24" cy="21" r="7" fill="#090e16" stroke="#92a3b6" />
          <path d="M-11 20v8m11-8v8m11-8v8" stroke="#ff8758" strokeWidth="2" />
        </g>
        <circle cx="193" cy="89" r="54" fill="none" stroke="#41e7e3" strokeOpacity=".14" />
        <path d="m222 44 14-10m-9 19 18-4" stroke="#41e7e3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 205" role="img" aria-label="A robotics prototype takes shape on a technical blueprint">
      <path d="M0 34h400M0 82h400M0 130h400M0 178h400M42 0v205m79-205v205m79-205v205m79-205v205m79-205v205" stroke="#243241" strokeWidth="1" />
      <path d="M115 57h170v99H115z" fill="#101d2a" stroke="#ff8758" strokeWidth="2" />
      <path d="m147 91 24-19h60l24 19v36l-24 17h-60l-24-17z" fill="#0b121d" stroke="#41e7e3" strokeWidth="2" />
      <circle cx="201" cy="109" r="12" fill="none" stroke="#9b7aff" strokeWidth="2" />
      <path d="M201 91v-9m0 54v-9m-29-18h-10m78 0h-10M132 106h15m108 0h15" stroke="#ff8758" strokeWidth="2" />
      <path d="M124 57V43h28m134 14V43h-28M124 156v13h28m134-13v13h-28" fill="none" stroke="#ff8758" />
      <path d="M74 87h30m-30 12h21m202-12h30m-30 12h21M164 39v-9m12 9v-9m12 9v-9" stroke="#74869a" />
      <circle cx="201" cy="109" r="42" fill="none" stroke="#41e7e3" strokeOpacity=".2" />
      <path d="m229 137 30 20" stroke="#41e7e3" strokeDasharray="3 5" />
      <circle cx="265" cy="160" r="4" fill="#ff8758" />
      <text x="20" y="188" fill="#718399" fontFamily="monospace" fontSize="8">IDEATE / BUILD / ITERATE</text>
      <text x="309" y="188" fill="#41e7e3" fontFamily="monospace" fontSize="8">RTH—03</text>
    </svg>
  );
}

export default function Events() {
  return (
    <section className="section events-section" id="events" aria-labelledby="events-title">
      <div className="shell">
        <div className="section-kicker" data-reveal>
          <span>02 / THE ARENA</span><span className="kicker-line" /><span>CHALLENGE CONCEPTS</span>
        </div>
        <div className="events-heading" data-reveal>
          <div>
            <p className="eyebrow eyebrow--muted">PICK YOUR PROBLEM</p>
            <h2 className="section-title" id="events-title">Different builds.<br /><span>One bold mindset.</span></h2>
          </div>
          <p className="events-intro">
            From high-speed builds to collaborative prototyping, choose a
            proposed challenge that makes you want to get hands-on.
          </p>
        </div>
        <div className="event-grid">
          {events.map((event) => (
            <article
              className={`event-card event-card--${event.accent}`}
              key={event.number}
              data-reveal
              tabIndex="0"
            >
              <div className="event-card-top">
                <span>{event.number} / 03</span><span className="event-category">{event.category}</span>
              </div>
              <div className="event-visual">
                <EventVisual type={event.visual} />
                <span className="visual-cross visual-cross--one" aria-hidden="true">+</span>
                <span className="visual-cross visual-cross--two" aria-hidden="true">+</span>
              </div>
              <div className="event-body">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <a className="event-link" href="#register" aria-label={`Explore ${event.name} challenge`}>
                  Explore Challenge <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="event-disclaimer" data-reveal>
          EVENT NAMES AND DESCRIPTIONS ARE CONCEPTUAL. FINAL FORMAT, RULES, AND AVAILABILITY TO BE CONFIRMED BY ORGANIZERS.
        </p>
      </div>
    </section>
  );
}
