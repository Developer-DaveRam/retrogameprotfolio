import { levels } from "@/data/portfolio";
import { ProfileScreen } from "./screens/profile-screen";
import { SkillsScreen } from "./screens/skills-screen";
import { ExperienceScreen } from "./screens/experience-screen";
import { ProjectsScreen } from "./screens/projects-screen";
import { ContactScreen } from "./screens/contact-screen";
import { LevelNavigation } from "./level-navigation";

type LevelScreenProps = {
  activeLevel: number;
  onNavigate: (index: number) => void;
  onHome: () => void;
};

const screenComponents = [ProfileScreen, SkillsScreen, ExperienceScreen, ProjectsScreen, ContactScreen];

export function LevelScreen({ activeLevel, onNavigate, onHome }: LevelScreenProps) {
  const level = levels[activeLevel];
  const Screen = screenComponents[activeLevel];
  return (
    <main className="level-screen">
      <div className="level-screen__topline"><span>PLAYER 01 / ADVENTURE MODE</span><span>SELECTED LEVEL: {level.number}</span></div>
      <div className="level-transition" key={activeLevel}>
        <header className="section-heading level-heading">
          <span className="section-index">{level.number} / {level.label}</span>
          <h1>{level.title}<span className="heading-period">.</span></h1>
          <p className="level-subtitle">{activeLevel === 0 ? "A LITTLE ABOUT THE PLAYER BEHIND THE CODE." : activeLevel === 1 ? "THE UFO SCANS AND EXPLAINS EVERY TECHNOLOGY IN MY INVENTORY." : activeLevel === 2 ? "TRAVEL THROUGH THREE CASTLES TO EXPLORE MY PROFESSIONAL JOURNEY." : activeLevel === 3 ? "MEET DR. BYTE AND EXPLORE THE INVENTION LAB." : "LET'S MAKE THE NEXT LEVEL TOGETHER."}</p>
        </header>
        <Screen />
      </div>
      <LevelNavigation activeLevel={activeLevel} onNavigate={onNavigate} onHome={onHome} />
    </main>
  );
}
