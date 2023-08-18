import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen bg-[#f3f3f3] snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#000000]/80'>
      <Head>
        <title>Josh Ivan</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3242/3242257.png" />
      </Head>

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

        <Link href="#hero">
          <footer className='relative bottom-12 w-full cursor-pointer h-0'> 
            <div className='flex justify-center items-center animate-bounce'>
              <img 
                className='h-8 w-8 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src="https://www.pngfind.com/pngs/m/16-161912_up-arrow-transparent-images-double-up-arrow-icon.png" 
                alt="" 
              />
            </div>
          </footer>
        </Link>
      </div>
    </div>
  )
}
