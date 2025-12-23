import { useState } from 'react';

export const SelecterButton = ({ clases, onClick }) => {
  const [isWaveActive, setIsWaveActive] = useState(true);

  const handleClick = () => {
    // Desactivar la onda temporalmente
    setIsWaveActive(false);
    
    // Reactivar la onda después de 3 segundos
    setTimeout(() => {
      setIsWaveActive(true);
    }, 2000);
    
    // Ejecutar el onClick prop si existe
    if (onClick) {
      onClick();
    }
  };

  return (
    <section className="w-[180px] h-screen hidden md:flex items-center justify-center fixed ">
      <div className="relative" onClick={handleClick}>
        {/* Contenedor de la onda */}
        <div className={`
          absolute inset-0 rounded-full
          transition-all duration-300 ease-in-out
          ${isWaveActive 
            ? 'animate-[waterWave_2s_infinite_linear] border-2 border-white/80' 
            : 'opacity-0 scale-100'
          }
        `}></div>
        
        {/* SVG */}
        <svg 
          className={`${clases} cursor-pointer hover:scale-[1.08] transition-transform duration-200 relative z-10`}
          xmlns="http://www.w3.org/2000/svg" 
          width="40" 
          height="40" 
          viewBox="0 0 24 24"
        >
          <path fill="#ffffff" d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2S2 6.48 2 12zm10-1h4v2h-4v3l-4-4l4-4v3z"/>
        </svg>
      </div>

    </section>
  );
};