import { Link } from "react-router-dom"
import { Animal } from "../../hooks/useAnimals"
import { PawPrint } from "lucide-react"
import { formatAge } from "../../utils/formatAge"

interface AnimalCardProps {
  animal: Animal
}

export function AnimalCard({animal}: AnimalCardProps) {
  return(
    <div className="w-[154px] lg:w-[200px] p-1.5 border border-[#FAF4E3] hover:border-blue-500 rounded-2xl transition-all ">
      <Link to={`/animals/${animal._id}`} className="flex flex-col gap-3 p-1" >
        <div className="flex items-center">
          {!animal.images[0] && (
            <PawPrint className="border w-[154px] lg:w-[200px] h-[154px] md:h-[134px] lg:h-[200px] text-gray-200 rounded-2xl"/>
          )}
          {animal.images[0] && (
            <img 
              src="/dog.png" 
              alt={`Foto de ${animal.name}`} 
              className=" rounded-2xl h-[154px] lg:h-[200px]"
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