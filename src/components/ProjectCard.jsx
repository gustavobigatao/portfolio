import Reveal from "./Reveal";
import "./ProjectCard.css";

function Media({ project }) {
  // Enquanto image/video não forem definidos em src/data/projects.js, exibe um placeholder discreto.
  if (project.video) {
    return (
      <video
        className="project-media__el project-media__el--video"
        controls
        autoPlay
        muted
        loop
        playsInline
        poster={project.image || undefined}
      >
        <source src={project.video} />
      </video>
    );
  }

  if (project.image) {
    return (
      <img className="project-media__el" src={project.image} alt={project.name} />
    );
  }

  return (
    <div className="project-media__placeholder" aria-hidden="true">
      <span>mídia do projeto</span>
    </div>
  );
}

export default function ProjectCard({ project, index, featured = false }) {
  return (
    <Reveal
      as="article"
      className={`project ${featured ? "project--featured" : ""}`}
      style={{ "--project-accent": project.accent }}
    >
      <div className="project__head">
        <span className="project__index">{String(index).padStart(2, "0")}</span>
        <h3 className="project__title">
          {project.name}
          {project.collaborative && <span className="project__flag">Colaborativo</span>}
        </h3>
      </div>

      <div className="project__body">
        <div className="project__text">
          <p className="project__description">{project.description}</p>
          <p className="project__tech">{project.technologies.join(" · ")}</p>

          <div className="project__links">
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link link-arrow">
                Ver projeto →
              </a>
            ) : (
              <span className="project__pending">Ver projeto (em breve)</span>
            )}
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link link-arrow">
                GitHub →
              </a>
            ) : (
              <span className="project__pending">
                {project.githubPrivate ? "Repositório privado" : "GitHub (em breve)"}
              </span>
            )}
          </div>
        </div>

        <div className="project-media">
          <Media project={project} />
        </div>
      </div>
    </Reveal>
  );
}
