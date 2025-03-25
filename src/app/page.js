import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import banner from "/public/assets/hero-section.png";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <div className="relative">
          <Image src={banner} alt="Logo do Lar São Francisco" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">  
            <div className="text-white px-4 flex flex-col justify-center items-center">
              <h1 className="md:text-[48px] sm:text-[32px] text-[24px] font-bold text-center">Nos ajude a salvar mais animais</h1>
              <h2 className="md:text-[24px] sm:text-[18px] text-[16px] text-center mt-4">Com sua doação, podemos continuar oferecendo abrigo, alimento e tratamento veterinário.</h2>
               <button className="bg-[#2B9EED] p-3 rounded-3xl w-[125px] hover:cursor-pointer">
                  Doar
               </button>
            </div>
          </div>
        </div>
      </div>
     
      <main className="container mx-auto px-4 text-black">
          <h2 className="text-3xl font-bold text-left mt-12 mb-8">Quem somos</h2>
        <div className=" gap-4 justify-center md:flex">
          <div className="hidden md:flex lg:flex">
            <Image height={528} width={528} src="/assets/dog-image.png" className="object-cover rounded-2xl"></Image>
          </div>
            
            <div className="grid grid-rows-[auto,1fr,auto] grid-cols-2 gap-4 lg:flex lg:flex-col">
              <div className="bg-[#F2DBD5] rounded-2xl p-4 text-center col-span-2 lg:flex justify-between lg:w-[531px]">
                <span className="font-bold block text-[32px]">+1200</span> Animais resgatados  
              </div>

              <div className="bg-[#F2DBD5] rounded-2xl p-4 text-center lg:flex justify-between lg:w-[531px]">
                <span className="font-bold block text-[32px]">300</span> Adoções 
              </div>
              <div className="bg-[#F2DBD5] rounded-2xl p-4 text-center lg:flex justify-between lg:w-[531px]">
                <span className="font-bold block text-[32px]">300</span> Doadores
              </div>

              <div className="bg-[#F2DBD5] rounded-2xl p-4 text-center col-span-2 lg:flex justify-between lg:w-[531px]">
                <span className="font-bold block text-[32px]">300</span> Voluntários
              </div>
            </div>

        
        
        </div>
        <div>
              <p className="my-5">
                Somos a  <span className="font-bold">Lar São Francisco</span>, uma organização dedicada ao resgate, cuidado e reabilitação de animais em situação de vulnerabilidade.
                Nosso compromisso é oferecer uma segunda chance para cães e gatos abandonados, garantindo abrigo, alimentação e cuidados veterinários
                até que encontrem um lar amoroso. 
              </p> 
              <span className="font-bold">Saiba mais</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
