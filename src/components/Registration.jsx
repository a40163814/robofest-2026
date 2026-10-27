import { ArrowUpRight, MoveUpRight } from "lucide-react";
import "./Registration.css";

// Replace this placeholder with the organizer's official registration URL.
export const REGISTRATION_URL = "https://example.com/robofest-registration";

export default function Registration() {
  const isPlaceholder = new URL(REGISTRATION_URL).hostname === "example.com";

  return (
    <section className="registration-section" id="register" aria-labelledby="registration-title">
      <div className="registration-grid" aria-hidden="true" />
      <div className="shell registration-layout">
        <div className="registration-copy" data-reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> THE NEXT MOVE IS YOURS</p>
          <h2 id="registration-title">YOUR BUILD<br />STARTS <em>HERE.</em></h2>
          <p>
            Got an idea that needs a chassis? A team ready for its next
            challenge? Start here—and stay tuned for official details.
          </p>
          <a
            className="button button--register"
            href={REGISTRATION_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={isPlaceholder ? "Registration link placeholder—replace with official organizer link" : "Open official registration page"}
          >
            {isPlaceholder ? "Registration link coming soon" : "Start your registration"}
            {isPlaceholder ? <ArrowUpRight size={16} aria-hidden="true" /> : <MoveUpRight size={16} aria-hidden="true" />}
          </a>
          {isPlaceholder && (
            <span className="registration-note">
              PLACEHOLDER DESTINATION · UPDATE REGISTRATION_URL WHEN THE OFFICIAL LINK IS AVAILABLE
            </span>
          )}
        </div>
        <div className="registration-mark" aria-hidden="true" data-reveal>
          <span className="mark-ring mark-ring--outer" />
          <span className="mark-ring mark-ring--inner" />
          <span className="mark-core">RF<br /><small>26</small></span>
          <span className="mark-label mark-label--top">INITIATE</span>
          <span className="mark-label mark-label--bottom">MAKE IT MOVE</span>
          <span className="mark-cross">+</span>
        </div>
      </div>
    </section>
  );
}
