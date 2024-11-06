import React from "react";
import "./page.scss";

const projects = [
  {
    id: 1,
    title: "HunterHub",
    desktopImage: "/hunterdesktop.png",
    mobileImage: "/huntermobile.png",
    link: "https://www.hunterhub.com.br/",
    description:
      "Extensão de navegador para monitoramento de preços e análise de dados, desenvolvida com Next JS",
  },
  {
    id: 2,
    title: "Armor-Bot",
    desktopImage: "/armordesktop.png",
    mobileImage: "/armormobile.png",
    link: "https://www.armor-bot.com/",
    description:
      "Aplicativo desktop de automação, utilizando React e TypeScript",
  },
];

const Projects: React.FC = () => {
  return (
    <main>
      <section className="projects-section">
        <h2 className="projects-title">Meus Projetos</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="project-images">
                <img
                  src={project.desktopImage}
                  alt=""
                  className="project-image desktop"
                />
                <img
                  src={project.mobileImage}
                  alt=""
                  className="project-image mobile"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
