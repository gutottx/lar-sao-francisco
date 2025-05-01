import { Link } from "react-router-dom"

export function MakeDonationSection() {
  return (
    <section className="flex flex-col gap-5 bg-[#FCFFF5] p-5 rounded-[12px]">
      <h2 className="font-bold text-2xl text-[#121417]">Faça uma doação</h2>
      <p>
        Cada animal tem uma necessidade diferente, e você pode ajudar da forma que quiser! Escolha um animal e veja sua lista de necessidades. Doe ração, medicamentos, itens de higiene ou contribua financeiramente. Juntos, fazemos a diferença!
      </p>

      <div className="flex flex-col gap-3">
        <Link className="text-blue-700 font-bold text-right" to='/animais'>Ver todos</Link>
        <div className="flex gap-3.5 flex-wrap">
          <div className="flex flex-col gap-1">
            <img 
              src="/dog.png" 
              alt="imagem do animal" 
              className="w-[154px] md:w-[134px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] rounded-2xl"
            />
            <span className="font-semibold">Milo</span>
          </div>
          <div className="flex flex-col gap-1">
            <img 
              src="/dog.png" 
              alt="imagem do animal" 
              className="w-[154px] md:w-[134px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] rounded-2xl"
            />
            <span className="font-semibold">Milo</span>
          </div>
          <div className="flex flex-col gap-1">
            <img 
              src="/dog.png" 
              alt="imagem do animal" 
              className="w-[154px] md:w-[134px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] rounded-2xl"
            />
            <span className="font-semibold">Milo</span>
          </div>
          <div className="flex flex-col gap-1">
            <img 
              src="/dog.png" 
              alt="imagem do animal" 
              className="w-[154px] md:w-[134px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] rounded-2xl"
            />
            <span className="font-semibold">Milo</span>
          </div>
        </div>
      </div>
    </section>
  )
}