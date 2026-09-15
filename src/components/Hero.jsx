import { siteConfig } from "../data/siteConfig";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <img
          src="/profile-photo.jpg"
          alt={siteConfig.name}
          className="hero__photo"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
        />

        <div>
          <h1 className="hero__name">{siteConfig.name}</h1>
          <p className="hero__role">Desenvolvedor de Software</p>
          <p className="hero__description">
            Formado em Análise e Desenvolvimento de Sistemas e no último ano de Engenharia de
            Software. Gosto de aprender colocando a mão no código e construindo projetos que
            realmente funcionem.
          </p>

          <div className="hero__actions">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn
            </a>
            {siteConfig.cv && (
              <a href={siteConfig.cv} target="_blank" rel="noopener noreferrer" className="link">
                CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
