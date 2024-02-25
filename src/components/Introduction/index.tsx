import React from 'react';
import team from '../../Assets/Team.svg';

const Introduction = () => {

   const handleButtonClick = () => {
      const eventsElement = document.getElementById('Events');
      eventsElement?.scrollIntoView({ behavior: "smooth" });
   };

   return (
      <section className="pt-10 lg:grid lg:grid-cols-12 lg:h-[46rem] xsm:mx-6 lg:mx-10 mt-4" id="Home"> {/* The size of the screens must be 115vh on lg for the space that would be the header */}
         <div className="lg:col-start-2 lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-5xl font-semibold lg:font-normal w-auto lg:w-4/6 text-center lg:text-start">ESCOLA PILOTO DE COMPUTAÇÃO</h1>
            <div className="flex justify-center lg:justify-start">
               <p className="text-lg mt-4 w-5/6 text-justify">As Escolas Piloto (EP) são iniciativas de extensão realizadas por estudantes e professores de universidades brasileiras. Esses projetos buscam preencher lacunas de conhecimento que ainda não são abordadas nos currículos tradicionais das instituições de Ensino Superior do país. A EPC busca sintonizar os estudantes com o que há de mais atual na área da computação. Isso correrá por meio de produção de minicursos, organização de palestras com profissionais da área, mesas redondas, treinamentos internos e externos, e pela realização de visitas técnicas.</p>
            </div>
            <div className="lg:w-5/6 flex justify-center space-x-4">
               <button className="bg-sky-500 text-white rounded-md mt-8 py-2 w-60 text-lg lg:text-base" onClick={handleButtonClick}>Veja nossos eventos!</button>
               <button
               type="button"
               data-te-ripple-init
               data-te-ripple-color="light"
               className=" mt-9 px-6 mb-1 inline-block rounded-full p-2 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  style={{ backgroundColor: '#c13584' }}
               onClick={() => window.open('https://www.instagram.com/epc_ufersa/#', '_blank')}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                     d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
            </button>
            </div>
         </div>
         <div className="lg:col-span-6 hidden lg:flex justify-center items-center">
            <img src={team} alt="" className="w-3/4" />
         </div>
      </section>
   );
};

export default Introduction;