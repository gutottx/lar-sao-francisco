import { Animal, useAnimals } from "../../../../hooks/useAnimals";
import { AnimalEditCard } from "./AnimalEditCard";

interface AnimalsProps {
  onEditAnimal: (animal: Animal) => void;
}

export function Animals({onEditAnimal}: AnimalsProps) {
  const { data: animals, isLoading, error } = useAnimals();

  if (isLoading) return <p>Carregando animais...</p>;
  if (error) return <p>Erro ao carregar os animais.</p>;
  return(
    <div className="w-full md:w-[400px] lg:w-[800px] p-4 flex flex-col gap-7">
      <h2 className="font-bold text-2xl">Animais Cadastrados</h2>

      <div className="flex gap-2 flex-row flex-wrap">
        {animals?.map(animal => (
          <AnimalEditCard 
            key={animal._id} 
            animal={animal} 
            onEditAnimal={onEditAnimal} 
          />
        ))}
      </div>
    </div>
  )
}
