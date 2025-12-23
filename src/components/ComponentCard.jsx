import { useState } from "react";
import CopyIcon from "./CopyIcon";
import { CheckIcon} from "./CheckIcon";
import React from "react";
import JsxParser from 'react-jsx-parser';

export const ComponentCard = ({codigo}) => {
    const simpleCard = "absolute inset-0 backdrop-blur-md z-50 w-full h-full title-card flex items-center justify-center ";
    const movingCard = "absolute inset-0 backdrop-blur-md z-50 w-full h-full title-card-move flex items-center justify-center ";
    
    const [card, setCard] = useState(simpleCard);

    const handlerHover = () => {
        setCard(movingCard);
    };
   const copyComponent = async (text)=>{
    await navigator.clipboard.writeText(text);
   }
    const handlerLeave = () => {
        setCard(simpleCard);
        handlerEstadoClose();
    };
     const [estadoClose, setEstadoClose] = useState("hidden");
     const [estadoOpen, setEstadoOpen] = useState(""); 
     

   
     const handlerEstadoOpen = () => {
       setEstadoClose("");
       setEstadoOpen("hidden");
       copyComponent(codigo)
       console.log(codigo);
     }
   
     const handlerEstadoClose = () => {
       setEstadoClose("hidden");
       setEstadoOpen("");
     }
    

    return (
        <div className="relative h-52 overflow-hidden rounded-lg cursor-pointer border-2 border-[#ebe5e5] transition-all duration-200 ease-out hover:bg-gradient-to-b from-transparent to-gray-800 hover:scale-[1.07]">
            <div 
                className="relative w-full h-full flex justify-center items-center z-30"
                onClick={handlerHover}
            >
               <div>
                <JsxParser jsx={codigo}/>
                </div>
            </div>

            <h1 
                className={` font-bold text-[18px] text-[#ebe5e5] flex gap-1.5 ${card}`} 
                onMouseLeave={handlerLeave} 
                onClick={handlerEstadoOpen}
            >
                <div className={`${estadoOpen} transition-all duration-200`} onClick={handlerEstadoOpen}>
                <CopyIcon/>
                </div>
                <div className={`${estadoClose} transition-all duration-200`} onClick={handlerEstadoClose}>
                    <CheckIcon/>
                </div>
               Copiar
            </h1>
        </div>
    );
};

