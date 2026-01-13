
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <h2 className="text-7xl md:text-9xl font-black-bamba mb-8 leading-[0.75] uppercase italic tracking-tighter">
            VENÍ A LA<br/>
            <span className="text-bamba-yellow">TRIBUNA</span>
          </h2>
          <p className="text-2xl font-bold mb-12 text-white/70 max-w-xl">
            Viví Bamba desde adentro. Sé parte del set, participá en vivo y conocé a todo el equipo. 
          </p>
          <a 
            href="https://tally.so/r/wAVkGD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="brutal-shadow inline-block bg-bamba-yellow text-black px-16 py-6 font-black uppercase tracking-tighter text-2xl border-2 border-black hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-white rounded-lg"
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
            <div className="aspect-square bg-bamba-yellow rounded-3xl -rotate-6 flex items-center justify-center p-8 text-black text-center">
               <span className="font-black-bamba text-3xl uppercase leading-none">CUPOS LIMITADOS</span>
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
