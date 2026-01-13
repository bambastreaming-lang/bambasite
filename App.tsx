
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import CTASection from './components/CTASection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

const App: React.FC = () => {
  useReveal();
  
  return (
    <div className="min-h-screen flex flex-col selection:bg-bamba-yellow selection:text-black">
      <Header />
      <main>
        {/* Hero Section - Deep Blue */}
        <section id="inicio" className="bg-bamba-blue text-white overflow-hidden">
          <Hero />
        </section>

        {/* Marquee - High Contrast */}
        <div className="bg-bamba-yellow py-6 overflow-hidden border-y-4 border-black" aria-hidden="true">
          <div className="marquee font-black-bamba text-xl tracking-[0.2em] text-black uppercase">
            BAMBA STREAMING • JUDAISMO REAL • SIN FILTROS • BAMBA STREAMING • JUDAISMO REAL • SIN FILTROS • 
            BAMBA STREAMING • JUDAISMO REAL • SIN FILTROS • BAMBA STREAMING • JUDAISMO REAL • SIN FILTROS • 
          </div>
        </div>

        {/* Sobre Nosotros - White background with yellow accents */}
        <section id="sobre-nosotros" className="py-32 bg-white" aria-labelledby="sobre-nosotros-heading">
          <About />
        </section>

        {/* Sponsors Section - New */}
        <section id="sponsors" className="py-24 bg-gray-50 border-y border-black/5" aria-labelledby="sponsors-heading">
          <Sponsors />
        </section>

        {/* Impacto - Vibrant Yellow Section */}
        <section id="impacto" className="py-32 bg-bamba-yellow border-y-4 border-black" aria-labelledby="impacto-heading">
          <Stats />
        </section>

        {/* Equipo - Off White / Light Gray with Blue Accents */}
        <section id="equipo" className="py-32 bg-[#f8f9fa]" aria-labelledby="equipo-heading">
          <Team />
        </section>

        {/* La Tribuna - Solid Deep Blue */}
        <section id="tribuna" className="bg-bamba-blue py-32 text-white border-y-4 border-black" aria-labelledby="tribuna-heading">
          <CTASection />
        </section>

        {/* Contacto - High Energy Yellow */}
        <section id="contacto" className="py-32 bg-white" aria-labelledby="contacto-heading">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
