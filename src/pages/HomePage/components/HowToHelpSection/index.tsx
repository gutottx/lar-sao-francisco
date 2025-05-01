import { Link } from "react-router-dom";

export function HowToHelpSection() {
  return (
    <section className="flex flex-col gap-5 bg-white p-5 rounded-[12px]">
      <h2 className="font-bold text-2xl text-[#121417]">Como ajudar</h2>
      <div className="flex flex-col md:flex-row  flex-wrap gap-6 items-center ">
        {/* ----- Donation ----- */}
        <div className="w-[400px] lg:w-[420px] flex flex-col gap-4 items-center">
          <div className="rounded-3xl">
            <div className="lg:flex-row-reverse rounded-2xl w-[240px] sm:w-[290px] lg:w-[400px] h-[240px] sm:h-[290px] lg:h-[230px] font-bold bg-[#DED7F6] flex flex-col items-center justify-between pt-2 lg:pr-2.5">
              <p className="text-[20px]">Faça uma doação</p>
              <img src="/dog-1.png" alt="Foto de cachorro" className="w-fit" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-center">Sua doação nos ajuda a fornecer cuidados veterinários para deixar cada patinha feliz.</p>
            <Link className='px-5 py-2 rounded-3xl border border-[#1E1E1E] font-medium text-[#1E1E1E]' to='/animais'>Quero doar</Link>
          </div>
        </div>
        
        {/* ----- Volunteer ----- */}
        <div className="w-[320px] lg:w-[420px] flex flex-col gap-4 items-center">
          <div className="rounded-3xl">
            <div className="lg:flex-row-reverse rounded-2xl w-[240px] sm:w-[290px] lg:w-[400px] h-[240px] sm:h-[290px] lg:h-[230px] font-bold bg-[#B2DECA] flex flex-col items-center justify-between pt-2 lg:pr-2.5">
              <p className="text-[20px]">Seja Voluntário</p>
              <img src="/cat.png" alt="Foto de gato" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-center">Junte-se a nós, doe seu tempo e amor e faça parte dessa missão.</p>
            <Link className='px-5 py-2 rounded-3xl border border-[#1E1E1E] font-medium text-[#1E1E1E]' to='/sobre'>Quero ser voluntário</Link>
          </div>
        </div>

        {/* ----- Bazar ----- */}
        <div className="w-[320px] lg:w-[420px] flex flex-col gap-4 items-center">
          <div className="rounded-3xl">
            <div className="lg:flex-row-reverse rounded-2xl w-[240px] sm:w-[290px] lg:w-[400px] h-[240px] sm:h-[290px] lg:h-[190px] font-bold bg-[#F2DBD5] flex flex-col items-center justify-between pt-2 lg:pr-2.5">
              <p className="text-[20px]">Compre em nosso bazar</p>
              <img src="/storve.png" alt="Foto de fogão" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-center"><strong>Compre e Ajude!</strong> Cada compra no nosso bazar apoia os animais resgatados.</p>
            <a 
              href="https://www.instagram.com/bazarlarsaofrancisco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='px-5 py-2 rounded-3xl border border-[#1E1E1E] font-medium text-[#1E1E1E]'
            >Ir para o Bazar</a>
          </div>
        </div>

        <div className="sm:hidden md:block w-[240px] sm:w-[290px] lg:w-[320px] h-[240px] sm:h-[290px] lg:h-[320px] pt-2 ">
          <img src="/paw.svg" alt="Foto de fogão" />
        </div>
      </div>
    </section>
  )
}