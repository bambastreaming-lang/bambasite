
import React from 'react';

const About: React.FC = () => {
  const points = [
    { title: "CONTENIDO REAL", desc: "Streaming que desafía lo convencional, fusionando tradición con la cultura digital.", icon: "fa-bolt-lightning", color: "bg-blue-100" },
    { title: "DIÁLOGO ABIERTO", desc: "Hablamos de lo que otros callan con profundidad y honestidad.", icon: "fa-comments", color: "bg-yellow-100" },
    { title: "ORGULLO JUDÍO", desc: "Una identidad vibrante, joven y segura proyectada al mundo entero.", icon: "fa-hands-clapping", color: "bg-green-100" },
    { title: "VOZ JOVEN", desc: "Conectando comunidades de habla hispana en una sola gran conversación.", icon: "fa-microphone-lines", color: "bg-purple-100" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-4xl mb-24 reveal">
        <span className="text-bamba-blue font-black tracking-[0.4em] text-xs uppercase mb-6 block">MANIFIESTO BAMBA</span>
        <h2 className="text-6xl md:text-8xl font-black-bamba text-black mb-8 leading-[0.8] uppercase italic tracking-tighter">
          EL RUIDO QUE<br/><span className="text-bamba-blue">NECESITAMOS</span>
        </h2>
        <p className="text-2xl text-gray-400 font-bold max-w-2xl leading-tight">
          No somos solo un programa. Somos la respuesta a un vacío digital. Autenticidad cruda desde una perspectiva judía moderna.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((point, i) => (
          <div key={i} className={`reveal brutal-shadow p-10 bg-white border-2 border-black h-full flex flex-col`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className={`w-16 h-16 ${point.color} border-2 border-black flex items-center justify-center text-black text-2xl mb-8 -mt-14 rotate-3`}>
               <i className={`fas ${point.icon}`}></i>
            </div>
            <h3 className="text-2xl font-black-bamba mb-4 text-black tracking-tighter uppercase">{point.title}</h3>
            <p className="text-gray-600 text-base font-bold leading-snug">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
