import { ArrowDownRight, Bot, FlaskConical, Lightbulb, Users } from "lucide-react";
import "./Experience.css";

const stages = [
  {
    number: "01",
    title: "IMAGINE",
    text: "Start with a question worth chasing.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "BUILD",
    text: "Turn sketches into something tangible.",
    icon: Bot,
  },
  {
    number: "03",
    title: "TEST",
    text: "Learn from every run, miss, and fix.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "COLLABORATE",
    text: "Make the next iteration together.",
    icon: Users,
  },
];

export default function Experience() {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="shell">
        <div className="section-kicker" data-reveal>
          <span>03 / THE PROCESS</span><span className="kicker-line" /><span>BUILT BY DOING</span>
        </div>
        <div className="experience-heading" data-reveal>
          <p className="eyebrow eyebrow--muted">NOT JUST A FINISH LINE</p>
          <h2 className="section-title" id="experience-title">The best part is<br /><span>everything in between.</span></h2>
        </div>
        <div className="process-track" aria-label="The ROBOFEST process" data-reveal>
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div className="process-stage" key={stage.number}>
                <div className="stage-topline">
                  <span>{stage.number}</span>
                  {index < stages.length - 1 && <span className="stage-arrow" aria-hidden="true">————→</span>}
                </div>
                <div className="stage-icon"><Icon size={21} strokeWidth={1.4} aria-hidden="true" /></div>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            );
          })}
        </div>
        <div className="experience-note" data-reveal>
          <span className="note-icon"><ArrowDownRight size={18} /></span>
          <p>Sketch it. Break it. Fix it. Then show the world what you learned.</p>
          <span className="note-aside">PROGRESS IS A TEAM SPORT.</span>
        </div>
      </div>
    </section>
  );
}
