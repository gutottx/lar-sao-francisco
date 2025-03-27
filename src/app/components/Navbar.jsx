'use client'
import { useState } from "react";
import Image from "next/image";
import logoSF from "/public/assets/logo-sf.png";
import { Icon } from "@iconify/react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="md:flex lg:flex justify-between lg:px-10 p-3 relative bg-white">
                <div className=" flex w-full md:w-auto justify-between  lg:justify-between">
                    <Image src={logoSF} height={82} alt="Logo do Lar São Francisco" className="" />
                    <Icon icon={isMenuOpen ? "material-symbols:close" : "material-symbols:menu-rounded"} height={55} color="#2B9EED" className={`transition-all duration-200z md:hidden lg:hidden ${isMenuOpen ? 'rotate-95' : 'rotate-0'}`} onClick={toggleMenu} />
                </div>
                <div className={`justify-center items-center md:flex flex-col hidden`}>
                    <ul className="text-[#121417] flex gap-5 text-[24px] font-light">
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote / Doe</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li>
                    </ul>
                </div>
                
                <div className={`md:hidden lg:hidden flex justify-center relative items-center flex-col ${!isMenuOpen ? "opacity-0 z-10 pointer-events-none absolute top-0" : "z-10 absolute top-40 opacity-100 duration-[0.3s]"}`}>
                    <ul className="text-[#121417] justify-center gap-10 text-[24px] items-center flex font-light flex-col absolute w-screen z-10 bg-[#F2DBD5] h-[310px] p-4">
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote / Doe</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li>
                    </ul>
                </div>
                
                
                <div className="flex justify-center items-center">
                    <button  className=" hidden md:block lg:block bg-[#2B9EED] font-semibold p-2 rounded-full hover:cursor-pointer hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]">Entrar</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;