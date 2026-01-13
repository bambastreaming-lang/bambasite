
import React from 'react';

const Team: React.FC = () => {
  const teamMembers = [
    { 
      name: "JULIÁN BARKI", 
      role: "CONDUCTOR", 
      // Opción 1: Imagen local (coloca la foto en public/images/team/julian-barki.jpg)
      img: "/images/team/julian-barki.jpg",
      // Opción 2: Desde GitHub (descomenta la línea de abajo y comenta la de arriba)
      // img: "https://raw.githubusercontent.com/BambaStreaming/assets/main/julian-barki.jpg",
      instagram: "https://www.instagram.com/julibarki/"
    },
    { 
      name: "SEBASTIÁN", 
      role: "CO-CONDUCTOR", 
      // Coloca la foto en: public/images/team/sebastian.jpg
      img: "/images/team/sebastian.jpg",
      instagram: "https://www.instagram.com/grajess/" 
    },
    { 
      name: "ZALMI", 
      role: "CO-CONDUCTOR", 
      // Coloca la foto en: public/images/team/zalmi.jpg
      img: "/images/team/zalmi.jpg",
      instagram: "https://www.instagram.com/rabinorunner/"
    },
    { 
      name: "SHLOMO", 
      role: "CO-CONDUCTOR", 
      // Coloca la foto en: public/images/team/shlomo.jpg
      img: "/images/team/shlomo.jpg",
      instagram: "https://www.instagram.com/shlomolevy770/"
    },
    { 
      name: "PRISCILA", 
      role: "CO-CONDUCTORA", 
      // Coloca la foto en: public/images/team/priscila.jpg
      img: "/images/team/priscila.jpg",
      instagram: "https://www.instagram.com/pri.chab/"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="mb-12 sm:mb-16 md:mb-24">
        <span className="text-bamba-blue font-black tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 block">EL EQUIPO</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black-bamba text-black leading-none uppercase italic tracking-tighter">
          NUESTROS <span className="text-bamba-blue">PROTAGONISTAS</span>
        </h2>
      </div>

      {/* Team Grid - Todos al mismo nivel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {teamMembers.map((person, i) => (
          <div key={i} className="group cursor-pointer">
            <a href={person.instagram} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-gray-50 border border-transparent group-hover:border-bamba-yellow transition-all duration-500 shadow-sm group-hover:shadow-2xl">
                <img 
                  src={person.img} 
                  alt={`${person.name} - ${person.role} de Bamba Streaming`} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=400&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamba-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                   <div className="flex items-center gap-2 text-white text-[9px] font-black tracking-widest uppercase mb-2">
                     <i className="fab fa-instagram text-base"></i>
                     <span>Seguir</span>
                   </div>
                </div>
              </div>
            </a>
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-black-bamba text-black mb-1 uppercase tracking-tighter">{person.name}</h4>
              <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {person.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
