import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Portfolio from "../component/Portfolio"
import Skills from "../component/Skills"
import Contact from "../component/Contact"
import Footer from "../component/Footer"



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
  
    </>
  );
}
