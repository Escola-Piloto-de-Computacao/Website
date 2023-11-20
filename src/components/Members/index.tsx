import { MdEmail } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

let membros = [
   {
      nome: "Pedro Figueira",
      cargo: "",
      email: "pedrofigueiraboaviagem@gmail.com",
      twitter: "",
      linkedin: "",
      github: "https://github.com/PepeuFBV",
      instagram: "https://www.instagram.com/pedro_fbv/",
      foto: "https://source.unsplash.com/100x100/?portrait?0"
   },
   {
      nome: "João Victor",
      cargo: "",
      email: "jvictorsilva65@gmail.com",
      twitter: "",
      linkedin: "",
      github: "",
      instagram: "https://www.instagram.com/jeivizz/",
      foto: "/MemberPhotos/Victor.jpeg"
   }
];


const Members = () => {

   //fazer mapping fora do return e gerar sociais do memebro de acordo com o que ele tem

   return (
      <section className="py-12 mt-32 h-full xsm:pt-64 pt-0 pb-20" id="Members">
         <div className="container flex flex-col items-center justify-center px-12 lg:p-4 mx-auto sm:p-10">
            <p className="p-2 text-base lg:text-lg font-medium tracki text-center uppercase pt-20">Membros EPC</p>
            <h1 className="text-3xl lg:text-4xl font-bold leadi text-center pb-6 lg:pb-2">A equipe talentosa por trás do projeto</h1>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
               {membros.map(membro => (
                  <div key={membro.nome} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                     <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src={membro.foto} />
                     <div className="flex-1 my-4">
                        <p className="text-xl font-semibold leadi">{membro.nome}</p>
                        <p>{membro.cargo}</p>
                     </div>
                     <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a href={`mailto:${membro.email}`} title="Email" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                           <MdEmail size={25} />
                        </a>
                        <a href={membro.linkedin} title="LinkedIn" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                           <BsLinkedin size={25} />
                        </a>
                        <a href={membro.github} title="Github" className=" hover:text-sky-400" target="_blank" rel="noopener noreferrer">
                           <BsGithub size={25} />
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Members;