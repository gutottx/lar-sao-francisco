import { Link } from "react-router-dom";
import { Animal } from "../../../../hooks/useAnimals";
import { PawPrint } from "lucide-react";
import { formatAge } from "../../../../utils/formatAge";

interface AnimalProps {
  animal: Animal;
}

export function AnimalDetail({animal}: AnimalProps) {
  return (
    <section>
      {/* ----- Mobile Version */}
      <div className="sm:flex flex-col gap-7 md:hidden">
        <div className="w-[326px] h-[150px]">
          {!animal.images[0] && (
            <PawPrint className="w-full h-full rounded-2xl bg-gray-300 text-gray-100"/>
          )}
          {animal.images[0] && (
            <img 
              src={animal.images[0]} 
              alt={`Foto de ${animal.name}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <span className="font-bold text-[24px]">Max</span>
            <span>2 anos</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold">Personalidade</span>
              <span>{animal.personality}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Porte</span>
              <span>{animal.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Vacinado</span>
              <span>{animal.vaccinated}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Castrado</span>
              <span>{animal.neutered}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-5">
          <a 
            href="http://" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#121417] text-[#121417] px-5 py-2.5 rounded-2xl  font-bold"
          >Quero Adotar</a>
          <Link 
            to='/doacao'
            className="bg-[#121417] text-[#FCFFF5] px-5 py-2.5 rounded-2xl font-bold"
          >Quero Doar</Link>
        </div>
      </div>

      {/* ----- Tablet Version */}
      <div className="md:flex gap-7 hidden">
        <div className="flex flex-col gap-7">
          <div className="w-[326px] h-[150px]">
            {!animal.images[0] && (
              <PawPrint className="w-full h-full rounded-2xl bg-gray-300 text-gray-100"/>
            )}
            {animal.images[0] && (
              <img 
                src={animal.images[0]}
                alt={`Foto de ${animal.name}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`https://wa.me/5515988001704?text=Quero%20adotar%20o%20animal%20${encodeURIComponent(animal.name)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-[#121417] text-[#121417] px-5 py-2.5 rounded-2xl  font-bold"
            >Quero Adotar</a>
            <Link 
              to='/doacao'
              className="bg-[#121417] text-[#FCFFF5] px-5 py-2.5 rounded-2xl font-bold"
            >Quero Doar</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3">
          <div className="flex items-center gap-5">
            <span className="font-bold text-[24px]">{animal.name}</span>
            <span>{formatAge(animal.birthDate)}</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold">Personalidade</span>
              <span>{animal.personality}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Porte</span>
              <span>{animal.size}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Vacinado</span>
              <span>{animal.vaccinated}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Castrado</span>
              <span>{animal.neutered}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
