import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import banner from "/public/assets/hero-section.png";
import Map from "./components/Map";

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
     
      <main className="container mx-auto lg:px-64 text-black">
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
          <p className="my-5">Somos a  <span className="font-bold">Lar São Francisco</span>, uma organização dedicada ao resgate, cuidado e reabilitação de animais em situação de vulnerabilidade.Nosso compromisso é oferecer uma segunda chance para cães e gatos abandonados, garantindo abrigo, alimentação e cuidados veterináriosaté que encontrem um lar amoroso. </p> 
          <span className="font-bold">Saiba mais</span>
        </div>

        <div className="bg-white p-4 my-10 rounded-2xl">
              <h2 className="text-3xl font-bold text-left mb-8">Como ajudar</h2>
          <div className="grid grid-cols-2 gap-3">
            <div  className="flex flex-col gap-5 justify-between">
              <Image src="/assets/donation-help.png" width={508} height={223} className="object-cover w-full"></Image>
              <p>Sua doação nos ajuda a fornecer cuidados veterinários e amor para deixar cada patinha feliz.</p>
              <button className="p-4 rounded-3xl border bg-white font-bold">Quero doar</button>
            </div>
          <div className="flex flex-col gap-5 justify-between">
            <Image src="/assets/volunteer-help.png" width={508} height={223} className="object-cover w-full"></Image>
            <p>Junte-se a nós, doe seu tempo e amor e faça parte dessa missão.</p>
            <button className="p-4 rounded-3xl border bg-white font-bold">Quero doar</button>
          </div>
        
          <div className="flex flex-col gap-5 justify-between">
            <Image src="/assets/buy-help.png" width={508} height={223} className="object-cover w-full"></Image>
            <p><span className="font-black">Compre e Ajude!</span> Cada compra no nosso bazar apoia os animais resgatados.</p>
            <button className="p-4 rounded-3xl border bg-white font-bold">Quero doar</button>
          </div>
          <div className="p-10">
            <Image src="/assets/donation-card.png" width={508} height={223} className="object-cover"></Image>
          </div>
          </div>
        </div>

        <div className="bg-[#FCFFF5] p-4 my-10 rounded-2xl">
              <h2 className="text-3xl font-bold text-left mb-8">Faça uma doação</h2>
              <p>Cada animal tem uma necessidade diferente, e você pode ajudar da forma que quiser! Escolha um animal e veja sua lista de necessidades. Doe ração, medicamentos, itens de higiene ou contribua financeiramente. Juntos, fazemos a diferença!</p>

            <div className="flex gap-5 my-3">
    
              <div>
                <Image src="/assets/milo.png" width={200} height={200}></Image>
                <p className="font-bold">Milo</p>
              </div>
              
              <div>
                <Image src="/assets/lola.png" width={200} height={200}></Image>
                <p className="font-bold">Milo</p>
              </div>

              <div>
                <Image src="/assets/duke.png" width={200} height={200}></Image>
                <p className="font-bold">Milo</p>
              </div>

              <div>
                <Image src="/assets/max.png" width={200} height={200}></Image>
                <p className="font-bold">Milo</p>
              </div>
              <p className="text-[#2B9EED] font-semibold hover:cursor-pointer">Ver todos</p>
            </div>

            <h2 className="text-3xl font-bold text-left mb-8">Adote um animalzinho</h2>
              <p>Cada doação salva duas vidas: a do animal que ganha um lar e a do próximo que podemos regatar. Conheça nossos resgatados e encontre um novo companheiro.</p>

            <div className="flex gap-5 my-3">

              <div>
                <Image src="/assets/milo2.png" width={200} height={200}></Image>
                <p className="font-bold">Milo</p>
                <div className="flex gap-2">
                  <p>5 meses</p>
                  <p>• macho</p>
                </div>
              </div>
              
              <div>
                <Image src="/assets/duke.png" width={200} height={200}></Image>
                <p className="font-bold">Duke</p>
                <div className="flex gap-2">
                  <p>6 meses</p>
                  <p>• macho</p>
                </div>
              </div>

              <div>
                <Image src="/assets/nina.png" width={200} height={200}></Image>
                <p className="font-bold">Nina</p>
                <div className="flex gap-2">
                  <p>1 ano</p>
                  <p>• fêmea</p>
                </div>
              </div>

              <div>
                <Image src="/assets/gigante.png" width={200} height={200}></Image>
                <p className="font-bold">Gigante</p>
                <div className="flex gap-2">
                  <p>3 anos</p>
                  <p>• macho</p>
                </div>
              </div>
              <p className="text-[#2B9EED] font-semibold hover:cursor-pointer">Ver todos</p>
            </div>

            </div>
      </main>
      <Map />
      <Footer />
    </div>
  );
}
