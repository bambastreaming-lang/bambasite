
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-black-bamba mb-6 sm:mb-8 leading-[0.85] sm:leading-[0.8] md:leading-[0.75] uppercase italic tracking-tighter">
            <span className="block">VENÍ A LA</span>
            <span className="block text-bamba-yellow">TRIBUNA</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-6 sm:mb-8 md:mb-12 text-white/70 max-w-xl">
            Viví Bamba desde adentro. Sé parte del set, participá en vivo y conocé a todo el equipo. 
          </p>
          <a 
            href="https://tally.so/r/wAVkGD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="brutal-shadow inline-block bg-bamba-yellow text-black px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 font-black uppercase tracking-tighter text-base sm:text-lg md:text-xl lg:text-2xl border-2 border-black hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-lg w-full sm:w-auto text-center"
            aria-label="Reservar lugar en La Tribuna de Bamba Streaming"
          >
            RESERVAR LUGAR
          </a>
        </div>
        
        <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white/5 border border-white/10 rounded-3xl rotate-3 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" />
            </div>
            <div className="aspect-square bg-bamba-yellow rounded-3xl -rotate-6 flex items-center justify-center p-4 sm:p-6 md:p-8 text-black text-center">
               <span className="font-black-bamba text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase leading-tight">CUPOS LIMITADOS</span>
            </div>
            <div className="aspect-square bg-bamba-blue border-4 border-white rounded-3xl -rotate-3 flex items-center justify-center">
               <i className="fas fa-users text-6xl text-white"></i>
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 rounded-3xl rotate-6 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
