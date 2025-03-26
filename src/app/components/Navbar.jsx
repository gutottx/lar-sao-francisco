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
            <nav className="md:flex lg:flex justify-between lg:px-10 p-3 relative bg-[#E5E8EB]">
                <div className=" flex justify-between w-full lg:w-auto lg:justify-normal">
                    <Image src={logoSF} height={82} alt="Logo do Lar São Francisco" className="" />
                    <Icon icon="material-symbols:menu-rounded" height={50} color="#2B9EED" className="md:hidden lg:hidden" onClick={toggleMenu}/>
                </div>
                <div className={`justify-center items-center md:flex flex-col hidden`}>
                    <ul className="text-[#121417] flex gap-5 text-[24px] font-light">
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote/ Doe</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li>
                    </ul>
                </div>
                
                <div className={`justify-center items-center flex flex-col ${ !isMenuOpen ? "hidden pointer-events-none"  : "block" }`}> 
                    <ul className="text-[#121417]  gap-5 text-[24px] items-center flex font-light flex-col absolute z-10 bg-white w-full top-26 p-3 h-auto">
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote/ Doe</li>
                        <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li>
                    </ul>
                </div>
                
                
                <div className="flex justify-center items-center">
                    <button className="hidden md:block lg:block bg-[#2B9EED] font-semibold p-2 rounded-full hover:cursor-pointer hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]">Entrar</button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;