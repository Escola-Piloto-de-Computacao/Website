import React from "react";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import pedro from '../../Assets/MemberPhotos/pedroReact.jpeg'
import joao from '../../Assets/MemberPhotos/Victor.jpeg';
import vinicius from '../../Assets/MemberPhotos/Vinicius.jpg';
import joas from '../../Assets/MemberPhotos/JoasR.jpg';
import lucas from '../../Assets/MemberPhotos/LucasR.jpg';
import clara from '../../Assets/MemberPhotos/ClaraPandas.jpg';
import patrick from '../../Assets/MemberPhotos/PatrickPBI.jpeg';
import rafael from '../../Assets/MemberPhotos/RafaelPHP.jpg';
import artur from '../../Assets/MemberPhotos/ArturPyautoGui.png';
import danielle from '../../Assets/MemberPhotos/Danielle.jpg';

const membros = [
    {
        nome: "Pedro Figueira",
        cargo: "",
        email: "pedrofigueiraboaviagem@gmail.com",
        twitter: "",
        linkedin: "",
        github: "https://github.com/PepeuFBV",
        instagram: "https://www.instagram.com/pedro_fbv/",
        foto: pedro
    },
    {
        nome: "João Victor",
        cargo: "",
        email: "jvictorsilva65@gmail.com",
        twitter: "",
        linkedin: "",
        github: "",
        instagram: "https://www.instagram.com/jeivizz/",
        foto: joao
    },
    {
        nome: "Vinicius Dantasso",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "",
        github: "https://github.com/vinicius-dantasso",
        instagram: "",
        foto: vinicius
    },
    {
        nome: "Joás Gabriel",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "https://www.linkedin.com/in/jo%C3%A1s-barros-907990172/",
        github: "https://github.com/joas-barros",
        instagram: "https://www.instagram.com/joasgabriel/",
        foto: joas
    },
    {
        nome: "Lucas Silva",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "",
        github: "https://github.com/Lucassilv7",
        instagram: "",
        foto: lucas
    },
    {
        nome: "Clara Letícia",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "",
        github: "https://github.com/ClaraLeticia",
        instagram: "",
        foto: clara
    },
    {
        nome: "Erick Patrick",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "",
        github: "https://github.com/ErkPatrick",
        instagram: "",
        foto: patrick
    },
    {
        nome: "Rafael Lucas",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "",
        github: "https://github.com/Rafaellucasaz/",
        instagram: "",
        foto: rafael
    },
    {
        nome: "Artur Segantini",
        cargo: "",
        email: "",
        twitter: "",
        linkedin: "",
        github: "https://github.com/ARTSALT/",
        instagram: "https://www.instagram.com/artur_sals/",
        foto: artur
    },
    {
        nome: "Danielle Casillo",
        cargo: "Coordenadora",
        email: "",
        twitter: "",
        linkedin: "",
        github: "",
        instagram: "",
        foto: danielle
    }
];

type membro = {
    nome: string;
    cargo: string;
    email: string;
    twitter: string;
    linkedin: string;
    github: string;
    instagram: string;
    foto: string;
};

const Socials = ({ socials }: { socials: { mail?: string, linkedin?: string, github?: string, instagram?: string } }) => {
    return (
        <div className="flex space-x-2">
            {socials.mail &&
                <a href={`mailto:${socials.mail}`} title="Email" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                    <MdEmail size={25} />
                </a>}
            {socials.instagram &&
                <a href={socials.instagram} title="Instagram" className=" hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                    <BsInstagram size={25} />
                </a>}
            {socials.linkedin &&
                <a href={socials.linkedin} title="LinkedIn" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin size={25} />
                </a>}
            {socials.github &&
                <a href={socials.github} title="Github" className=" hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={25} />
                </a>}
        </div>
    );
};

const Members = () => {

    function shuffleArray(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const specificMembro = membros.find(membro => membro.nome === "Danielle Casillo");
    const otherMembros = membros.filter(membro => membro.nome !== "Danielle Casillo");

    shuffleArray(otherMembros);

    const finalMembros = specificMembro ? [specificMembro, ...otherMembros] : otherMembros;
    finalMembros.reverse();

    return (
        <section className="py-12 lg:py-36 mt-5 lg:mt-24 lg:min-h-screen" id="Members">
            <div className="container flex flex-col items-center justify-center px-12 p-4 mx-auto">
                <p className="p-2 text-lg font-medium tracki text-center uppercase">Membros EPC</p>
                <h1 className="text-4xl font-bold text-center pb-6">A equipe talentosa por trás do projeto</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    {finalMembros.map(membro => (
                        <div key={membro.nome} className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md w-80 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src={membro.foto} />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold">{membro.nome}</p>
                                <p>{membro.cargo}</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-4 border-t-2">
                                <Socials socials={{ mail: membro.email, linkedin: membro.linkedin, github: membro.github, instagram: membro.instagram }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Members;