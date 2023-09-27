import AboutUs from "./components/Aboutus";
import Card from "./components/Event";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

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
            <div className="w-full grid justify-center my-8">
                <span className="text-5xl font-normal">Eventos</span>
            </div>
            <div className="w-full grid justify-center gap-7 grid-cols-2">
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
            <Footer />
        </div>
    );
}

export default App;