import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import FloatingWhatsApp from "./components/layouts/FloatingWhatsApp";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import About from "./components/sections/About";
import CTA from "./components/sections/CTA";

function App() {
  return (
    <div className="min-h-screen text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
