const Header = () => {
    return (
        <header className="flex items-center justify-between mx-6 my-4">
          <div>
            <img src="/Logo.svg" alt="" />
          </div>
          <div className="flex gap-7 font-semibold text-xl">
            <a href="" className="hover:text-gray-500">Home</a>
            <a href="#AboutUs" className="hover:text-gray-500">Sobre nós</a>
            <a href="" className="hover:text-gray-500">Eventos</a>
            <a href="" className="hover:text-gray-500">Membros</a>
          </div>
      </header>
    );
}
export default Header;