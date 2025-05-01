import { Link } from "react-router-dom"
import { useAnimals } from "../../../../hooks/useAnimals";
import { PawPrint } from "lucide-react";

export function MakeDonationSection() {
  const { data: animals, isLoading, error } = useAnimals();

  if (isLoading) {
    return <div className="text-center py-10">Carregando animais...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Erro ao carregar animais.</div>;
  }

  return (
    <section className="flex flex-col gap-5 bg-[#FCFFF5] p-5 rounded-[12px]">
      <h2 className="font-bold text-2xl text-[#121417]">Faça uma doação</h2>
      <p>
        Cada animal tem uma necessidade diferente, e você pode ajudar da forma que quiser! Escolha um animal e veja sua lista de necessidades. Doe ração, medicamentos, itens de higiene ou contribua financeiramente. Juntos, fazemos a diferença!
      </p>

      <div className="flex flex-col gap-3">
        <Link className="text-blue-700 font-bold text-right" to='/animais'>Ver todos</Link>
        <div className="flex gap-3.5 flex-wrap">
        {animals?.slice(0,4).map(animal => (
            <Link to={`animais/${animal._id}`} key={animal._id} className="flex flex-col gap-1">
              {!animal.images[0] && (
                <PawPrint className="w-[154px] md:w-[134px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] text-gray-200 rounded-2xl"/>
              )}
              {animal.images[0] && (
                <img 
                  src={animal.images[0]} 
                  alt={animal.name} 
                  className="w-[154px] md:w-[134px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] rounded-2xl"
                />
              )}
              <span className="font-semibold">{animal.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}