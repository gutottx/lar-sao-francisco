import Image from "next/image";
import logoSF from "/public/assets/logo-sf.png";

function Navbar() {
    return ( 
        <div>
             <nav className="flex justify-between px-10">
                <div className="">
                    <Image src={logoSF} height={82} alt="Logo do Lar São Francisco" />   
                </div>
                    <div className="justify-center items-center flex">
                    <ul className="text-[#121417] flex gap-5">
                        <li>Sobre</li>
                        <li>Adote/Doe</li>
                        <li>Contato</li>
                     </ul>  
                    </div>
                <div className="flex justify-center items-center">
                     <button className="bg-[#2B9EED] p-2 rounded-2xl">Entrar</button>
                </div>
            </nav>
           
        </div>        
     );
}

export default Navbar;