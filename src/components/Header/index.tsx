const Header = () => {
    return (
        <header className="flex items-center justify-between fixed bg-gray-200 w-full z-10">
          <div className="flex items-center gap-7 ml-10 py-3">
            <img src="/Logo.svg" alt="" />
          </div>
          <div className="flex gap-16 font-semibold text-xl mr-10">
            <a href="#Home" className="hover:text-gray-500">Home</a>
            <a href="#AboutUs" className="hover:text-gray-500">Sobre Nós</a>
            <a href="#Events" className="hover:text-gray-500">Eventos</a>
            <a href="#Members" className="hover:text-gray-500">Membros</a>
          </div>
      </header>
    );
}
export default Header;