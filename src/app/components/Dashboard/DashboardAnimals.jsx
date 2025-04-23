import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

function DashboardAnimals({setActiveComponent}) {
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`https://lar-sao-francisco.onrender.com/api/v1/animal/`);
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error("Erro ao buscar o animal:", error);
      }
    };
    
    fetchAnimal();
  }, []);

    const handleEdit = () => {
        setActiveComponent("editanimal");
        setAnimalToEdit(animal);
    }

    const handleDelete = () => {

    }

    if (!animal) return <p className="p-10">Carregando...</p>;
  
    function calculateAge(birthDateString) {
      const birthDate = new Date(birthDateString);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      if (age < 1) {
        const months = (today.getMonth() - birthDate.getMonth() + 12) % 12;
        return `${months} Meses${months !== 1 ? 's' : ''}`;
      } else {
        return `${age} Ano${age !== 1 ? 's' : ''}`;
      }
    }
    return ( 
        <>
         <h1 className="font-bold text-[32px] my-4">Animais Cadastrados</h1>
         <div className=" grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 my-3 items-center lg:min-w-[1076px] w-full">

            {animal.map((animal) => (
                <div className="my-5 flex flex-col justify-center items-center">
                  <div className="relative">
                  <Image unoptimized src={animal.images?.[0] || "https://placehold.co/258"} width={258} height={258} alt={animal.name}/>
                    <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                      <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                      <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                    </div>
                  </div>
                    <p className="font-bold">{animal.name}</p>
                    <div className="flex gap-2">
                      <p>{calculateAge(animal.birthDate)}</p>
                      <p>• Sexo</p>
                    </div>
                </div>
              ))}
             </div>
        </>
     );
}

export default DashboardAnimals;