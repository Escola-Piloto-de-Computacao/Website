import AboutUs from "./components/Aboutus";
import Card from "./components/Event";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import { MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
let Eventos = [
    {
        NameEvent: "Nome do Evento",
        DescriptionEvent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nibh ipsum, luctus eget tincidunt at, lacinia ac felis. Mauris ultrices mattis ligula, at molestie nibh varius in.",
        ImageEvent: "/Cardimage.svg"
    },
    {
        NameEvent: "Nome do Evento",
        DescriptionEvent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nibh ipsum, luctus eget tincidunt at, lacinia ac felis. Mauris ultrices mattis ligula, at molestie nibh varius in.",
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
                <div className="w-full grid pt-20 justify-center gap-7 grid-cols-2">
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
            <section className="py-12" id="Members">
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
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full " src="https://source.unsplash.com/100x100/?portrait?1" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leadi">pessoa EPC</p>
                                <p>Visual Designer</p>
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
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leadi">pessoa EPC</p>
                                <p>Visual Designer</p>
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
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leadi">pessoa EPC</p>
                                <p>Visual Designer</p>
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
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leadi">pessoa EPC</p>
                                <p>Visual Designer</p>
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
                        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-[#1F2937] text-white">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <div className="flex-1 my-4">
                                <p className="text-xl font-semibold leadi">pessoa EPC</p>
                                <p>Visual Designer</p>
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