import { useEffect, useState } from "react";
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
            <img src={image} alt="Logo evento" className=""/>
         </div>
      );
   
   }
};

const Card = ({ EventName, EventDescription, ImageEvent, EventSiteLink }: CardProps) => {
   const [showFullDescription] = useState(false);
   const [tamanhoMaxTexto, setTamanhoMaxTexto] = useState(230);

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
            setTamanhoMaxTexto(135);
         } else {
            setTamanhoMaxTexto(230);
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
               <button className="text-base bg-sky-500 rounded-md" style={{ padding: '0.1rem 0.5rem 0.1rem 0.5rem' }} onClick={() => window.open(EventSiteLink, "_blank")}>
                  Saiba Mais
               </button>
            </div>
         </div>
      </div>
   );
};

export default Card;