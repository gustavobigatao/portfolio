import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projetos" className="section projects">
      <div className="container">
        <Reveal className="section-heading">
          <p className="eyebrow">Trabalho</p>
          <h2 className="section-title">Projetos</h2>
        </Reveal>

        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} featured={project.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}
