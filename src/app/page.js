"use client"
import Image from "next/image";
import Link from 'next/link'
import Map from "./components/Map";
import { useRouter } from "next/navigation";
import { useQuery } from '@tanstack/react-query'

async function getAnimals() {
  const res = await fetch('https://lar-sao-francisco.onrender.com/api/v1/animal')
  if (!res.ok) throw new Error('Erro ao buscar animais')
  return res.json()
}

export default function Home() {
  const router = useRouter();

  const { data, isLoading, error } = useQuery({
    queryKey: ['animals', 'all'],
    queryFn: getAnimals,
  })

  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error.message}</p>

  const firstFour = Array.isArray(data) ? data.slice(0, 4) : [];
  const lastFourAvailable = Array.isArray(data) ? data.slice(0, 4) : [];

  return (
    <div>
      <div className="w-full">
        <div className="relative">
          <Image 
            src="/assets/hero-section.png" 
            alt="Banner com animais" 
            className="w-full h-full object-cover hidden md:block lg:block"
            width={5000}
            height={40}
          />
            oi
          <Image 
            src="/assets/hero-section-mb.png" 
            alt="Logo do Lar São Francisco" 
            className="w-full h-full object-cover block md:hidden lg:hidden"
            width={300}
            height={300}
          />
          <div className="absolute inset-0 flex items-center justify-center">  
            <div className="text-white px-4 flex flex-col justify-center items-center">
              <h1 className="md:text-[48px] sm:text-[32px] text-[24px] font-bold text-center">Nos ajude a salvar mais animais</h1>
              <h2 className="md:text-[24px] sm:text-[18px] text-[16px] text-center mt-4 mb-10">Com sua doação, podemos continuar oferecendo abrigo, alimento e tratamento veterinário.</h2>
               <button className="bg-[#2B9EED] p-3 rounded-3xl w-[125px] hover:cursor-pointer hover:bg-[#1a8cd6] transition-colors duration-300">
                  Doar
               </button>
            </div>
          </div>
        </div>
      </div>
     
      <main className="container mx-auto lg:px-64 px-4 text-black">
        <div className="hidden lg:block">
          <h2 className="text-3xl font-bold text-left mt-12 mb-8 hidden lg:block"></h2>
          <div className=" gap-4 justify-center flex">
            
          <div className="lg:flex hidden ">
            <div className="hidden md:flex lg:flex">
              <Image alt='cover' height={528} width={528} src="/assets/dog-image.png" className="object-cover rounded-2xl"></Image>
            </div> 
          </div>
              
          <div className="lg:flex flex-col hidden">
              <div className="lg:w-[531px]">
                <div className="hidden lg:block">
                  <h2  className="text-3xl font-bold text-left items-start w-fit">Quem somos</h2>
                  <p className="my-5">Somos a  <span className="font-bold">Lar São Francisco</span>, uma organização dedicada ao resgate, cuidado e reabilitação de animais em situação de vulnerabilidade.Nosso compromisso é oferecer uma segunda chance para cães e gatos abandonados, garantindo abrigo, alimentação e cuidados veterináriosaté que encontrem um lar amoroso. <span className="font-bold">Saiba mais</span></p> 
                </div>
              </div>

              <div className="gap-4 lg:flex lg:flex-col hidden ">
                <div className="bg-[#F2DBD5] rounded-2xl p-1 items-center px-5 text-center col-span-2 lg:flex justify-between lg:w-[531px]">
                  <span className="font-bold block text-[32px]">+1200</span> Animais resgatados  
                </div>

                <div className="bg-[#F2DBD5] rounded-2xl p-1 items-center px-5 text-center lg:flex justify-between lg:w-[531px]">
                  <span className="font-bold block text-[32px]">300</span> Adoções 
                </div>

                <div className="bg-[#F2DBD5] rounded-2xl p-1 items-center px-5 text-center lg:flex justify-between lg:w-[531px]">
                  <span className="font-bold block text-[32px]">300</span> Doadores
                </div>

                <div className="bg-[#F2DBD5] rounded-2xl  p-1 items-center px-5 text-center col-span-2 lg:flex justify-between lg:w-[531px]">
                  <span className="font-bold block text-[32px]">300</span> Voluntários
                </div>
              </div>
          </div>     
          </div>
        </div>

        <div className="lg:hidden">
          <h2 className="text-3xl font-bold text-left mt-12 mb-8">Quem somos</h2>
          <div className=" gap-4 justify-center md:flex">
            <div className="hidden md:flex lg:flex">
              <Image alt='capa' height={528} width={528} src="/assets/dog-image.png" className="object-cover rounded-2xl"></Image>
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
        </div> 

        <div className="bg-white p-4 my-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-left mb-8">Como ajudar</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div  className="flex flex-col gap-5 justify-between my-5">
            <div className="p-5 md:p-0 lg:p-0">
              <Image alt='capa' src="/assets/donation-help.png" width={508} height={223} className="object-cover w-full hidden lg:block"></Image>
              <Image alt='capa' src="/assets/donation-help-mb.png" width={508} height={223} className="object-cover w-full block lg:hidden"></Image>
            </div>
            <p>Sua doação nos ajuda a fornecer cuidados veterinários e amor para deixar cada patinha feliz.</p>
            <button 
              onClick={() => router.push("/adote-doe")} 
              className="p-4 rounded-3xl border bg-white font-bold hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300 w-full lg:w-fit"
            >
                Quero doar
            </button>
          </div>
          <div className="flex flex-col gap-5 justify-between my-5">
          <div className="p-5 md:p-0 lg:p-0">
            <Image alt='capa' src="/assets/volunteer-help.png" width={508} height={223} className="object-cover w-full hidden lg:block"></Image>
            <Image alt='capa' src="/assets/volunteer-help-mb.png" width={508} height={223} className="object-cover w-full block lg:hidden"></Image>
          </div>
            <p>Junte-se a nós, doe seu tempo e amor e faça parte dessa missão.</p>
            <button onClick={() => router.push("/contato")} className="p-4 rounded-3xl border bg-white font-bold hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300 w-full lg:w-fit">Quero ser voluntário</button>
          </div>
        
          <div className="flex flex-col gap-5 justify-between">
            <div className="p-5 md:p-0 lg:p-0">
              <Image alt='cão' src="/assets/buy-help.png" width={508} height={223} className="object-cover w-full hidden lg:block "></Image>
              <Image alt='cão' src="/assets/buy-help-mb.png" width={508} height={223} className="object-cover w-full block lg:hidden"></Image>
            </div>
            <p><span className="font-black">Compre e Ajude!</span> Cada compra no nosso bazar apoia os animais resgatados.</p>
            <a 
              href="https://www.instagram.com/bazarlarsaofrancisco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-3xl border bg-white font-bold hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300 w-full lg:w-fit"
            >
              Ir para o bazar
            </a>
          </div>
          <div className="p-10 hidden md:flex lg:flex items-center justify-between">
            <Image alt='cão' src="/assets/donation-card.png" width={508} height={223} className="object-cover"></Image>
          </div>
          </div>
        </div>

        <div className="bg-[#FCFFF5] p-4 my-10 rounded-2xl w-full">
          <h2 className="text-3xl font-bold text-left mb-8">Faça uma doação</h2>
          <p>Cada animal tem uma necessidade diferente, e você pode ajudar da forma que quiser! Escolha um animal e veja sua lista de necessidades. Doe ração, medicamentos, itens de higiene ou contribua financeiramente. Juntos, fazemos a diferença!</p>
          
          <div className="flex flex-col mt-7">
            <Link href='/adote-doe' className="text-[#2B9EED] font-semibold hover:cursor-pointer text-end">Ver todos</Link>
            <div className="md:flex grid grid-cols-2 gap-5 my-3">
              {firstFour.map(animal => (
                <div key={animal.id}>
                  <Image alt={`Foto de ${animal.name}`} src={animal.images[0]} width={200} height={200}/>
                  <p className="font-bold">{animal.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#FCFFF5] p-4 my-10 rounded-2xl w-full">
          <h2 className="text-3xl font-bold text-left mb-8">Adote um animalzinho</h2>
          <p>Cada doação salva duas vidas: a do animal que ganha um lar e a do próximo que podemos regatar. Conheça nossos resgatados e encontre um novo companheiro.</p>
          <div className="flex flex-col mt-7">
            <Link href='/adote-doe' className="text-[#2B9EED] font-semibold hover:cursor-pointer text-end">Ver todos</Link>
            <div className="md:flex grid grid-cols-2 gap-5 my-3">
              {lastFourAvailable.map(animal => (
                <div key={animal.id}>
                  <Image alt={`Foto de ${animal.name}`} src={animal.images[0]} width={200} height={200}></Image>
                  <p className="font-bold">{animal.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      <Map />
      </main>
    </div>
  );
}
