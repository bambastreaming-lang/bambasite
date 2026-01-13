
import React from 'react';

const About: React.FC = () => {
  const points = [
    { title: "CONTENIDO REAL", desc: "Streaming que desafía lo convencional, fusionando tradición con la cultura digital.", icon: "fa-bolt-lightning", color: "bg-blue-100" },
    { title: "DIÁLOGO ABIERTO", desc: "Hablamos de lo que otros callan con profundidad y honestidad.", icon: "fa-comments", color: "bg-yellow-100" },
    { title: "ORGULLO JUDÍO", desc: "Una identidad vibrante, joven y segura proyectada al mundo entero.", icon: "fa-hands-clapping", color: "bg-green-100" },
    { title: "VOZ JOVEN", desc: "Conectando comunidades de habla hispana en una sola gran conversación.", icon: "fa-microphone-lines", color: "bg-purple-100" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-4xl mb-12 sm:mb-16 md:mb-24 reveal">
        <span className="text-bamba-blue font-black tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-4 sm:mb-6 block">MANIFIESTO BAMBA</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black-bamba text-black mb-6 sm:mb-8 leading-[0.9] sm:leading-[0.85] md:leading-[0.8] uppercase italic tracking-tighter">
          <span className="block">EL RUIDO QUE</span>
          <span className="block text-bamba-blue">NECESITAMOS</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-400 font-bold max-w-2xl leading-relaxed sm:leading-tight px-2 sm:px-0">
          No somos solo un programa. Somos la respuesta a un vacío digital. Autenticidad cruda desde una perspectiva judía moderna.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {points.map((point, i) => (
          <div key={i} className={`reveal brutal-shadow p-6 sm:p-8 md:p-10 bg-white border-2 border-black h-full flex flex-col`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${point.color} border-2 border-black flex items-center justify-center text-black text-xl sm:text-2xl mb-6 sm:mb-8 -mt-10 sm:-mt-12 md:-mt-14 rotate-3`}>
               <i className={`fas ${point.icon}`}></i>
            </div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-black-bamba mb-3 sm:mb-4 text-black tracking-tighter uppercase">{point.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base font-bold leading-snug">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
