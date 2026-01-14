
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Bamba', id: 'sobre-nosotros' },
    { name: 'Cómo Ver', id: 'como-ver' },
    { name: 'Impacto', id: 'impacto' },
    { name: 'Equipo', id: 'equipo' },
    { name: 'Tribuna', id: 'tribuna' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const handleScrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-lg py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-6'}`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={(e) => handleScrollTo(e, 'inicio')} 
            className="group flex items-center focus:outline-none focus:ring-2 focus:ring-bamba-yellow rounded-lg p-2"
            aria-label="Ir al inicio"
          >
            <img 
              src="/images/bamba-logo.png" 
              alt="Bamba Streaming Logo" 
              className="h-8 md:h-10 w-auto transition-opacity hover:opacity-80"
            />
          </button>
          
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)} 
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-bamba-yellow focus:outline-none focus:ring-2 focus:ring-bamba-yellow rounded px-2 py-1 ${scrolled ? 'text-black' : 'text-white/70 hover:text-white'}`}
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto" 
              onClick={(e) => handleScrollTo(e, 'contacto')}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border transition-all focus:outline-none focus:ring-2 focus:ring-bamba-yellow ${scrolled ? 'bg-black text-white border-black hover:bg-bamba-yellow hover:text-black' : 'bg-white text-black border-white hover:bg-transparent hover:text-white'}`}
              role="menuitem"
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${scrolled ? 'text-black bg-white/90' : 'text-white bg-white/10'} p-3 rounded-lg backdrop-blur-sm border-2 ${scrolled ? 'border-black/10' : 'border-white/20'} transition-all hover:scale-110`}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-[100] pt-20 px-6 flex flex-col gap-4 shadow-2xl overflow-y-auto"
          role="menu"
          aria-label="Menú de navegación móvil"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-black bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Cerrar menú"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)} 
              className="text-2xl font-black text-black uppercase tracking-wider hover:text-bamba-yellow transition-colors py-4 border-b border-gray-200"
              role="menuitem"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={(e) => handleScrollTo(e, 'contacto')}
            className="mt-4 bg-bamba-blue text-white px-8 py-4 rounded-full text-xl font-black uppercase tracking-wider text-center hover:bg-black transition-colors"
            role="menuitem"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;