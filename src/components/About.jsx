import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about__inner">
        <Reveal>
          <p className="eyebrow">Sobre</p>
          <p className="about__text">
            Sou formado em Análise e Desenvolvimento de Sistemas e estou terminando Engenharia
            de Software. Gosto de aprender testando coisas na prática, foi assim que construí os
            projetos que estão aqui em cima. Curto trabalhar com desenvolvimento de aplicações e
            integração com backend, principalmente quando envolve resolver um problema real.
            Estou buscando minha primeira oportunidade como desenvolvedor, com vontade de
            aprender e crescer em time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
