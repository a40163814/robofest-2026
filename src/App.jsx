import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Events from "./components/Events.jsx";
import Experience from "./components/Experience.jsx";
import Registration from "./components/Registration.jsx";
import Footer from "./components/Footer.jsx";
import { useReveal } from "./hooks/useReveal.js";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Events />
        <Experience />
        <Registration />
      </main>
      <Footer />
    </>
  );
}
