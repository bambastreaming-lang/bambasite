
import React from 'react';

const HowToWatch: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "SUSCRIBITE",
      description: "Entrá a nuestro canal de YouTube y hacé clic en SUSCRIBIRSE",
      icon: "fab fa-youtube",
      color: "bg-red-500"
    },
    {
      number: "02",
      title: "ACTIVÁ LA CAMPANITA",
      description: "Hacé clic en la campanita 🔔 para recibir notificaciones de cada nuevo episodio",
      icon: "fas fa-bell",
      color: "bg-bamba-yellow"
    },
    {
      number: "03",
      title: "MARTES 20:30 HS",
      description: "Todos los martes a las 20:30 hs (ARG) estrenamos nuevo contenido",
      icon: "fas fa-calendar-alt",
      color: "bg-bamba-blue"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12 sm:mb-16 md:mb-20">
        <span className="text-bamba-blue font-black tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-4 sm:mb-6 block">CÓMO VER</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black-bamba text-black mb-4 sm:mb-6 leading-none uppercase italic tracking-tighter">
          NO TE PIERDAS <span className="text-bamba-yellow">NINGÚN EPISODIO</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-bold max-w-2xl mx-auto">
          Seguí estos pasos simples para estar siempre al día con Bamba Streaming
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {steps.map((step, i) => (
          <div 
            key={i} 
            className="reveal brutal-shadow bg-white border-2 border-black p-6 sm:p-8 md:p-10 relative transform hover:rotate-1 transition-all duration-300"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {/* Number Badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-black text-white flex items-center justify-center font-black-bamba text-xl sm:text-2xl border-2 border-black">
              {step.number}
            </div>

            {/* Icon */}
            <div className={`${step.color} w-16 h-16 sm:w-20 sm:h-20 border-2 border-black flex items-center justify-center text-white text-2xl sm:text-3xl mb-6 sm:mb-8 rotate-3`}>
              <i className={step.icon}></i>
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black-bamba mb-3 sm:mb-4 text-black tracking-tighter uppercase">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base font-bold leading-snug">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* YouTube CTA */}
      <div className="text-center">
        <a
          href="https://www.youtube.com/@BambaStreaming"
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-shadow inline-flex items-center gap-3 sm:gap-4 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 font-black uppercase tracking-tighter text-base sm:text-lg md:text-xl border-2 border-black transition-all hover:scale-105"
        >
          <i className="fab fa-youtube text-2xl sm:text-3xl"></i>
          <span>IR AL CANAL DE YOUTUBE</span>
        </a>
      </div>

    </div>
  );
};

export default HowToWatch;
