import { MdEmail } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

let membros = [
   {
      nome: "Pedro Figueira",
      cargo: "Bolsista",
      email: "pedrofigueiraboaviagem@gmail.com",
      twitter: "",
      linkedin: "",
      github: "https://github.com/PepeuFBV",
      instagram: "https://www.instagram.com/pedro_fbv/",
      foto: "https://source.unsplash.com/100x100/?portrait?0"
   },
   {
      nome: "pessoa EPC2",
      cargo: "Programador",
      email: "",
      twitter: "",
      linkedin: "",
      github: "",
      instagram: "",
      foto: "https://source.unsplash.com/100x100/?portrait?1"
   }
];


const Members = () => {

   //fazer mapping fora do return e gerar sociais do memebro de acordo com o que ele tem

   return (
      <section className="py-12 mt-32" id="Members">
         <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
            <p className="p-2 text-lg font-medium tracki text-center uppercase pt-20">Membros EPC</p>
            <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">A equipe talentosa por trás do projeto</h1>
            <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
               {membros.map(membro => (
                  <div key={membro.nome} className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                     <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src={membro.foto} />
                     <div className="flex-1 my-4">
                        <p className="text-xl font-semibold leadi">{membro.nome}</p>
                        <p>{membro.cargo}</p>
                     </div>
                     <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                        <a href={`mailto:${membro.email}`} title="Email" className="hover:text-violet-400">
                           <MdEmail size={25} />
                        </a>
                        <a href={membro.twitter} title="Twitter" className="hover:text-violet-400">
                           <BsTwitter size={25} />
                        </a>
                        <a href={membro.linkedin} title="LinkedIn" className="hover:text-violet-400">
                           <BsLinkedin size={25} />
                        </a>
                        <a href={membro.github} title="GitHub" className="hover:text-violet-400">
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