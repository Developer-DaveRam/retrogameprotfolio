"use client";

import { useState } from "react";
import { CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { experience } from "@/data/portfolio";

export function ExperienceScreen() {
  const [opened, setOpened] = useState(2);
  const castle = experience.castles[opened];
  return (
    <div className="level-content castle-world">
      <div className="castle-world__intro"><Sparkles size={15}/><p>Three chapters. Three strongholds. Follow the road through my developer journey.</p></div>
      <div className="castle-landscape" aria-label="Choose an experience castle">
        <div className="castle-moon"/><div className="castle-mountains castle-mountains--back"/><div className="castle-mountains castle-mountains--front"/>
        <div className="castle-road"/>
        {experience.castles.map((item,index)=><button key={item.number} type="button" onClick={()=>setOpened(index)} aria-pressed={opened===index} className={`landmark-castle landmark-castle--${index+1} ${opened===index?"is-selected":""}`}>
          <span className="landmark-castle__label">{item.number}</span><span className="landmark-castle__structure"><i/><i/><i/><b/></span><span className="landmark-castle__company">{item.company}</span><span className="landmark-castle__prompt">{opened===index?"SELECTED":"ENTER CASTLE ↗"}</span>
        </button>)}
        <div className="castle-landscape__caption">THE KINGDOM OF EXPERIENCE / SELECT A CASTLE TO TRAVEL THERE</div>
      </div>
      <article className="castle-story-panel">
        <div className="castle-story-panel__heading"><span>{castle.number} / {castle.period}</span><span className="castle-story-panel__seal">✦</span></div>
        <h3>{castle.role}</h3><h4>{castle.company} · {castle.location}</h4>
        <p className="castle-story-panel__story">{castle.story}</p>
        <div className="castle-guide castle-guide--character">
          <div className="castle-guide__avatar"><span className="guide-person">♟</span></div>
          <div><span>CASTLE KEEPER'S STORY</span><p>{castle.guide}</p></div>
        </div>
        <div className="castle-achievements"><span className="castle-achievements__title">QUESTS COMPLETED / SKILLS UNLOCKED</span>
          {castle.achievements.map((item)=><div key={item}><CheckCircle2 size={15}/>{item}</div>)}
        </div>
      </article>
      <div className="castle-world__controls">{experience.castles.map((item,index)=><button key={item.number} type="button" className={opened===index?"is-active":""} onClick={()=>setOpened(index)}>{String(index+1).padStart(2,"0")} <ChevronRight size={13}/> {item.company}</button>)}</div>
      <p className="interaction-hint">CLICK A CASTLE IN THE DISTANCE TO TRAVEL TO THAT CHAPTER</p>
    </div>
  );
}
