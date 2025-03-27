import Image from "next/image";
import ico from "/public/assets/ico01.png";
import ico3 from "/public/assets/ico03.png";
import { Icon } from "@iconify/react";


function Footer() {
    return ( 
        <footer className="bg-[#1E1E1E] w-full flex-col flex items-center justify-center p-5">
            <div className="flex flex-col my-5">
                    <Image src={ico3} width={70} height={70} className="block md:hidden lg:hidden" alt="Ilustração de uma patinha de cachorro."  />
            </div>
             <div className="flex gap-5 my-4">
                 <Icon icon="mdi-facebook" height={24}/>
                <span>Facebook</span>
                 <Icon icon="mdi-instagram" height={24}/>
                <span>Instagram</span>
            </div>
            
            <div className="flex items-center gap-10">
                <Image src={ico} width={70} height={70} className="hidden md:block lg:block" alt="Ilustração de uma patinha de cachorro."/>
                 <div className="flex text-nowrap  items-center justify-center">
                    <Icon icon="ic:baseline-copyright" height={24}/>
                    <p className="text-[14px] lg:text[16px] pl-1">2025 | Grupo DRP05-PJI110-001GRUPO-014 | Univesp</p>
                 </div>
                <Image src={ico} width={70} height={70} className="hidden md:block lg:block" alt="Ilustração de uma patinha de cachorro." />
            </div>
        </footer>
     );
}

export default Footer;