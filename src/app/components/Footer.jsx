import Image from "next/image";
import ico from "/public/assets/ico01.png";
import ico3 from "/public/assets/ico03.png";
import { Icon } from "@iconify/react";


function Footer() {
    return ( 
        <footer className="bg-[#1E1E1E] w-full flex-col flex items-center justify-center p-5">
             <div className="flex gap-5">
                 <Icon icon="mdi-facebook" height={24}/>
                <span>Facebook</span>
                 <Icon icon="mdi-instagram" height={24}/>
                <span>Instagram</span>
            </div>
            
            <div className="flex items-center gap-5">
                <Image src={ico} width={70} height={70} />
                <p>2025 | Grupo DRP05-PJI110-001GRUPO-014 | Univesp</p>
                <Image src={ico} width={70} height={70} />
            </div>
        </footer>
     );
}

export default Footer;