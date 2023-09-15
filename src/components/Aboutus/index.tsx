const AboutUs = () => {
    return (
        <section className="grid grid-cols-12 h-screen" id="AboutUs">
            <div className="col-start-2 col-span-5 flex justify-center items-center">
                <img src="/Pana.svg" alt="" className="w-3/4"/>
            </div>
            <div className="col-start-8 col-span-5 flex flex-col justify-center">
                <h1 className="text-5xl font-normal w-1/2">Sobre Nós</h1>
                <p className="text-xl mt-4 w-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nibh ipsum, luctus eget tincidunt at, lacinia ac felis. Mauris ultrices mattis ligula, at molestie nibh varius in.</p>
            </div>
        </section>
    );
};

export default AboutUs;