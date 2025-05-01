import { Link } from "react-router-dom"
import { Animal } from "../../../../hooks/useAnimals"
import { PawPrint, Pencil, Trash2 } from "lucide-react"
import { formatAge } from "../../../../utils/formatAge"

interface AnimalEditCardProps {
  animal: Animal,
  onEditAnimal: (animal: Animal) => void;
}

export function AnimalEditCard({animal, onEditAnimal}: AnimalEditCardProps) {
  return(
    <div className="w-[154px] lg:w-[200px] p-1.5 border border-[#FAF4E3] hover:border-blue-500 rounded-2xl transition-all ">
      <Link to={`/animais/${animal._id}`} className="flex flex-col gap-3 p-1" >
        <div className="relative flex ">
          <div className="absolute top-2 right-3 flex items-center gap-2 bg-pink-100 p-1 rounded-2xl">
            <button 
              type="button" 
              className="cursor-pointer p-1 rounded-2xl hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                onEditAnimal(animal);
              }}
            >
              <Pencil size={18}/>
            </button>
            <button 
              type="button" 
              className="cursor-pointer p-1 rounded-2xl hover:bg-white"
              onClick={(e) => e.preventDefault()}
            >
              <Trash2 size={18}/>
            </button>
          </div>
          {!animal.images[0] && (
            <PawPrint className="border w-[140px] lg:w-[200px] h-[140px] md:h-[134px] lg:h-[200px] text-gray-200 rounded-2xl"/>
          )}
          {animal.images[0] && (
            <img 
              src="/dog.png" 
              alt={`Foto de ${animal.name}`} 
              className=" rounded-2xl w-[140px] h-[140px] object-fill lg:w-[200px] lg:h-[200px]"
            />
          )}
        </div>
        <div className="flex items-center justify-between px-2">
          <span className="font-bold">{animal.name}</span>
          <span>{formatAge(animal.birthDate)}</span>
        </div>
      </Link>
    </div>
  )
}
