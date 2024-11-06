import React from "react";
import "./page.scss";

const About: React.FC = () => {
  return (
    <main>
      <div className="about-container">
        <section className="about-section">
          <div className="text-container">
            <h2>Sobre Mim</h2>
            <p>
              Sou Técnico em Mecânica e estudante de Engenharia Mecânica, com
              paixão por tecnologia e programação. Trabalhei com startups em um
              programa do SEBRAE, onde adquiri experiência no dia a dia do
              empreendedorismo e em soluções práticas. Além do profissional, sou
              fã de praia, trilhas e tudo que envolve a natureza. Estou animado
              com a chance de ajudar sua empresa a crescer! 😊
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
