"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Orbit, RadioTower } from "lucide-react";
import { experience } from "@/data/portfolio";

export function ExperienceScreen() {
  const [opened, setOpened] = useState(2);
  const mission = experience.missions[opened];

  return (
    <div className="level-content mission-control">
      <div className="mission-intro">
        <span><Orbit size={16}/> CAREER FLIGHT PATH</span>
        <p>Three real-world missions. Each one added a new layer to how I design, build and ship software.</p>
      </div>

      <div className="mission-map" aria-label="Select a career mission">
        <div className="mission-map__orbit mission-map__orbit--one"/>
        <div className="mission-map__orbit mission-map__orbit--two"/>
        <div className="mission-map__planet mission-map__planet--large"/>
        <div className="mission-map__planet mission-map__planet--small"/>
        <div className="mission-map__route"/>
        <div className="mission-map__label mission-map__label--top">CAREER CONSTELLATION / 2024 — NOW</div>
        {experience.missions.map((item, index) => (
          <button
            key={item.number}
            type="button"
            onClick={() => setOpened(index)}
            aria-pressed={opened === index}
            className={`mission-node mission-node--${index + 1} ${opened === index ? "is-selected" : ""}`}
          >
            <span className="mission-node__signal"><i/><i/><i/></span>
            <span className="mission-node__core"><RadioTower size={index === 2 ? 27 : 21}/></span>
            <span className="mission-node__number">{item.number}</span>
            <strong>{item.company}</strong>
            <small>{opened === index ? "SIGNAL LOCKED" : "OPEN MISSION ↗"}</small>
          </button>
        ))}
        <div className="mission-map__footer">SELECT A SIGNAL NODE TO OPEN THE MISSION LOG</div>
      </div>

      <article className="mission-brief">
        <div className="mission-brief__top">
          <span>{mission.number} / {mission.period}</span>
          <span className="mission-brief__status"><i/> MISSION DECLASSIFIED</span>
        </div>
        <div className="mission-brief__heading">
          <div><span>ROLE / {mission.location}</span><h3>{mission.role}</h3><h4>{mission.company}</h4></div>
          <div className="mission-brief__stamp"><Orbit size={25}/></div>
        </div>
        <p className="mission-brief__story">{mission.story}</p>
        <div className="mission-brief__divider"><span>WHAT I WORKED ON</span><span>FIELD NOTES / {mission.achievements.length}</span></div>
        <div className="mission-brief__tasks">
          {mission.achievements.map((item) => <div key={item}><CheckCircle2 size={15}/><span>{item}</span></div>)}
        </div>
        <blockquote className="mission-brief__quote">{mission.guide}</blockquote>
      </article>

      <div className="mission-selector">
        {experience.missions.map((item, index) => (
          <button key={item.number} type="button" className={opened === index ? "is-active" : ""} onClick={() => setOpened(index)}>
            <span>{String(index + 1).padStart(2, "0")}</span>{item.company}<ChevronRight size={14}/>
          </button>
        ))}
      </div>
      <p className="interaction-hint">TAP ANY SIGNAL NODE · THE MISSION BRIEF UPDATES IN PLACE</p>
    </div>
  );
}
