"use client";

import { useState } from "react";
import { ArrowUpRight, Braces, Monitor, Rocket, X, FlaskConical, Microscope, Beaker } from "lucide-react";
import { projects } from "@/data/portfolio";

const symbols = [Braces, Monitor, Rocket, FlaskConical, Microscope, Monitor];

export function ProjectsScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.id === selected);
  return (
    <div className="level-content project-laboratory">
      <div className="lab-scene">
        <div className="lab-scene__window"><span>✦</span><span>✧</span><span>·</span></div>
        <div className="lab-scene__bench"><i/><i/><i/></div>
        <div className="scientist-character"><div className="scientist-character__hair"/><div className="scientist-character__head"><i/><i/><b/></div><div className="scientist-character__coat"><span>DR</span></div><div className="scientist-character__arm"/></div>
        <div className="scientist-speech"><span>DR. BYTE / CHIEF SCIENTIST</span><p>{activeProject ? `“Excellent choice! Let me walk you through ${activeProject.title}. ${activeProject.challenge} Here's how the experiment was approached.”` : "“Welcome, explorer! I'm Dr. Byte. Every project here began with a problem. Open a research file and I'll explain the challenge, the experiment and what we built.”"}</p></div>
        <div className="lab-scene__title"><FlaskConical size={14}/> BYTE'S INVENTION LAB</div>
      </div>
      <div className="projects-grid projects-grid--interactive">
        {projects.map((project,index)=>{
          const Icon=symbols[index%symbols.length];
          return <button className={`project-card project-card--${project.accent} ${selected===project.id?"project-card--chosen":""}`} key={project.id} onClick={()=>setSelected(project.id)} type="button">
            <div className="project-art"><div className="project-art-grid"/><span className="project-number">RESEARCH {project.id}</span><div className="project-symbol"><Icon/></div><span className="project-art-label">{project.type}</span></div>
            <div className="project-info"><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={18}/></div><p>{project.description}</p><div className="tag-list">{project.stack.map((tag)=><span key={tag}>{tag}</span>)}</div><span className="project-open-hint">ASK DR. BYTE ABOUT THIS PROJECT ↗</span></div>
          </button>;
        })}
      </div>
      {activeProject && <div className="project-modal-backdrop" role="presentation" onClick={()=>setSelected(null)}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event)=>event.stopPropagation()}>
          <button className="project-modal__close" onClick={()=>setSelected(null)} aria-label="Close project details" type="button"><X size={18}/></button>
          <span className="detail-panel__eyebrow">DR. BYTE'S LAB NOTES / FILE {activeProject.id}</span>
          <h3 id="project-modal-title">{activeProject.title}</h3><p>{activeProject.description}</p>
          <div className="case-study-block"><span>01 / THE PROBLEM</span><p>{activeProject.challenge}</p></div>
          <div className="case-study-block"><span>02 / THE EXPERIMENT</span><p>{activeProject.approach}</p></div>
          <div className="case-study-block"><span>03 / THE RESULT</span><p>{activeProject.outcome}</p></div>
          <div className="tag-list">{activeProject.stack.map((tag)=><span key={tag}>{tag}</span>)}</div>
          <p className="scientist-quote">“That concludes the experiment report. On to the next invention!” — DR. BYTE</p>
        </section>
      </div>}
      <p className="interaction-hint">SELECT A PROJECT · DR. BYTE WILL PRESENT THE CASE FILE</p>
    </div>
  );
}
