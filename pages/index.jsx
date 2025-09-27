import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import About from "../component/About";
import Portfolio from "../component/Portfolio";
import Skills from "../component/Skills";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative sm:px-6 md:px-8 lg:px-16 overflow-hidden bg-black text-white">

      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
            "linear-gradient(135deg, #1c1c1c, #4b6cb7, #182848)",
            "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />

      {/* Floating Stars / Sparkles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
          }}
          animate={{
            y: [0, 20, 0],
            x: [0, 10, -10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, repeatType: "loop", delay: i * 0.2 }}
        />
      ))}

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 sm:mt-16 md:mt-20">
        <Hero />
      </section>

      {/* About Section */}
      <section className="relative z-10 sm:mt-20 md:mt-28">
        <About />
      </section>

      {/* Portfolio Section */}
      <section className="relative z-10 sm:mt-20 md:mt-28">
        <Portfolio />
      </section>

      {/* Skills Section */}
      <section className="relative z-10 sm:mt-20 md:mt-28">
        <Skills />
      </section>

      {/* Contact Section */}
      <section className="relative z-10 sm:mt-20 md:mt-28">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="relative z-10 sm:mt-20 md:mt-28">
        <Footer />
      </footer>
    </div>
  );
}
