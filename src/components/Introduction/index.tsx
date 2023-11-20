const Introduction = () => {

   const handleButtonClick = () => {
      const eventsElement = document.getElementById('Events');
      eventsElement?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <section className="lg:grid lg:grid-cols-12 lg:h-screen xsm:mx-6 lg:mx-10 xsm:mt-12 lg:mt-0" id="Home">
         <div className="lg:col-start-2 lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-2xl lg:text-5xl font-semibold lg:font-normal w-auto lg:w-4/6 text-center lg:text-start">ESCOLA PILOTO DE COMPUTAÇÃO</h1>
            <div className="flex justify-center lg:justify-start">
               <p className="text-lg mt-4 w-5/6 text-justify">As Escolas Piloto (EP) são iniciativas de extensão realizadas por estudantes e professores de universidades brasileiras. Esses projetos buscam preencher lacunas de conhecimento que ainda não são abordadas nos currículos tradicionais das instituições de Ensino Superior do país. A EPC busca sintonizar os estudantes com o que há de mais atual na área da computação. Isso correrá por meio de produção de minicursos, organização de palestras com profissionais da área, mesas redondas, treinamentos internos e externos, e pela realização de visitas técnicas.</p>
            </div>
            <div className="lg:w-5/6 flex justify-center">
               <button className="bg-sky-500 text-white rounded-md mt-8 py-2 w-60" onClick={handleButtonClick}>Veja nossos eventos!</button>
            </div>
         </div>
         <div className="lg:col-span-6 hidden lg:flex justify-center items-center">
            <img src="/Team.svg" alt="" className="w-3/4" />
         </div>
      </section>
   );
};

export default Introduction;