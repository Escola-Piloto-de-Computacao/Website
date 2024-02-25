import React, { useEffect, useState } from "react";
import LerMais from "./LerMais";

interface CardProps {
   EventName: string;
   EventDescription: string;
   ImageEvent?: string;
   EventSiteLink: string;
}

const eventImageGenerator = (image: string) => {
   if (image === "") {
      return (
         <div className="flex justify-center mx-auto pt-36 pb-36">
            <p className="text-xl">Em breve...</p>
         </div>
      );
   } else {
      return (
         <div className="flex justify-center pb-7 xxsm:w-3/4 mx-auto">
            <img src={image} alt="Logo evento" className="" />
         </div>
      );

   }
};

const Card = ({ EventName, EventDescription, ImageEvent, EventSiteLink }: CardProps) => {
   const [showFullDescription, setShowFullDescription] = useState(false);
   const [tamanhoMaxTexto, setTamanhoMaxTexto] = useState(150);

   let shortenedDescription = EventDescription;
   if (EventDescription.length > tamanhoMaxTexto && !showFullDescription) {
      let indiceChar = tamanhoMaxTexto;
      while (EventDescription.charAt(indiceChar) !== " ") {
         indiceChar++;
      }
      if (EventDescription[indiceChar - 1] === "." || EventDescription[indiceChar - 1] === ",") {
         shortenedDescription = EventDescription.substring(0, indiceChar - 1) + "..."
      } else {
         shortenedDescription = EventDescription.substring(0, indiceChar) + "..."
      }
   }

   useEffect(() => {
      const changeMaxTextSize = () => {
         if (window.innerWidth < 800) {
            setTamanhoMaxTexto(130);
         } else {
            setTamanhoMaxTexto(150);
         }
      };

      changeMaxTextSize();

      window.addEventListener('resize', changeMaxTextSize);
      return () => {
         window.removeEventListener('resize', changeMaxTextSize);
      };
   }, []);

   return (
      <div className="grid justify-center pb-20 lg:pb-0 justify-items-center">
         <div className="grid bg-slate-300 w-[400px] xxsm:w-3/4 p-6 rounded-2xl">
            {eventImageGenerator(ImageEvent as string)}
            <div className="flex justify-center">
               <p className="text-3xl font-semibold">{EventName}</p>
            </div>
            <p className="text-base text-justify">
               {showFullDescription ? EventDescription : shortenedDescription}<LerMais
                  titulo={EventName}
                  descricao={EventDescription}
               />
            </p>
            <div className="flex justify-center">
               <Botao EventSiteLink={EventSiteLink} />
            </div>
         </div>
      </div>
   );
};

const Botao = ({ EventSiteLink }: { EventSiteLink: string }) => {
   const isLinkValid = EventSiteLink && EventSiteLink.trim() !== "";
   const buttonStyle = { padding: '0.1rem 0.5rem', width: '100px', height: '35px' };

   return (
      <button 
         className={`text-base bg-sky-500 rounded-md ${isLinkValid ? '' : 'cursor-not-allowed'}`} 
         style={buttonStyle} 
         disabled={!isLinkValid} 
         onClick={isLinkValid ? () => window.open(EventSiteLink, "_blank") : undefined}
      >
         Inscreva-se
      </button>
   );
};

export default Card;