import { PawPrint } from "lucide-react"
import { Animal } from "../../../../hooks/useAnimals"

type DonationCartItemProps = {
  animal:Animal
  onClick: () => void
}

export function DonationCartItem({animal, onClick}:DonationCartItemProps ) {
  return(
    <div 
      className="flex flex-row gap-5 bg-white rounded-2xl p-2 w-[220px] lg:w-[300px] border cursor-pointer hover:border-blue-500"
      onClick={onClick}
    >
      <div>
          {!animal.images[0] && (
            <PawPrint className="border w-[88px] h-[80px] text-gray-200 rounded-2xl"/>
          )}
          {animal.images[0] && (
            <img 
              src={animal.images[0]} 
              alt={animal.name}
              className="w-[88px] h-[88px] rounded-2xl object-cover"
            />
          )}
      </div>   
      <div className="flex flex-col gap-5">
        <span className="font-semibold text-lg">{animal.name}</span>
        <span className="semibold">R$555,00</span>
      </div>
    </div>
  )
}
