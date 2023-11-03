import AboutUs from "./components/Aboutus";
import Card from "./components/Event";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

let Eventos = [
    {
        NameEvent: "CAPCOM",
        DescriptionEvent: "A Semana de Capacitação em Computação da Ufersa promove cursos de extensão para alunos da UFERSA. Os cursos abrangem tecnologias essenciais, ministrados em sua maioria por alunos do curso. As aulas acontecerão de 29 de novembro a 01 de dezembro, das 14:00PM até as 18:00PM, visando complementar a formação dos estudantes. Os tópicos incluem Web Development, Unity, Git, Laravel, PowerBI, Python, R, e Robótica. Essa iniciativa visa enriquecer o conhecimento dos alunos e proporcionar experiência em ensino. Junte-se a nós para adentrar mais ainda no mundo de ciência da computação!",
        ImageEvent: "/Cardimage.svg"
    },
    {
        NameEvent: "WTCC IX",
        DescriptionEvent: "O Workshop Técnico-Científico de Computação visa despertar e estimular o interesse dos estudantes de graduação e de Pós-Graduação em Computação na pesquisa científica sobre temas relacionados à ciência da computação. Assim como, discutir temas atuais da área que são importantes tanto para estudantes quanto para profissionais de computação.",
        ImageEvent: "/Cardimage.svg"
    },
]
function App() {
    return (
        <div className="">
            <Header />
            <Introduction />
            <AboutUs />
            <div className="w-full grid justify-center h-screen">
                <div id="Events" className="w-full grid justify-center h-full items-end">
                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl mt-28">Eventos</h1>
                </div>
                <div className="w-full grid pt-20 justify-center gap-28 grid-cols-2">
                    {Eventos.map((event, index) => {
                        return (
                            <Card key={index}
                                EventName={event.NameEvent}
                                EventDescription={event.DescriptionEvent}
                                ImageEvent={event.ImageEvent}
                            />
                        );
                    })}
                </div>
            </div>
            <section className="py-12 mt-32" id="Members">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <p className="p-2 text-lg font-medium tracki text-center uppercase pt-20">Membros EPC</p>
                    <h1 className="text-4xl font-bold leadi text-center sm:text-5xl">A equipe talentosa por trás do código</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait?0" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leadi">pessoa EPC</p>
                                <p>Programador</p>
                            </div>
                            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                                <a href="#" title="Email" className="hover:text-violet-400">
                                    <MdEmail size={25} />
                                </a>
                                <a href="#" title="Twitter" className="hover:text-violet-400">
                                    <BsTwitter size={25} />
                                </a>
                                <a href="#" title="LinkedIn" className="hover:text-violet-400">
                                    <BsLinkedin size={25} />
                                </a>
                                <a href="#" title="GitHub" className="hover:text-violet-400">
                                    <BsGithub size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;