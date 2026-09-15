import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechCarousel from "./components/TechCarousel";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechCarousel />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
