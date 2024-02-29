import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='h-screen bg-[#f3f3f3]'>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        renderThumbVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              backgroundColor: '#000000',
              borderRadius: '5px',
              width: '50px'
            }}
          />
        )}
      >
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
      </Scrollbars>
    </div>
  )
}

export default App;
