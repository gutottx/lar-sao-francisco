import { Search } from "lucide-react";
import { AnimalCard } from "../../components/AnimalCard";
import { useAnimals } from "../../hooks/useAnimals";
import { useState } from "react";

export function AnimalsPage() {
  const { data: animals, isLoading, error } = useAnimals();
  const [search, setSearch] = useState("");

  const filteredAnimals = animals?.filter(animal =>
    animal.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <p>Carregando animais...</p>;
  if (error) return <p>Erro ao carregar os animais.</p>;

  return(
    <main className="min-h-screen px-6 md:px-[72px] lg:w-[1085px] m-auto mt-[38px] md:-[44px] lg:-[72px] flex flex-col items-start gap-10 md:gap-11 lg:gap-[72px]">
      <div>
        <h2 className="font-bold text-[20px] md:text-[32px] flex flex-col gap-3">Veja quem espera por um lar</h2>
        <p className="md:text-[18px]">Cada animal tem uma história e uma necessidade. Você pode ajudá-los com amor, seja adotando ou doando.</p>
      </div>

      <div className="flex bg-[#E5E8EB] rounded-[12px] px-5 py-2 items-center gap-4">
        <Search color="#61788A"/>
        <input 
          type="text" 
          className="text-[#61788A]"
          placeholder="Procure pelo nome"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        {filteredAnimals?.length ? (
          filteredAnimals.map(animal => (
            <AnimalCard key={animal._id} animal={animal} />
          ))
        ) : (
          <p>Nenhum animal encontrado.</p>
        )}
      </div>
    </main>
  )
}