import { useState } from "react";

import { Link } from "react-router-dom"
import { Animal } from "../../../../hooks/useAnimals"
import { PawPrint, Pencil, Trash2 } from "lucide-react"
import { formatAge } from "../../../../utils/formatAge"
import { useDeleteAnimal } from "../../../../hooks/useDeleteAnimal";

interface AnimalEditCardProps {
  animal: Animal,
  onEditAnimal: (animal: Animal) => void;
}

export function AnimalEditCard({animal, onEditAnimal}: AnimalEditCardProps) {
  const { mutate: deleteAnimal, isPending } = useDeleteAnimal();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleDelete = () => {
    deleteAnimal(animal._id);
    setIsConfirmOpen(false);
  };
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
              disabled={isPending}
            >
              <Pencil size={18}/>
            </button>
            <button 
              type="button" 
              className="cursor-pointer p-1 rounded-2xl hover:bg-white"
              onClick={(e) => {
                e.preventDefault();
                setIsConfirmOpen(true);
              }}
              disabled={isPending}
            >
              <Trash2 size={18}/>
            </button>
          </div>
          {!animal.images[0] && (
            <PawPrint className="border w-[140px] lg:w-[200px] h-[140px] md:h-[134px] lg:h-[200px] text-gray-200 rounded-2xl"/>
          )}
          {animal.images[0] && (
            <img 
              src={animal.images[0]}
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

      {/* Modal de Confirmação */}
      {isConfirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 bg-opacity-50 z-20">
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
            <h3 className="font-bold text-lg">Confirmar Exclusão</h3>
            <p>Deseja realmente excluir o animal "{animal.name}"? Esta ação não pode ser desfeita.</p>
            <div className="flex gap-4 justify-end">
              <button
                className="text-[#2B9EED] border border-[#2B9EED] px-4 py-2 rounded-2xl hover:bg-blue-100"
                onClick={() => setIsConfirmOpen(false)}
                disabled={isPending}
              >
                Cancelar
              </button>
              <button
                className="text-white bg-red-500 px-4 py-2 rounded-2xl hover:bg-red-600 disabled:opacity-50"
                onClick={handleDelete}
                disabled={isPending}
              >
                {isPending ? "Excluindo..." : "Excluir"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
