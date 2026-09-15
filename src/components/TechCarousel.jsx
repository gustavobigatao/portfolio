import { technologies } from "../data/technologies";
import Reveal from "./Reveal";
import { LOCAL_ICONS } from "./TechIcons";
import "./TechCarousel.css";

function TechIcon({ tech }) {
  const Local = LOCAL_ICONS[tech.icon];
  if (Local) return <Local />;
  return <img src={`https://cdn.simpleicons.org/${tech.icon}`} alt="" width={20} height={20} />;
}

export default function TechCarousel() {
  // Repete a lista várias vezes para o loop ficar contínuo mesmo em telas largas
  // (com só 2 cópias, sobrava um "buraco" em branco em monitores grandes).
  const track = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <section id="tecnologias" className="section section--tight tech">
      <div className="container">
        <Reveal>
          <h2 className="section-title section-title--sm">Tecnologias que uso</h2>
        </Reveal>
      </div>

      <p className="sr-only">
        {technologies
          .map((t) => (t.status === "learning" ? `${t.name} (estudando)` : t.name))
          .join(", ")}
      </p>

      <div className="tech-carousel">
        <ul className="tech-carousel__track" aria-hidden="true">
          {track.map((tech, i) => (
            <li key={`${tech.name}-${i}`} className="tech-carousel__item">
              <TechIcon tech={tech} />
              <span>
                {tech.name}
                {tech.status === "learning" && <em> · estudando</em>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
