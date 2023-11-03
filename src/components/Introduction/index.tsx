const Introduction = () => {
    return (
        <section className="grid grid-cols-12 h-screen mx-10" id="Home">
            <div className="col-start-2 col-span-5 flex flex-col justify-center">
                <h1 className="text-5xl font-normal w-4/6">ESCOLA PILOTO DE COMPUTAÇÃO</h1>
                <p className="text-lg mt-4 w-5/6 text-justify">As Escolas Piloto (EP) são iniciativas de extensão realizadas por estudantes e professores de universidades brasileiras. Esses projetos buscam preencher lacunas de conhecimento que ainda não são abordadas nos currículos tradicionais das instituições de Ensino Superior do país. A EPC busca sintonizar os estudantes com o que há de mais atual na área da computação. Isso correrá por meio de produção de minicursos, organização de palestras com profissionais da área, mesas redondas, treinamentos internos e externos, e pela realização de visitas técnicas.</p>
            </div>
            <div className="col-span-6 flex justify-center items-center">
                <img src="/Team.svg" alt="" className="w-3/4"/>
            </div>
        </section>
    );
};

export default Introduction;