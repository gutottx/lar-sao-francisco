import { useParams } from "react-router-dom";
import { AboutAnimal } from "./components/AboutAnimal";

import { NeedsList } from "./components/NeedsList";
import { useAnimal } from "../../hooks/useAnimals";
import { AnimalDetail } from "./components/AnimalDetail";

export function AnimalPage() {
  const { id } = useParams(); 
  const { data: animal, isLoading, error } = useAnimal(id || "");

  if (isLoading) return <p>Carregando animal...</p>;
  if (error || !animal) return <p>Erro ao carregar animal.</p>;

  return (
    <main className="min-h-screen px-6 md:px-[72px] lg:w-[1085px] m-auto mt-[38px] md:-[44px] lg:-[72px]">
      <div className="flex flex-col gap-[38px] md:gap-[44px] lg:gap-[72px] pb-[38px] md:pb-[44px] lg:pb-[72px]">
        <AnimalDetail animal={animal} />
        <AboutAnimal animal={animal} />
        <NeedsList animal={animal} />
      </div>
    </main>
  )
}