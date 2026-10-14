import { siteConfig } from "../data/siteConfig";
import Reveal from "./Reveal";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact__inner">
        <Reveal>
          <h2 className="section-title">Vamos conversar?</h2>
          <p className="section-subtitle">
            Se quiser trocar uma ideia sobre algum projeto ou sobre tecnologia, é só chamar.
          </p>

          <div className="contact__links">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link">
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${siteConfig.email}`} className="link">
              E-mail
            </a>
          </div>
        </Reveal>
      </div>

      <p className="contact__footer">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </section>
  );
}
