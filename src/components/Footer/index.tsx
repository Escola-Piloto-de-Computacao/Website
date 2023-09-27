const Footer = () => { //A primeira div feita é bagunça para aumentar a distacia do footer para o resto da página
    return (
        <div className="pt-40"> 
            <footer className="bg-[#04081D]">
                <div className="grid grid-cols-12 py-6 h-44 mx-10">
                    <div className="col-span-3 flex justify-center">
                        <img src="/LogoFooter.png"></img>
                    </div>
                    <div className="col-span-6 text-[#FFFFFF] grid grid-rows-5 h-32">
                        <h3 className="text-center">Contato</h3>
                        <div className="row-start-3 flex justify-center gap-x-4">
                            <img src="/Email.svg" className="w-8 h-6"></img>
                            <p className="w-1/2">escolapilotodecomputacao@gmail.com</p>
                        </div>
                        <div className="row-start-6 flex justify-center gap-x-4">
                            <img src="/Instagram.svg" className="w-8"></img>
                            <a href="https://www.instagram.com/epc_ufersa/#" className="w-1/2 h-6">@epc_ufersa</a>
                        </div>
                    </div>
                    <div className="col-span-3 grid grid-rows-6 h-32">
                        <h3 className="text-center">Localização</h3>
                        <img src="/Localizacao.svg" className="row-start-2 row-end-3 "></img>
                        <p className="text-center row-start-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, maiores vero ad fuga. Temporibus, repudiandae.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

//falta mudar a fonte e cor do texto, linha 22 (colocar imagem no meio)

export default Footer;