import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./page.scss";

export default function Contact() {
  return (
    <main>
      <div className="contact-container">
        <section className="contact-info">
          <h3>Entre em Contato</h3>
          <div className="icons-container">
            {/* Link para WhatsApp e QR Code lado a lado */}
            <div className="icon-whatsapp-container">
              <a
                href="https://wa.me/5527997293744" // Substitua pelo seu número de WhatsApp no formato correto
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </a>
              {/* Tornando o QR Code clicável */}
              <a
                href="https://wa.me/5527997293744" // Mesma URL do WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="qr-link"
              >
                <div className="qr-code">
                  <Image
                    src="/qr-code.png"
                    alt="QR Code do WhatsApp"
                    width={100}
                    height={100}
                  />
                </div>
              </a>
            </div>

            {/* Link para o Instagram */}
            <div className="instagram-container">
              <a
                href="https://www.instagram.com/_lucasbaldow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <span className="instagram-text">_lucasbaldow</span>
              </a>
            </div>

            {/* Link para o E-mail */}
            <div className="email-container">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span className="email-text">lucasbaldow@gmail.com</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
