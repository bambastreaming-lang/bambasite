
import React from 'react';

const Sponsors: React.FC = () => {
  // Logos locales - Ordenados por importancia (quienes más dinero ponen)
  // Destacados: Goldstein, Sushi KO, Kingston (tamaño grande)
  // Resto: tamaño menor
  const sponsors = [
    { 
      name: "Goldstein Propiedades", 
      logo: "/images/sponsors/goldstein.jpg", 
      placeholder: "fas fa-building",
      url: "https://www.goldsteinpropiedades.com/",
      featured: true // Más destacado
    },
    { 
      name: "Sushi KO", 
      logo: "/images/sponsors/sushi.jpg", 
      placeholder: "fas fa-fish",
      url: "https://sushiko.com.ar/",
      featured: true // Segundo más destacado
    },
    { 
      name: "Kingston Kosher", 
      logo: "/images/sponsors/kingston.jpg", 
      placeholder: "fas fa-cow",
      url: "https://kingstonkosher.com.ar/",
      featured: true // Tercero más destacado
    },
    { 
      name: "Kehot Books", 
      logo: "/images/sponsors/kehot.jpg", 
      placeholder: "fas fa-book",
      url: "https://store.kehotonline.com/",
      featured: false
    },
    { 
      name: "ESH Judaica", 
      logo: "/images/sponsors/esh.jpeg", 
      placeholder: "fas fa-fire",
      url: "https://www.esh.com.ar/",
      featured: false
    },
    { 
      name: "M Confitería", 
      logo: "/images/sponsors/m-confiteria.png", 
      placeholder: "fas fa-m",
      url: "https://mconfiteria.com.ar/",
      featured: false
    },
    { 
      name: "La Estampería", 
      logo: "/images/sponsors/la-estamperia.png", 
      placeholder: "fas fa-shirt",
      url: "https://laestamperia.com.ar/",
      featured: false
    },
    { 
      name: "SOMA 3D", 
      logo: "/images/sponsors/soma-3d.png", 
      placeholder: "fas fa-cube",
      url: "https://somaimpresiones3d.com.ar/",
      featured: false
    },
    { 
      name: "Hasofrim", 
      logo: "/images/sponsors/hasofrim.png", 
      placeholder: "fas fa-pen-nib",
      url: "https://hasofrim.com/",
      featured: false
    },
    { 
      name: "Orlibbi", 
      logo: "/images/sponsors/orlibi.png", 
      placeholder: "fas fa-star",
      url: "https://orlibbi.com.ar/",
      featured: false
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
        
        <div className="w-full">
          {/* Sponsors destacados - Tamaño grande */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 mb-12 md:mb-16">
            {sponsors.filter(s => s.featured).map((sponsor, i) => (
              <a 
                key={i} 
                href={sponsor.url || '#'} 
                target={sponsor.url ? "_blank" : "_self"}
                rel={sponsor.url ? "noopener noreferrer" : ""}
                className={`group relative flex flex-col items-center transition-all duration-500 hover:scale-110 ${!sponsor.url && 'cursor-default'}`}
              >
                <div className="h-20 sm:h-24 md:h-28 w-48 sm:w-56 md:w-64 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100">
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
                        icon.className = `${sponsor.placeholder} text-4xl text-gray-400 fallback-icon`;
                        parent.appendChild(icon);
                      }
                    }}
                    className="max-h-full max-w-full object-contain p-2"
                  />
                </div>
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest text-center group-hover:text-black transition-colors">
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>
          
          {/* Resto de sponsors - Tamaño menor */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-12 items-center justify-items-center">
            {sponsors.filter(s => !s.featured).map((sponsor, i) => (
              <a 
                key={i} 
                href={sponsor.url || '#'} 
                target={sponsor.url ? "_blank" : "_self"}
                rel={sponsor.url ? "noopener noreferrer" : ""}
                className={`group relative flex flex-col items-center transition-all duration-500 hover:scale-110 ${!sponsor.url && 'cursor-default'}`}
              >
                <div className="h-12 sm:h-14 w-24 sm:w-28 flex items-center justify-center mb-2 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100">
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
                        icon.className = `${sponsor.placeholder} text-2xl text-gray-400 fallback-icon`;
                        parent.appendChild(icon);
                      }
                    }}
                    className="max-h-full max-w-full object-contain p-1"
                  />
                </div>
                <span className="text-[8px] sm:text-[9px] font-bold text-gray-400 uppercase tracking-widest text-center group-hover:text-black transition-colors">
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
