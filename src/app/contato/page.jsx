import { Icon } from "@iconify/react";
import Image from "next/image";
import ico04 from "/public/assets/ico04.png";
function Contato() {
    return ( 
        <>
        <div className="my-10 lg:px-10 items-center flex flex-col justify-center">
            
            <div className="text-black items-center flex flex-col w-fit justify-center">
                
            <div className="text-black items-start px-4 flex flex-col lg:max-w-[1023px] md:max-w-[840px]">
                <h1 className="font-bold text-[32px]">Entre em contato</h1>
                <p>Tem alguma dúvida ou quer saber como ajudar? Fale com a gente! Estamos prontos para conectar você a um novo amigo ou orientar sobre como apoiar nossa causa.</p>
            </div>
                <div className="flex flex-col md:flex-col lg:flex-row lg:justify-center lg:my-10">

                    <div className="flex">
                    <div className="text-black my-5 flex flex-col justify-center p-4 bg-[#DEC8E2] w-full lg:w-[420px] lg:h-[325px] md:h-[325px] gap-4 rounded-2xl">
                        <h2 className="text-center font-bold text-[24px]">ONG Lar São Francisco</h2>
                        <div  className="flex gap-3">
                            <Icon icon="ri:map-pin-fill" height={24} />
                            <p>Av. Flavio Fazano, 293 - Piazza di Roma, Sorocaba/ SP</p>
                        </div>
                        <div  className="flex gap-3">
                            <Icon icon="mdi:clock" height={24}/>
                            <p>Segunda a sábado das 9h às 18h</p>
                        </div>
                        <div className="flex gap-3">
                            <Icon icon="mage:whatsapp-filled" height={24} />
                            <p>(15) 98800-1704</p>
                        </div>
                        <div  className="flex gap-3"> 
                            <Icon icon="mdi-instagram" height={24}/>
                            <p>Instagram</p>
                        </div>
                        <div  className="flex gap-3">
                            <Icon icon="mdi-facebook" height={24}/>
                            <p>Facebook</p>
                        </div>
                    </div>
                        <div className="hidden md:block md:p-10 lg:p-5">
                            <Image src={ico04} alt="Arte de três patinhas de cachorro."></Image>
                        </div>
                    </div>

                        <div className="flex flex-row-reverse">
                            <div className="text-black my-5 flex flex-col justify-center p-4 bg-[#C8E2D5] w-full lg:w-[420px] lg:h-[325px] md:h-[325px] gap-4 rounded-2xl">
                                <h2 className="text-center font-bold text-[24px]">ONG Lar São Francisco</h2>
                                <div  className="flex gap-3">
                                    <Icon icon="ri:map-pin-fill" height={24} />
                                    <p>Rua Major Hermínio de Souza Valle, 101 - Jardim dos Estados, Sorocaba/ SP</p>
                                </div>
                                <div  className="flex gap-3">
                                    <Icon icon="mdi:clock" height={24}/>
                                    <p>Terça a sábado das 14h às 20h</p>
                                </div>
                                <div className="flex gap-3">
                                    <Icon icon="mage:whatsapp-filled" height={24} />
                                    <p>(15)9 8828-7970</p>
                                </div>
                                <div  className="flex gap-3"> 
                                    <Icon icon="mdi-instagram" height={24}/>
                                    <p>Instagram</p>
                                </div>
                                <div  className="flex gap-3">
                                    <Icon icon="mdi-facebook" height={24}/>
                                    <p>Facebook</p>
                                </div>
                            </div>
                            <div className="hidden lg:hidden md:block md:p-10 lg:p-5">
                                    <Image src={ico04} alt="Arte de três patinhas de cachorro."></Image>
                                </div>

                        </div>
                </div>
        </div>
 </div>
        
        </>
     );
}

export default Contato;