import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { PixelButton } from "../pixel-button";

export function ContactScreen() {
  return (
    <div className="level-content contact-level final-gate">
      <div className="final-gate__portal"><span>✦</span><span>✧</span><span>✦</span></div>
      <span className="final-gate__eyebrow">LEVEL 05 / THE LAST GATE</span>
      <h3>YOUR NEXT QUEST<br /><span>STARTS HERE.</span></h3>
      <p>You made it through the kingdom, explored the power cores, met the castle guides and visited the invention lab. Have an opportunity, a product idea or a challenging engineering problem? Let&apos;s build the next chapter together.</p>
      <div className="contact-actions">
        <PixelButton href="https://www.linkedin.com/in/daveram-a-a45176265/"><Linkedin size={17} /> CONTACT ME</PixelButton>
        <PixelButton href="https://github.com/Developer-DaveRam" variant="secondary"><Github size={17} /> GITHUB</PixelButton>
        <PixelButton href="https://www.linkedin.com/in/daveram-a-a45176265/" variant="secondary"><Linkedin size={17} /> LINKEDIN</PixelButton>
      </div>
      <p className="contact-note">THE GATE IS OPEN · PLAYER ONE IS READY TO COLLABORATE <ArrowUpRight size={14} /></p>
    </div>
  );
}
