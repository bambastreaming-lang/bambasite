
import React from 'react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: "fab fa-youtube", url: "https://www.youtube.com/@BambaStreaming", color: "hover:bg-red-600" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/bambastreaming/", color: "hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
    { icon: "fab fa-tiktok", url: "https://www.tiktok.com/@bambastreaming", color: "hover:bg-black" },
    { icon: "fab fa-spotify", url: "https://open.spotify.com/show/6vHFrfEwlCA1kIbUUdk9FI?si=fe241d78f2884cca", color: "hover:bg-green-500" }
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-bamba-blue">
      {/* Luces de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bamba-yellow opacity-[0.07] blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-white opacity-[0.03] blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left z-20">
            {/* Badge Informativo Destacado - Neo Brutalista */}
            <div className="inline-flex items-center mx-auto lg:mx-0 mb-8 bg-bamba-yellow border-2 border-black px-5 py-2.5 self-start transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-black font-black text-xs md:text-sm tracking-widest uppercase italic">
                EL PRIMER PROGRAMA DE STREAMING JUDÍO
              </span>
            </div>
            
            <div className="relative mb-8">
              <h1 className="font-black-bamba leading-[0.75] uppercase italic tracking-tighter">
                <span className="text-white block text-7xl sm:text-8xl md:text-[9rem] lg:text-[10rem] mb-2">BAMBA</span>
                {/* Streaming con tamaño reducido para no tapar la foto */}
                <span className="text-bamba-yellow block text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
                  STREAMING
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-12 text-white/90 max-w-2xl mx-auto lg:mx-0 leading-tight italic">
              "Rompiendo el molde del streaming tradicional con identidad propia y sin vueltas."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-10">
              <a 
                href="https://www.youtube.com/@BambaStreaming" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brutal-shadow bg-white text-bamba-blue font-black-bamba px-14 py-6 rounded-none uppercase text-xl tracking-tighter transition-all border-4 border-black hover:bg-bamba-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-bamba-yellow"
                aria-label="Unite al vivo en YouTube - Bamba Streaming"
              >
                UNITE AL VIVO
              </a>
              
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em] mb-3">CONECTÁ CON BAMBA</span>
                <div className="flex items-center gap-4">
                  {socialLinks.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 border-white/10 bg-white/5 text-white text-xl transition-all duration-300 ${link.color} hover:border-transparent hover:scale-110 hover:-rotate-6 focus:outline-none focus:ring-2 focus:ring-bamba-yellow`}
                      aria-label={`Seguir a Bamba Streaming en ${link.icon.includes('youtube') ? 'YouTube' : link.icon.includes('instagram') ? 'Instagram' : link.icon.includes('tiktok') ? 'TikTok' : 'Spotify'}`}
                    >
                      <i className={link.icon} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-16 lg:mt-0 z-10">
            <div className="relative group lg:translate-x-4">
              {/* Hashtag Sticker */}
              <div className="absolute -top-8 -left-8 z-30 bg-bamba-yellow border-4 border-black px-6 py-3 -rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-0 transition-transform duration-500">
                 <span className="text-black font-black text-lg md:text-xl tracking-tighter uppercase italic">#MARTESDEBAMBA</span>
              </div>

              {/* Efecto de marco decorativo */}
              <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-[2.5rem] -z-10 rotate-3 transition-transform group-hover:rotate-0"></div>
              
              <div className="relative aspect-[4/5] w-[260px] md:w-[350px] lg:w-[380px] overflow-hidden border-[6px] border-black bg-black shadow-[15px_15px_0px_0px_rgba(45,80,150,0.8)]">
                <img 
                  src="/images/hero/IMG20250909202312.jpg" 
                  alt="Julián Barki - Conductor de Bamba Streaming" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" 
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback a la foto del equipo si no existe la hero
                    target.src = "/images/team/julian-barki.jpg";
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md border-t-4 border-bamba-yellow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_5px_red]"></span>
                    <p className="text-white/90 font-black text-[11px] uppercase tracking-[0.4em]">TODOS LOS MARTES</p>
                  </div>
                  <p className="text-white font-black-bamba text-2xl lg:text-3xl uppercase italic leading-none tracking-tighter">20:30 HS (ARG)</p>
                </div>
              </div>

              {/* Adornos técnicos de cámara */}
              <div className="absolute top-4 right-4 text-white/30 hidden md:flex flex-col items-end gap-1">
                 <div className="w-10 h-[2px] bg-white/30"></div>
                 <div className="w-[2px] h-10 bg-white/30"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
