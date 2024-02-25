import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <div className='h-screen bg-[#f3f3f3] snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#000000]/80'>

      <div>
        {/* Header */}
          <Header />

        {/* Hero */}
        <section id='hero'>
          <Hero />
        </section>

        {/* About */}
        <section id='about'>
          <About />
        </section>

        <section id='experience'>
          <Experience />
        </section>

        {/* Projects */}
        <section id='projects'>
          <Projects />
        </section>

        {/* Contact */}
        <section id='contact'>
          <Contact />
        </section>

        {/* Footer */}
        <section id='footer'>
          <Footer />
        </section>
      </div>
    </div>
  )
}

export default App
