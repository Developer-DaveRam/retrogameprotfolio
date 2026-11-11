"use client";

import { useMemo, useState } from "react";
import { Braces, Code2, Database, Server, Wrench, Zap, Radio, Sparkles, Satellite } from "lucide-react";
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
      <div className="ufo-command">
        <div className="ufo-command__sky">
          <div className="ufo-beam-large" />
          <div className="ufo-craft"><div className="ufo-craft__dome"><span className="alien-head">◕‿◕</span></div><div className="ufo-craft__saucer"><i/><i/><i/><i/><i/></div><div className="ufo-craft__rim"/></div>
          <div className="ufo-command__stars">✦　　 ·　　✧　　　·　 ✦</div>
        </div>
        <div className="ufo-command__message">
          <span><Radio size={13}/> LIVE TRANSMISSION / GALAXY-07</span>
          <h3>{activeSkill ? `Scanning: ${activeSkill.name}` : "Earthling! Welcome aboard."}</h3>
          <p>{activeSkill ? `“Ah, ${activeSkill.name}! I detected this power core in your developer inventory. ${activeSkill.note} That's how you turn ideas into working technology!”` : "“I travelled across galaxies to inspect your developer power cores. Choose any glowing skill below. My scanner will reveal what it does and how you use it. Take a look, human!”"}</p>
          <small>— ZOR-BIT / ALIEN TECHNOLOGY GUIDE</small>
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
            <div className="skill-card-bottom"><span className="skill-level"><i /> {skill.level}</span><span>SCAN ↗</span></div>
          </button>;
        })}
      </div>
      {activeSkill && <aside className="detail-panel alien-detail"><span className="detail-panel__eyebrow"><Satellite size={13}/> ZOR-BIT'S SCAN / {activeSkill.category}</span><h3>{activeSkill.name}</h3><p>{activeSkill.note}</p><span className="detail-panel__status">● {activeSkill.level} — POWER CORE ACTIVE</span></aside>}
      <p className="interaction-hint">CHOOSE A POWER CORE · ZOR-BIT WILL EXPLAIN IT FROM THE UFO</p>
    </div>
  );
}
