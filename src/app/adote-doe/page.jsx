"use client"
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function AdoteDoe() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await fetch("https://lar-sao-francisco.onrender.com/api/v1/animal");
        const data = await res.json();
        setAnimals(data);
        setFilteredAnimals(data); // Inicializa com todos
      } catch (err) {
        console.error("Erro ao buscar animais:", err);
      }
    };
    fetchAnimals();
  }, []);

  useEffect(() => {
    const filtered = animals.filter((animal) =>
      animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAnimals(filtered);
  }, [searchTerm, animals]);

  function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age;
  }

  return (
    <>
      <div className="text-black lg:min-w-[1076px] lg:px-44 px-5 flex flex-col justify-center items-start my-10 w-full">
        <div className="w-full flex justify-between">
          <div className="relative">
            <h1 className="font-bold text-[32px] text-center md:text-start lg:text-start">Veja quem espera por um lar</h1>
            <p className="text-center md:text-start lg:text-start mt-2">Cada animal tem uma história e uma necessidade. Você pode ajudá-los com amor, seja adotando ou doando.</p>
          </div>
          <div className="hidden lg:block">
            <Image alt='icon' src="/assets/ico03.png" className="hidden lg:flex top-30 right-40 absolute" width={200} height={258} />
          </div>
        </div>

        <div className="bg-[#F7F3EB] lg:my-10 rounded-2xl lg:min-w-[1076px] w-full">
          <div className="relative w-full md:w-[440px] mt-5">
            <input
              type="text"
              placeholder="Procure pelo nome"
              className="bg-[#E5E8EB] p-4 pl-12 rounded-2xl lg:w-[420px] w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Icon icon="mingcute:search-line" height={24} className="absolute left-4 top-1/2 transform -translate-y-1/2" />
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 lg:grid-cols-5 gap-4 my-3">
            {filteredAnimals.map((animal) => (
              <div
                key={animal._id}
                className="my-5 flex flex-col justify-center items-center cursor-pointer"
                onClick={() => router.push(`/animal/${animal._id}`)}
              >
                <Image unoptimized src={animal.images?.[0] || "https://placehold.co/258"} width={258} height={258} alt={animal.name} />
                <p className="font-bold">{animal.name}</p>
                <div className="flex gap-2">
                  <p>{calculateAge(animal.birthDate)} anos</p>
                  <p>• {animal.sex || "Sexo"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdoteDoe;
