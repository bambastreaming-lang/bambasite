
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    { icon: "fab fa-youtube", url: "https://www.youtube.com/@BambaStreaming" },
    { icon: "fab fa-instagram", url: "https://www.instagram.com/bambastreaming/" },
    { icon: "fab fa-tiktok", url: "https://www.tiktok.com/@bambastreaming" },
    { icon: "fab fa-spotify", url: "https://open.spotify.com/show/6vHFrfEwlCA1kIbUUdk9FI?si=fe241d78f2884cca" }
  ];

  const sections = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Bamba', href: '#sobre-nosotros' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-12">
            <img 
              src="/images/bamba-logo.png" 
              alt="Bamba Streaming Logo" 
              className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {sections.map(section => (
            <a key={section.name} href={section.href} className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-bamba-yellow transition-colors">
              {section.name}
            </a>
          ))}
        </div>
        
        <div className="flex space-x-4 mb-16" role="list">
          {socials.map((social, i) => {
            const platformName = social.icon.includes('youtube') ? 'YouTube' 
              : social.icon.includes('instagram') ? 'Instagram'
              : social.icon.includes('tiktok') ? 'TikTok'
              : 'Spotify';
            return (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-bamba-yellow"
                aria-label={`Seguir a Bamba Streaming en ${platformName}`}
                role="listitem"
              >
                <i className={social.icon} aria-hidden="true"></i>
              </a>
            );
          })}
        </div>

        <div className="pt-12 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">
            © {new Date().getFullYear()} BAMBA STREAMING. EL PRIMER STREAMING JUDÍO.
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">STREAMING SIN FILTROS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
