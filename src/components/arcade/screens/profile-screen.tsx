import { Terminal, GraduationCap, MapPin } from "lucide-react";

export function ProfileScreen() {
  return (
    <div className="level-content">
      <div className="about-grid">
        <div className="profile-card kingdom-profile">
          <div className="profile-card-top"><span>PLAYER CARD / KINGDOM CITIZEN</span><span className="online-pill">● ONLINE</span></div>
          <div className="avatar-frame"><div className="avatar-pixel"><span>DA</span></div><div className="avatar-spark spark-one">✦</div><div className="avatar-spark spark-two">✧</div><div className="profile-crown">♛</div></div>
          <h3>DAVERAM A</h3><p>FULL STACK DEVELOPER</p>
          <div className="profile-stats"><span>CLASS <b>ENGINEER</b></span><span>STATUS <b>BUILDING</b></span></div>
          <div className="profile-facts"><span><MapPin size={13}/> COIMBATORE, INDIA</span><span><GraduationCap size={13}/> B.E. COMPUTER SCIENCE</span></div>
        </div>
        <div className="about-copy">
          <p className="terminal-label"><Terminal size={15} /> PLAYER_BIO.TXT</p>
          <h3>Curious mind.<br /><span>Builder mindset.</span></h3>
          <p>I&apos;m a Full Stack Developer focused on building scalable web applications with React, Node.js and TypeScript. I enjoy solving real-world problems — from designing clean APIs and database structures to crafting responsive user interfaces.</p>
          <p>Since joining Skyraan Technologies, I&apos;ve worked across SaaS platforms, multi-tenant systems, background processing and production deployments. I care about writing maintainable code and understanding how the whole system works, not just one screen.</p>
          <p className="profile-education">EDUCATION / PPG INSTITUTE OF TECHNOLOGY · BE COMPUTER SCIENCE · 2021–2025</p>
          <div className="stat-row"><div><strong>1,000<span>+</span></strong><small>APIs BUILT*</small></div><div><strong>08</strong><small>APPLICATIONS*</small></div><div><strong>16</strong><small>SKILL CORES</small></div></div>
          <small className="profile-stat-note">*Portfolio figures shown in the original project content.</small>
        </div>
      </div>
    </div>
  );
}
