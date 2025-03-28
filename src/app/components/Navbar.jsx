'use client'
import { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import logoSF from "/public/assets/logo-sf.png";
import { Icon } from "@iconify/react";
import { usePathname } from 'next/navigation';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

    };
    
    const pathname = usePathname();


    return (
        <div>
            {/* Navbar principal */}
            <nav className="md:flex lg:flex justify-between lg:px-10 p-3 relative bg-white z-50 shadow-md">
                <div className="flex w-full md:w-auto justify-between">
                    <Image src={logoSF} height={82} alt="Logo do Lar São Francisco" />
                    <Icon icon={isMenuOpen ? "material-symbols:close" : "material-symbols:menu-rounded"} height={55} color="#2B9EED" className={`transition-all duration-200z md:hidden lg:hidden ${isMenuOpen ? 'rotate-95' : 'rotate-0'}`} onClick={toggleMenu} />
                </div>

                {/* Menu desktop */}
                <div className="hidden md:flex flex-col items-center justify-center">
                        <ul className="text-[#121417] flex gap-5 text-[24px] font-light">
                        {pathname !== '/' && (
                        <Link href={'/'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Home</li></Link>)}
                        <Link href={'/about'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li></Link>
                        <Link href={'/adote-doe'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote / Doe</li></Link>
                        <Link href={'/contato'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li></Link>
                    </ul>
                </div>
                <div className="hidden md:flex justify-center items-center  ">
                    <button className="bg-[#2B9EED] font-semibold p-2 rounded-full hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]">Entrar</button>
                </div>
            </nav>

            <div className={`absolute w-full h-[300px] bg-[#F2DBD5] flex flex-col items-center justify-center z-40 transition-all duration-300 
                 ${!isMenuOpen 
                     ? "top-[-100vh] pointer-events-auto" 
                     : "opacity-100 top-[105px] pointer-events-auto"}`}>

                <ul className="text-[#121417] text-[24px] font-light flex flex-col gap-10">
                {pathname !== '/' && (
                    <Link onClick={toggleMenu} href={'/'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Home</li></Link>)}
                    <Link onClick={toggleMenu} href={'/about'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Sobre</li></Link>
                    <Link onClick={toggleMenu} href={'/adote-doe'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Adote / Doe</li></Link>
                    <Link onClick={toggleMenu} href={'/contato'}><li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">Contato</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
