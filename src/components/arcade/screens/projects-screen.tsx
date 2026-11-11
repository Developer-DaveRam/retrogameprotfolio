"use client";

import { useState } from "react";
import { ArrowUpRight, Braces, Monitor, Rocket, X, FlaskConical, Microscope } from "lucide-react";
import { projects } from "@/data/portfolio";

const symbols = [Braces, Monitor, Rocket, FlaskConical, Microscope, Monitor];

export function ProjectsScreen() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeProject = projects.find((project) => project.id === selected);
  return (
    <div className="level-content project-laboratory">
      <div className="scientist-brief">
        <div className="scientist-brief__portrait"><FlaskConical size={30} /><span>DR. BYTE</span></div>
        <div><span className="detail-panel__eyebrow">LAB REPORT / CHIEF PROJECT SCIENTIST</span>
          <h3>"Welcome to my invention lab."</h3>
          <p>Each project is an experiment: a problem to understand, a system to design and a useful result to deliver. Open a research file to inspect the build.</p>
        </div>
      </div>
      <div className="projects-grid projects-grid--interactive">
        {projects.map((project, index) => {
          const Icon = symbols[index % symbols.length];
          return <button className={`project-card project-card--${project.accent}`} key={project.id} onClick={() => setSelected(project.id)} type="button">
            <div className="project-art"><div className="project-art-grid" /><span className="project-number">RESEARCH {project.id}</span><div className="project-symbol"><Icon /></div><span className="project-art-label">{project.type}</span></div>
            <div className="project-info"><div className="project-title-row"><h3>{project.title}</h3><ArrowUpRight size={18} /></div><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-open-hint">OPEN SCIENTIST'S CASE FILE ↗</span></div>
          </button>;
        })}
      </div>
      {activeProject && <div className="project-modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
        <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
          <button className="project-modal__close" onClick={() => setSelected(null)} aria-label="Close project details" type="button"><X size={18} /></button>
          <span className="detail-panel__eyebrow">DR. BYTE'S LAB NOTES / FILE {activeProject.id}</span>
          <h3 id="project-modal-title">{activeProject.title}</h3><p>{activeProject.description}</p>
          <div className="case-study-block"><span>01 / THE PROBLEM</span><p>{activeProject.challenge}</p></div>
          <div className="case-study-block"><span>02 / THE EXPERIMENT</span><p>{activeProject.approach}</p></div>
          <div className="case-study-block"><span>03 / THE RESULT</span><p>{activeProject.outcome}</p></div>
          <div className="tag-list">{activeProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <p className="scientist-quote">"Good engineering is curiosity turned into something people can use." — DR. BYTE</p>
        </section>
      </div>}
      <p className="interaction-hint">OPEN A RESEARCH FILE TO READ THE CHALLENGE, EXPERIMENT AND RESULT</p>
    </div>
  );
}
