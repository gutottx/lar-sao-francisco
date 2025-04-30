"use client";
import Image from "next/image";
import ico03 from "/public/assets/ico03.png";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function Animal({ id }) {
  const [animal, setAnimal] = useState(null);
  const [counter, setCounter] = useState(0);
  const [activeComponent, setActiveComponent] = useState("default");
  const params = useParams();

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`https://lar-sao-francisco.onrender.com/api/v1/animal/${params.id}`);
        const data = await response.json();
        setAnimal(data);
      } catch (error) {
        console.error("Erro ao buscar o animal:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  if (!animal) return <p className="p-10">Carregando...</p>;

  function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
    return age;
  }

  const handleAdd = () => {};
  const handleMinus = () => {};

  const renderDefault = () => (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 mb-5">
        {animal?.images?.map((image, index) => (
          <Image
            key={index}
            src={image || "https://placehold.co/258"}
            width={200}
            height={300}
            className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl"
            alt={`Imagem do(a) ${animal.name}`}
          />
        ))}
      </div>

      <div>
        <h2 className="font-bold text-[24px] mb-2">Conheça {animal.name}</h2>
        <p>{animal.about || "Este animal ainda não possui uma descrição cadastrada."}</p>
      </div>

      <div className="py-10">
        <h2 className="font-bold text-[24px] mb-4">Lista - {animal.name}</h2>
        <div className="gap-6 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {animal?.needsList?.length > 0 ? (
            animal.needsList.map((item, index) => (
              <div key={item._id || index} className="flex flex-col items-center gap-2">
                <Image
                  unoptimized
                  src={item.image || "https://placehold.co/258"}
                  width={200}
                  height={300}
                  className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl"
                  alt={`Item ${item.name} do(a) ${animal.name}`}
                />
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">R${item.price},00</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 col-span-full">
              Esse animalzinho ainda não tem itens em necessidade por enquanto 😊
            </p>
          )}
        </div>
      </div>
    </>
  );

  const renderDonate = () => (
    <div className="max-w-[800px] py-5 flex flex-col lg:flex-row lg:gap-16 gap-5">
      <div className="flex flex-col gap-2">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="flex lg:w-[420px] w-full justify-between">
            <div className="flex justify-center text-start items-start">
              <Image
                src={"https://placehold.co/89"}
                className="rounded-2xl"
                width={89}
                height={89}
                unoptimized
                alt="Item doado"
              />
              <div className="ml-2 flex flex-col gap-2">
                <p className="font-bold">Item Name</p>
                <p>R$25,00</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Icon onClick={handleMinus} className="bg-[#DEC8E2] rounded-full hover:cursor-pointer" icon="ic:baseline-minus" height={30} />
              <p>{counter}</p>
              <Icon onClick={handleAdd} className="bg-[#C8D5E2] rounded-full hover:cursor-pointer" icon="ic:baseline-plus" height={30} />
            </div>
          </div>
        ))}
        <div className="mt-10">
          <h2 className="font-bold">Doar valor extra</h2>
          <input className="p-3 bg-white rounded-2xl" type="text" placeholder="Valor adicional" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-2xl">Resumo</h2>
        <p>Sub-total: R$85,00</p>
        <p>Valor Extra R$100,00</p>
        <span className="border text-[#61788A] my-2"></span>
        <p className="font-bold mb-5">Total R$ 185,00</p>
        <p>Seu nome:</p>
        <input className="p-3 bg-white rounded-2xl w-[200px]" type="text" placeholder="Seu nome" />
        <button className="bg-[#2B9EED] text-white p-3 rounded-2xl w-[200px] hover:cursor-pointer">Fazer Doação</button>
      </div>
    </div>
  );

  return (
    <div className="text-black flex lg:flex-row flex-col gap-5 p-10 w-full">
      <div className="max-w-[300px] py-5">
        <Image
          src={animal.images[0] || "https://placehold.co/258"}
          unoptimized
          width={200}
          height={300}
          className="max-w-[300px] rounded-3xl"
          alt="Imagem de um cachorro."
        />
        <div className=" lg:flex md:flex gap-3 items-center mt-3">
          <h1 className="text-[24px] font-bold">{animal.name}</h1>
          <p className="capitalize">{animal.gender}</p>
        </div>
        <div className="flex-col gap-2 my-3  lg:flex md:flex">
          <p className="capitalize"><span className="font-bold">Idade:</span> {calculateAge(animal.birthDate)} anos</p>
          <p className="capitalize"><span className="font-bold">Personalidade:</span> {animal.personality}</p>
          <p className="capitalize"><span className="font-bold">Porte:</span> {animal.size}</p>
          <p className="capitalize"><span className="font-bold">Vacinado:</span> {animal.vaccinated ? "Sim" : "Não"}</p>
          <p className="capitalize"><span className="font-bold">Castrado:</span> {animal.neutered ? "Sim" : "Não"}</p>
        </div>
        <div className=" flex md:flex lg:justify-between justify-around mt-5 lg:gap-[10px]">
          <button
            className="p-3 w-fit rounded-3xl border font-bold hover:cursor-pointer"
            onClick={() => setActiveComponent("default")}
          >
            Quero Adotar
          </button>
          <button
            className="p-3 w-fit bg-[#121417] text-white rounded-3xl font-bold hover:cursor-pointer"
            onClick={() => setActiveComponent("donate")}
          >
            Quero doar
          </button>
        </div>
        <Image src={ico03} className="max-w-[200px] mt-10 hidden lg:block md:block" alt="Ícone de uma pata de cachorro." />
      </div>

      <div className="max-w-[800px] py-5">
        {activeComponent === "default" ? renderDefault() : renderDonate()}
      </div>
    </div>
  );
}

export default Animal;
