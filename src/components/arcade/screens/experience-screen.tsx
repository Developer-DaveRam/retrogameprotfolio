"use client";

import { useState } from "react";
import { CheckCircle2, Castle, ChevronDown, FlaskConical, ScrollText } from "lucide-react";
import { experience } from "@/data/portfolio";

const guides = [ScrollText, FlaskConical, Castle];

export function ExperienceScreen() {
  const [opened, setOpened] = useState("CASTLE 03");
  return (
    <div className="level-content castle-journey">
      <div className="castle-intro">
        <span className="castle-intro__sigil">✦</span>
        <p>{experience.intro}</p>
        <span className="castle-intro__count">3 WORLDS · ONE DEVELOPER JOURNEY</span>
      </div>
      <div className="castle-timeline">
        {experience.castles.map((castle, index) => {
          const Guide = guides[index] ?? Castle;
          const isOpen = opened === castle.number;
          return (
            <article className={`castle-card castle-card--${index + 1} ${isOpen ? "is-open" : ""}`} key={castle.number}>
              <div className="castle-card__tower" aria-hidden="true">
                <div className="castle-card__flag">✦</div><div className="castle-card__roof" />
                <div className="castle-card__body"><span /><span /><span /></div><div className="castle-card__base" />
              </div>
              <div className="castle-card__content">
                <button className="castle-card__toggle" type="button" onClick={() => setOpened(isOpen ? "" : castle.number)} aria-expanded={isOpen}>
                  <span className="castle-card__number">{castle.number}</span><span className="castle-card__period">{castle.period}</span><ChevronDown className="castle-card__chevron" size={18} />
                </button>
                <h3>{castle.role}</h3><h4>{castle.company} <span>· {castle.location}</span></h4>
                <p className="castle-card__story">{castle.story}</p>
                {isOpen && <div className="castle-card__details">
                  <div className="castle-guide"><div className="castle-guide__avatar"><Guide size={22} /></div><div><span>YOUR CASTLE GUIDE</span><p>{castle.guide}</p></div></div>
                  <div className="castle-achievements"><span className="castle-achievements__title">QUESTS COMPLETED / SKILLS UNLOCKED</span>
                    {castle.achievements.map((item) => <div key={item}><CheckCircle2 size={15} />{item}</div>)}
                  </div>
                </div>}
                {!isOpen && <span className="castle-card__hint">OPEN CASTLE TO EXPLORE QUESTS ↗</span>}
              </div>
            </article>
          );
        })}
      </div>
      <p className="interaction-hint">TAP EACH CASTLE TO MEET ITS GUIDE AND DISCOVER THE JOURNEY</p>
    </div>
  );
}
