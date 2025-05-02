import { Animal } from "../../../../hooks/useAnimals";

interface AnimalProps {
  animal: Animal;
}

export function AboutAnimal({animal}: AnimalProps) {
  return(
    <section>
      <h2 className="font-bold text-[24px]">Conheça {animal.name}</h2>

      <div className="flex flex-col lg:flex-col gap-5">
        <p className="w-full">{animal.about}</p>
        <div className="w-full flex flex-wrap gap-4 lg:flex">
          {animal.images.map((img, i) => (
            <img 
              key={i}
              src={img} 
              alt={`Foto de ${animal.name}`} 
              className="w-[154px] h-[154px] md:w-[136px] md:h-[136px] object-cover rounded-xl" 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
