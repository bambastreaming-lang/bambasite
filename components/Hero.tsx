
import React from 'react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: "fab fa-youtube", url: "https://www.youtube.com/@BambaStreaming", color: "hover:bg-red-600" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/bambastreaming/", color: "hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" },
    { icon: "fab fa-tiktok", url: "https://www.tiktok.com/@bambastreaming", color: "hover:bg-black" },
    { icon: "fab fa-spotify", url: "https://open.spotify.com/show/6vHFrfEwlCA1kIbUUdk9FI?si=fe241d78f2884cca", color: "hover:bg-green-500" }
  ];

  return (
    <div className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-bamba-blue">
      {/* Luces de fondo */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-bamba-yellow opacity-[0.07] blur-[100px] sm:blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-white opacity-[0.03] blur-[100px] sm:blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left z-20">
            {/* Badge Informativo Destacado - Neo Brutalista */}
            <div className="inline-flex items-center mx-auto lg:mx-0 mb-6 sm:mb-8 bg-bamba-yellow border-2 border-black px-3 sm:px-5 py-2 sm:py-2.5 self-start transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-black font-black text-[10px] sm:text-xs md:text-sm tracking-widest uppercase italic">
                EL PRIMER PROGRAMA DE STREAMING JUDÍO
              </span>
            </div>
            
            <div className="relative mb-6 sm:mb-8">
              <h1 className="font-black-bamba leading-[0.75] uppercase italic tracking-tighter">
                <span className="text-white block text-5xl sm:text-6xl md:text-7xl lg:text-[9rem] xl:text-[10rem] mb-1 sm:mb-2">BAMBA</span>
                {/* Streaming con tamaño reducido para no tapar la foto */}
                <span className="text-bamba-yellow block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-[8px_8px_0px_rgba(0,0,0,0.3)]">
                  STREAMING
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-8 sm:mb-12 text-white/90 max-w-2xl mx-auto lg:mx-0 leading-tight italic px-2 sm:px-0">
              "Rompiendo el molde del streaming tradicional con identidad propia y sin vueltas."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-10">
              <a 
                href="https://www.youtube.com/@BambaStreaming" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brutal-shadow bg-white text-bamba-blue font-black-bamba px-8 sm:px-12 md:px-14 py-4 sm:py-5 md:py-6 rounded-none uppercase text-base sm:text-lg md:text-xl tracking-tighter transition-all border-3 sm:border-4 border-black hover:bg-bamba-yellow hover:text-black focus:outline-none focus:ring-2 focus:ring-bamba-yellow w-full sm:w-auto text-center"
                aria-label="Unite al vivo en YouTube - Bamba Streaming"
              >
                UNITE AL VIVO
              </a>
              
              <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
                <span className="text-[8px] sm:text-[9px] font-black text-white/40 uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-2 sm:mb-3">CONECTÁ CON BAMBA</span>
                <div className="flex items-center gap-3 sm:gap-4 justify-center w-full sm:w-auto">
                  {socialLinks.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border-2 border-white/10 bg-white/5 text-white text-lg sm:text-xl transition-all duration-300 ${link.color} hover:border-transparent hover:scale-110 hover:-rotate-6 focus:outline-none focus:ring-2 focus:ring-bamba-yellow`}
                      aria-label={`Seguir a Bamba Streaming en ${link.icon.includes('youtube') ? 'YouTube' : link.icon.includes('instagram') ? 'Instagram' : link.icon.includes('tiktok') ? 'TikTok' : 'Spotify'}`}
                    >
                      <i className={link.icon} aria-hidden="true"></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 sm:mt-12 lg:mt-0 z-10">
            <div className="relative group lg:translate-x-4">
              {/* Hashtag Sticker */}
              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 z-30 bg-bamba-yellow border-3 sm:border-4 border-black px-4 sm:px-6 py-2 sm:py-3 -rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-0 transition-transform duration-500">
                 <span className="text-black font-black text-sm sm:text-base md:text-lg lg:text-xl tracking-tighter uppercase italic">#MARTESDEBAMBA</span>
              </div>

              {/* Efecto de marco decorativo */}
              <div className="absolute -inset-4 bg-white/5 border border-white/10 rounded-[2.5rem] -z-10 rotate-3 transition-transform group-hover:rotate-0"></div>
              
              <div className="relative aspect-[4/5] w-[240px] sm:w-[280px] md:w-[350px] lg:w-[380px] overflow-hidden border-4 sm:border-[6px] border-black bg-black shadow-[10px_10px_0px_0px_rgba(45,80,150,0.8)] sm:shadow-[15px_15px_0px_0px_rgba(45,80,150,0.8)]">
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
                
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-black/40 backdrop-blur-md border-t-3 sm:border-t-4 border-bamba-yellow">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_3px_red] sm:shadow-[0_0_5px_red]"></span>
                    <p className="text-white/90 font-black text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em]">TODOS LOS MARTES</p>
                  </div>
                  <p className="text-white font-black-bamba text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase italic leading-none tracking-tighter">20:30 HS (ARG)</p>
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
