import { Link } from "react-router-dom";

export function WhoWeAreSection() {
  return (
    <section>
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl text-[#121417]">Quem somos</h2>

        <div className="md:flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="hidden md:w-1/2 md:block">
              <img src="/dog.png" alt="imagem de cachorro" className="w-full rounded-2xl"/>
            </div>
            <div className="grid grid-cols-4 gap-4 w-full md:w-1/2">
              <div className="py-2 rounded-2xl col-span-4 flex flex-col gap-2 items-center bg-[#F2DBD5] text-center">
                <span className="font-bold text-3xl">+1200</span>
                <span className="font-medium text-[18px]">Animais Resgatados</span>
              </div>
              <div className="py-2 rounded-2xl col-span-2 flex flex-col gap-2 items-center bg-[#F2DBD5] text-center">
                <span className="font-bold text-3xl">500</span>
                <span className="font-medium text-[18px]">Adoções</span>
              </div>
              <div className="py-2 rounded-2xl col-span-2 flex flex-col gap-2 items-center bg-[#F2DBD5] text-center">
                <span className="font-bold text-3xl">450</span>
                <span className="font-medium text-[18px]">Doadores</span>
              </div>
              <div className="py-2 rounded-2xl col-span-4 flex flex-col gap-2 items-center bg-[#F2DBD5] text-center">
                <span className="font-bold text-3xl">50</span>
                <span className="font-medium text-[18px]">Voluntários</span>
              </div>
            </div>
          </div>
          <p className="py-3.5">
            Somos a <strong>Lar São Francisco</strong>, uma organização dedicada ao resgate, cuidado e reabilitação de animais em situação de vulnerabilidade. Nosso compromisso é oferecer uma segunda chance para cães e gatos abandonados, garantindo abrigo, alimentação e cuidados veterinários até que encontrem um lar amoroso. 
            <Link 
              className="text-blue-700 font-semibold"
              to='/sobre'> Saiba mais</Link>
          </p>
        </div>
      </div>
    </section>
  )
}