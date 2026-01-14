
import React from 'react';

const Sponsors: React.FC = () => {
  // Logos locales - Coloca los logos en public/images/sponsors/
  // Nombres de archivo sugeridos: kingston-kosher.png, sushi-ko.png, etc.
  const sponsors = [
    { 
      name: "Kingston Kosher", 
      logo: "/images/sponsors/kingston.jpg", 
      placeholder: "fas fa-cow",
      url: "https://kingstonkosher.com.ar/"
    },
    { 
      name: "Sushi KO", 
      logo: "/images/sponsors/sushi.jpg", 
      placeholder: "fas fa-fish",
      url: "https://sushiko.com.ar/"
    },
    { 
      name: "Goldstein Propiedades", 
      logo: "/images/sponsors/goldstein.jpg", 
      placeholder: "fas fa-building",
      url: "https://www.goldsteinpropiedades.com/"
    },
    { 
      name: "Kehot Books", 
      logo: "/images/sponsors/kehot.jpg", 
      placeholder: "fas fa-book",
      url: "https://store.kehotonline.com/"
    },
    { 
      name: "ESH Judaica", 
      logo: "/images/sponsors/esh.jpeg", 
      placeholder: "fas fa-fire",
      url: "https://www.esh.com.ar/"
    },
    { 
      name: "M Confitería", 
      logo: "/images/sponsors/m-confiteria.png", 
      placeholder: "fas fa-m",
      url: "https://mconfiteria.com.ar/"
    },
    { 
      name: "La Estampería", 
      logo: "/images/sponsors/la-estamperia.png", 
      placeholder: "fas fa-shirt",
      url: "https://laestamperia.com.ar/"
    },
    { 
      name: "SOMA 3D", 
      logo: "/images/sponsors/soma-3d.png", 
      placeholder: "fas fa-cube",
      url: "https://somaimpresiones3d.com.ar/"
    },
    { 
      name: "Hasofrim", 
      logo: "/images/sponsors/hasofrim.png", 
      placeholder: "fas fa-pen-nib",
      url: "https://hasofrim.com/"
    },
    { 
      name: "Orlibbi", 
      logo: "/images/sponsors/orlibbi.png", 
      placeholder: "fas fa-star",
      url: "https://orlibbi.com.ar/"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-black/10"></div>
          <span className="text-[11px] font-black text-bamba-blue uppercase tracking-[0.5em]">MARCAS QUE NOS APOYAN</span>
          <div className="h-[1px] w-12 bg-black/10"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-12 gap-y-16 items-center justify-items-center w-full">
          {sponsors.map((sponsor, i) => (
            <a 
              key={i} 
              href={sponsor.url || '#'} 
              target={sponsor.url ? "_blank" : "_self"}
              rel={sponsor.url ? "noopener noreferrer" : ""}
              className={`group relative flex flex-col items-center transition-all duration-500 hover:scale-110 ${!sponsor.url && 'cursor-default'}`}
            >
              <div className="h-16 w-40 flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.fallback-icon')) {
                      const icon = document.createElement('i');
                      icon.className = `${sponsor.placeholder} text-3xl text-gray-400 fallback-icon`;
                      parent.appendChild(icon);
                    }
                  }}
                  className="max-h-full max-w-full object-contain p-2"
                />
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center group-hover:text-black transition-colors">
                {sponsor.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
