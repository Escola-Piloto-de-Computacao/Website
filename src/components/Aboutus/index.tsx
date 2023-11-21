const AboutUs = () => {
   return (
      <section className="lg:grid lg:grid-cols-12 lg:h-screen pt-32 lg:pt-0 xsm:mx-6 lg:mx-10" id="AboutUs">
         <div className="lg:col-start-2 lg:col-span-5 hidden lg:flex lg:justify-center lg:items-center">
            <img src="/Pana.svg" alt="" className="w-3/4" />
         </div>
         <div className="lg:col-start-8 lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-5xl font-semibold lg:font-normal w-auto text-center lg:text-left">Sobre Nós</h1>
            <div className="flex justify-center lg:justify-start">
               <p className="text-lg mt-4 w-5/6 text-justify">A Escola Piloto de Computação teve sua origem em 2019, com a missão de promover eventos e atividades educacionais relacionados à computação e tecnologia. Entretanto, o ano de 2020 apresentou desafios inesperados, com a pandemia de COVID-19 que afetou profundamente a maneira como as atividades presenciais poderiam ser conduzidas. Como resultado, a Escola Piloto de Computação viu-se forçada a interromper suas atividades temporariamente. Em 2023, o projeto está de volta, de nova cara e estamos comprometidos em oferecer uma ampla gama de iniciativas educacionais e eventos que abrangem os mais recentes desenvolvimentos em tecnologia.</p>
            </div>
         </div>
      </section >
   );
};

export default AboutUs;