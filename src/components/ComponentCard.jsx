import { useState } from "react";

export const ComponentCard = () => {
    const simpleCard = "absolute inset-0 backdrop-blur-md z-50 w-full h-full title-card flex items-center justify-center ";
    const movingCard = "absolute inset-0 backdrop-blur-md z-50 w-full h-full title-card-move flex items-center justify-center ";
    
    const [card, setCard] = useState(simpleCard);

    const handlerHover = () => {
        setCard(movingCard);
    };

    const handlerLeave = () => {
        setCard(simpleCard);
    };

    return (
        <div className="relative w-1/4 h-52 overflow-hidden rounded-lg cursor-pointer border-2 border-[#ebe5e5] transition-all duration-200 ease-out hover:bg-gradient-to-b from-transparent to-gray-800 hover:scale-[1.07]">
            <div 
                className="relative w-full h-full flex justify-center items-center z-30"
                onClick={handlerHover}
            >
                <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <a 
                        href="#" 
                        title="Get quote now"
                        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                        onClick={(e) => e.preventDefault()}
                    >
                        Get it now
                    </a>
                </div>
            </div>

            <h1 
                className={card} 
                onMouseLeave={handlerLeave} 
                onClick={handlerLeave}
            >
                sexo
            </h1>
        </div>
    );
};