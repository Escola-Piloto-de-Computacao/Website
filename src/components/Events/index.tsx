import Card from './Card';

let eventos = [
    {
        NameEvent: "CAPCOM",
        DescriptionEvent: "A Semana de Capacitação em Computação da Ufersa promove minicursos de extensão para alunos da UFERSA. Os cursos abrangem tecnologias essenciais, ministrados em sua maioria por alunos do curso. As aulas acontecerão de 29 de novembro a 01 de dezembro, das 14:00PM às 18:00PM, visando complementar a formação dos estudantes. Os tópicos incluem Web Development, Unity, Git, Laravel, PowerBI, Python, R, e Robótica. Essa iniciativa visa enriquecer o conhecimento dos alunos e proporcionar experiência em ensino. Junte-se a nós para adentrar mais ainda no mundo de ciência da computação!",
        ImageEvent: "/capcomLogo.png",
        EventSiteLink: "https://google.com",
    },
    {
        NameEvent: "WTCC IX",
        DescriptionEvent: "O Workshop Técnico-Científico de Computação visa despertar e estimular o interesse dos estudantes de graduação e de Pós-Graduação em Computação na pesquisa científica sobre temas relacionados à ciência da computação. Assim como discutir temas atuais da área que são importantes tanto para estudantes quanto para profissionais de computação.",
        ImageEvent: "/Cardimage.svg",
        EventSiteLink: "https://bing.com",
    },
]

const Events = () => {
    return (
        <div className="w-full grid justify-center h-screen">
            <div id="Events" className="w-full grid justify-center h-full items-end">
                <h1 className="text-4xl font-normal leadi text-center sm:text-5xl mt-28">Eventos</h1>
            </div>
            <div className="w-full grid pt-10 justify-center gap-28 grid-cols-2">
                {eventos.map((event, index) => {
                    return (
                        <Card key={index}
                            EventName={event.NameEvent}
                            EventDescription={event.DescriptionEvent}
                            ImageEvent={event.ImageEvent}
                            EventSiteLink={event.EventSiteLink}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Events;