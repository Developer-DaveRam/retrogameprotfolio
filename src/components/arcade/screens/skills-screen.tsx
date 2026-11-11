"use client";

import { useMemo, useState } from "react";
import { Braces, Code2, Database, Server, Wrench, Zap, Radio, Sparkles } from "lucide-react";
import { skills } from "@/data/portfolio";

const filters = ["ALL", "LANGUAGE", "FRONTEND", "BACKEND", "DATABASE", "SYSTEMS", "TOOLS"];
const icons = [Braces, Code2, Server, Database, Wrench, Zap];

export function SkillsScreen() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<string | null>(null);
  const visibleSkills = useMemo(() => skills.filter((skill) => filter === "ALL" || skill.category === filter), [filter]);
  const activeSkill = skills.find((skill) => skill.name === selected);
  return (
    <div className="level-content alien-lab">
      <div className="alien-transmission">
        <div className="alien-transmission__ufo"><span /><span /><span /><Radio size={19} /></div>
        <div className="alien-transmission__copy">
          <span><Sparkles size={13} /> INCOMING TRANSMISSION / GALAXY-07</span>
          <h3>Greetings, Earth developer!</h3>
          <p>"I scanned your technology inventory. These are the power cores you use to build applications, connect systems and solve real-world problems. Select any core and I will decode it for you."</p>
          <small>— ZOR-BIT, YOUR FRIENDLY SKILLS ALIEN</small>
        </div>
      </div>
      <div className="filter-bar" aria-label="Filter skills">
        {filters.map((item) => <button key={item} className={filter === item ? "filter-chip is-active" : "filter-chip"} onClick={() => { setFilter(item); setSelected(null); }} type="button">{item}</button>)}
      </div>
      <div className="skills-grid skills-grid--interactive">
        {visibleSkills.map((skill, index) => {
          const Icon = icons[index % icons.length];
          return <button className={selected === skill.name ? "skill-card skill-card--selected" : "skill-card"} key={skill.name} onClick={() => setSelected(selected === skill.name ? null : skill.name)} type="button" aria-pressed={selected === skill.name}>
            <div className="skill-card-top"><span>{skill.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="skill-icon"><Icon /></div><h3>{skill.name}</h3>
            <div className="skill-card-bottom"><span className="skill-level"><i /> {skill.level}</span><span>DECODE ↗</span></div>
          </button>;
        })}
      </div>
      {activeSkill && <aside className="detail-panel alien-detail"><span className="detail-panel__eyebrow">ZOR-BIT'S SCAN / {activeSkill.category}</span><h3>{activeSkill.name}</h3><p>{activeSkill.note}</p><span className="detail-panel__status">● {activeSkill.level} — POWER CORE ACTIVE</span></aside>}
      <p className="interaction-hint">SELECT A POWER CORE · FILTER BY TECHNOLOGY · ASK THE ALIEN TO DECODE IT</p>
    </div>
  );
}
