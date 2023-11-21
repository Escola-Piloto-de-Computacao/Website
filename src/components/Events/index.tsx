import Card from './Card';

//TODO fix the websites links

const eventos = [
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
   /*{
      NameEvent: "2º Campeonato de LOL",
      DescriptionEvent: "em breve...",
      ImageEvent: "/Cardimage.svg",
      EventSiteLink: "https://bing.com",
   }*/
]

const numEventos = eventos.length;

const Events = () => {
   return (
      <div className="grid justify-center lg:h-screen lg:pb-5">
         <div className="grid justify-center items-end" id="Events">
            <h1 className="text-3xl lg:text-5xl font-semibold lg:font-normal text-center mt-28">Eventos</h1>
         </div>
         <div className="grid grid-cols-1 lg:flex lg:flex-wrap pt-10 lg:justify-evenly lg:w-[99vw]"> {/*TODO fix the grid to make it escalable*/}
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