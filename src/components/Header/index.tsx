import { MdHome } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import Hamburger from "../Hamburger";
import epciconsemfundo from '../../Assets/epc-icon-semfundo.png';
import logo from '../../Assets/Logo.svg';

export const refs = [
   {
      title: "Home",
      href: "#Home",
      Icon: MdHome,
   },
   {
      title: "Sobre Nós",
      href: "#AboutUs",
      Icon: FaLightbulb,
   },
   {
      title: "Eventos",
      href: "#Events",
      Icon: MdEvent,
   },
   {
      title: "Membros",
      href: "#Members",
      Icon: IoPeopleSharp,
   },
];

const Header = () => {
   return (
      <header className="lg:flex lg:justify-center lg:pt-4">
         <Hamburger />
         <div className="lg:hidden flex justify-end mt-4 px-6">    
            <img src={epciconsemfundo} alt="Logo da EPC" className="w-11 mr-2 " />
         </div>
         <div className="hidden lg:flex items-center justify-between fixed bg-gray-200 w-3/4 z-10 rounded-xl">
            <div className="flex items-center gap-7 ml-10 py-3">
               <img src={logo} alt="Logo da EPC" />
            </div>
            <div className="flex gap-24 font-semibold text-xl mr-10">
               {refs.map((ref) => (
                  <a href={ref.href} className="hover:text-gray-500">
                     {ref.title}
                  </a>
               ))}
            </div>
         </div>
      </header>
   );
}

export default Header;