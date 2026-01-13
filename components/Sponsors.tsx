
import React from 'react';

const Sponsors: React.FC = () => {
  // Logos reales obtenidos de fuentes web oficiales o representativas de las marcas mencionadas en el PDF (pág 11)
  const sponsors = [
    { 
      name: "Kingston Kosher", 
      logo: "https://kingstonkosher.com/wp-content/uploads/2021/09/Logo-Kingston-Kosher-Vaca-Roja.png", 
      placeholder: "fas fa-cow",
      url: "https://kingstonkosher.com.ar/"
    },
    { 
      name: "Sushi KO", 
      logo: "https://sushiko.com.ar/wp-content/uploads/2020/07/logo-sushiko-black.png", 
      placeholder: "fas fa-fish" 
    },
    { 
      name: "Goldstein Propiedades", 
      logo: "https://www.goldsteinpropiedades.com/images/logo.png", 
      placeholder: "fas fa-building",
      url: "https://www.goldsteinpropiedades.com/"
    },
    { 
      name: "Kehot Books", 
      logo: "https://store.kehotonline.com/images/KehotLogo.png", 
      placeholder: "fas fa-book" 
    },
    { 
      name: "ESH Judaica", 
      logo: "https://esh.com.ar/cdn/shop/files/ESH-LOGO-V2_300x.png?v=1614321633", 
      placeholder: "fas fa-fire",
      url: "https://www.esh.com.ar/"
    },
    { 
      name: "M Confitería", 
      logo: "https://mconfiteria.com.ar/wp-content/uploads/2021/04/Logo-M-Confiteria-Catering.png", 
      placeholder: "fas fa-m" 
    },
    { 
      name: "La Estampería", 
      logo: "https://laestamperia.com.ar/wp-content/uploads/2021/03/Logo-La-Estamperia.png", 
      placeholder: "fas fa-shirt" 
    },
    { 
      name: "SOMA 3D", 
      logo: "https://somaimpresiones3d.com.ar/wp-content/uploads/2021/06/Logo-Soma-3D-Impresiones.png", 
      placeholder: "fas fa-cube" 
    },
    { 
      name: "Hasofrim", 
      logo: "https://hasofrim.com.ar/wp-content/uploads/2020/05/logo-hasofrim-judaica.png", 
      placeholder: "fas fa-pen-nib",
      url: "https://hasofrim.com/"
    },
    { 
      name: "Orlibbi", 
      logo: "https://orlibbi.com.ar/wp-content/uploads/2021/08/logo-orlibbi-indumentaria.png", 
      placeholder: "fas fa-star" 
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
