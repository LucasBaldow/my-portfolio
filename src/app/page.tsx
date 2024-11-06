import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importe os ícones que você quer usar
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./page.scss";

export default function Home() {
  return (
    <main>
      <div className="presentation-container">
        <section className="about-me">
          <div className="title-and-icons">
            <h3>Olá, eu sou o Lucas</h3>
            <div className="icons-container">
              {/* Ícone do LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lucas-baldow-8a337827b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </a>

              {/* Ícone do GitHub */}
              <a
                href="https://github.com/LucasBaldow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>

              {/* Ícone do currículo */}
              <a
                href="/CurrículoLucasBaldow.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faFileAlt} />
              </a>
            </div>
          </div>
          <h1>SOFTWARE DEVELOPER</h1>
          <p>
            trabalho na CuboLife, uma startup do ramo da saúde. Estou focado em
            desenvolver aplicações que otimizem processos, seja automatizando
            tarefas repetitivas ou criando ferramentas eficientes.
          </p>
        </section>
        <div className="image-container">
          <Image
            src="/profile.png"
            alt="profile photo"
            width={240}
            height={320}
            priority
          />
        </div>
      </div>
    </main>
  );
}
