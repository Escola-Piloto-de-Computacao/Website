const Introduction = () => {
    return (
        <section className="grid grid-cols-12 h-screen mx-10" id="Home">
            <div className="col-start-2 col-span-5 flex flex-col justify-center">
                <h1 className="text-5xl font-normal w-1/2">ESCOLA PILOTO DE COMPUTAÇÃO</h1>
                <p className="text-xl mt-4 w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nibh ipsum, luctus eget tincidunt at, lacinia ac felis. Mauris ultrices mattis ligula, at molestie nibh varius in.</p>
            </div>
            <div className="col-span-6 flex justify-center items-center">
                <img src="/Team.svg" alt="" className="w-3/4"/>
            </div>
        </section>
    );
};

export default Introduction;