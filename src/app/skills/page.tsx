import React from "react";
import { FaJs, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa"; // Exemplos de ícones do Font Awesome
import {
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPython,
} from "react-icons/si"; // Importando ícones de outras tecnologias

import "./page.scss"; // Importe os estilos da página

interface Skill {
  name: string;
  icon: React.ReactNode; // Alterado para usar ReactNode
}

interface SkillsData {
  [key: string]: Skill[];
}

const skillsData: SkillsData = {
  Frontend: [
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Sass", icon: <SiSass /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Python", icon: <SiPython /> },
  ],
  Databases: [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
};

const Skills: React.FC = () => {
  return (
    <main>
      <section className="skills-section">
        {Object.keys(skillsData).map((category: string) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skillsData[category].map((skill: Skill, index: number) => (
                <div key={index} className="skill-card">
                  <span className="skill-icon">{skill.icon}</span>
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Skills;
