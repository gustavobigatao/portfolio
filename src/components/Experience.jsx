import { experience } from "../data/experience";
import Reveal from "./Reveal";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experiencia" className="section section--tight experience">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Experiência</p>

          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className="experience__item">
              <div className="experience__head">
                <h3 className="experience__role">
                  {job.role} <span className="experience__company">· {job.company}</span>
                </h3>
                <span className="experience__period">{job.period}</span>
              </div>
              <p className="experience__description">{job.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
