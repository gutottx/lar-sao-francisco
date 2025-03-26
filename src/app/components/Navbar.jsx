import Image from "next/image";
import logoSF from "/public/assets/logo-sf.png";

function Navbar() {
    return ( 
        <div>
             <nav className="flex justify-between px-10 p-3">
                <div className="">
                    <Image src={logoSF} height={82} alt="Logo do Lar São Francisco" />   
                </div>
                    <div className="justify-center items-center flex">
                    <ul className="text-[#121417] flex gap-5 text-[24px] font-light">
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote/ Doe</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li>
                     </ul>  
                    </div>
                <div className="flex justify-center items-center">
                     <button className="bg-[#2B9EED] font-semibold p-2 rounded-full hover:cursor-pointer hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]">Entrar</button>
                </div>
            </nav>
           
        </div>        
     );
}

export default Navbar;