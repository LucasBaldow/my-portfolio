"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons"; // Ícone de programação

import "./header.scss";

const routes: { [key: string]: string } = {
  "Sobre mim": "/about",
  Skills: "/skills",
  Projetos: "/projects",
  Contato: "/contact",
};

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link href="/" className="header__title">
          <FontAwesomeIcon icon={faLaptopCode} className="header__icon" />
          Lucas
        </Link>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {Object.keys(routes).map((item) => (
            <li key={item} className="header__nav-item">
              <Link href={routes[item]} className="header__nav-link">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
