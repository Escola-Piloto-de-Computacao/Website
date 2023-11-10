import { useState } from "react";
import LerMais from "./LerMais";

interface CardProps {
    EventName: string;
    EventDescription: string;
    ImageEvent?: string;
    EventSiteLink: string;
}

const tamanhoMaxTexto = 200;

function openTab(url: string) {
    window.open(url, "_blank");
}

const Card = ({ EventName, EventDescription, ImageEvent, EventSiteLink }: CardProps) => {
    const [showFullDescription] = useState(false);

    let shortenedDescription = EventDescription;
    if (EventDescription.length > tamanhoMaxTexto && !showFullDescription) {
        let indiceChar = tamanhoMaxTexto;
        while (EventDescription.charAt(indiceChar) !== " ") {
            indiceChar++;
        }
        if (EventDescription[indiceChar - 1] === "." || EventDescription[indiceChar - 1] === ",") {
            shortenedDescription = EventDescription.substring(0, indiceChar-1) + "..."
        } else {
            shortenedDescription = EventDescription.substring(0, indiceChar) + "..."
        }
    }

    return (
        <div className="w-full grid justify-center">
            <div className="grid bg-slate-300 w-[400px] p-6 gap-5 rounded-2xl">
                <div className="flex justify-center">
                    <img src={ImageEvent} alt={ImageEvent} />
                </div>
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
                    <button className="text-base bg-sky-500 p-2 rounded-md" onClick={() => openTab(EventSiteLink)}>
                        Saiba Mais
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;