import { Trash2, Upload } from "lucide-react";
import { useState } from "react";

// Interfaces
interface Animal {
  _id: string;
  name: string;
  size: string;
  personality: string;
  birthDate: string;
  vaccinated: boolean;
  neutered: boolean;
  availableForAdoption: boolean;
  about: string;
  images: string[];
  needsList: { _id?: string; image: string; name: string; price: number }[];
}

interface Image {
  id: string;
  url: string;
}

interface Item {
  id: string;
  _id?: string;
  image: string;
  name: string;
  price: number;
}

interface EditAnimalProps {
  animal: Animal;
  onCancel: () => void;
}

export function EditAnimal({ animal: initialAnimal, onCancel }: EditAnimalProps) {
  const [animal, setAnimal] = useState<Animal>({ ...initialAnimal });
  const [images, setImages] = useState<Image[]>(
    initialAnimal.images.map((url, index) => ({ id: `img-${index}`, url })) || []
  );
  const [items, setItems] = useState<Item[]>(
    initialAnimal.needsList.map((item, index) => ({
      id: `item-${index}`,
      _id: item._id,
      image: item.image,
      name: item.name,
      price: item.price,
    })) || []
  );
  const [newItem, setNewItem] = useState<Item>({ id: "", image: "", name: "", price: 0 });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAnimal((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof Animal) => {
    setAnimal((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && images.length < 4) {
      const newImages = Array.from(files).map((file) => ({
        id: crypto.randomUUID(),
        url: URL.createObjectURL(file),
      }));
      setImages((prev) => [...prev, ...newImages].slice(0, 4));
    }
  };

  const handleRemoveImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleAddItem = () => {
    if (newItem.name && newItem.price && newItem.image) {
      setItems((prev) => [...prev, { ...newItem, id: crypto.randomUUID() }]);
      setNewItem({ id: "", image: "", name: "", price: 0 });
    }
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    // Preparar payload compatível com UpdateAnimalDto
    const updateAnimalDto = {
      name: animal.name,
      size: animal.size,
      personality: animal.personality,
      birthDate: animal.birthDate,
      vaccinated: animal.vaccinated,
      neutered: animal.neutered,
      availableForAdoption: animal.availableForAdoption,
      about: animal.about,
      needsList: items.map((item) => ({
        image: item.image,
        name: item.name,
        price: item.price,
      })),
    };

    // Mockar URLs de imagens do animal e itens
    const imageUrls = images.map((img) => img.url);
    const itemImageUrls = items.map((item) => item.image);

    console.log("Payload para atualização:", {
      id: animal._id,
      updateAnimalDto,
      images: imageUrls,
      itemImages: itemImageUrls,
    });

    // Volta para a lista após salvar
    onCancel();
  };

  return (
    <div className="p-4 flex flex-col gap-7 w-full md:w-[400px] lg:w-[800px]">
      <h2 className="font-bold text-2xl">Editar Animal</h2>

      <div className="flex flex-col gap-9 items-end">
        {/* ----- Dados do animal ------ */}
        <div className="w-full justify-center pb-10 border-b-gray-500 border-b">
          <h3 className="text-[24px] font-bold">Dados do animal</h3>
          <div className="flex lg:flex-row gap-4 flex-col">
            <div className="w-full flex flex-col">
              <label htmlFor="name">Nome do animal</label>
              <input
                className="rounded-xl bg-white p-3 w-full"
                type="text"
                name="name"
                value={animal.name}
                onChange={handleInputChange}
                placeholder="Digite o nome do animal"
              />
            </div>

            <div className="">
              <p>Porte</p>
              <select
                className="rounded-xl p-3 bg-white w-full lg:w-72"
                name="size"
                value={animal.size}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="pequeno">Pequeno</option>
                <option value="medio">Médio</option>
                <option value="grande">Grande</option>
              </select>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-4 my-4">
            <div className="w-full">
              <p>Personalidade</p>
              <input
                type="text"
                className="rounded-xl p-3 bg-white w-full"
                name="personality"
                value={animal.personality}
                onChange={handleInputChange}
                placeholder="Ex: Brincalhão"
              />
            </div>
            <div className="w-full">
              <p>Data de nascimento:</p>
              <input
                type="date"
                className="rounded-xl p-3 bg-white w-full"
                name="birthDate"
                value={animal.birthDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={animal.vaccinated}
                onChange={() => handleCheckboxChange("vaccinated")}
              />
              Vacinado
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={animal.neutered}
                onChange={() => handleCheckboxChange("neutered")}
              />
              Castrado
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={animal.availableForAdoption}
                onChange={() => handleCheckboxChange("availableForAdoption")}
              />
              Permitir adoção
            </label>
          </div>
        </div>

        {/* ----- História do animal ------ */}
        <div className="w-full justify-center pb-10 border-b-gray-500 border-b">
          <h2 className="text-[24px] font-bold">História:</h2>
          <div className="my-4">
            <textarea
              className="bg-white resize-none w-full rounded-xl p-3"
              name="about"
              value={animal.about}
              onChange={handleInputChange}
              placeholder="Conte a história do animal"
              rows={5}
            />
          </div>
        </div>

        {/* ----- Galeria de imagens ------ */}
        <div className="w-full justify-center pb-10 border-b-gray-500 border-b">
          <h2 className="text-[24px] font-bold">Galeria de imagens:</h2>
          <p>Máximo de quatro imagens:</p>
          <div className="my-5 mb-10 flex gap-2 flex-wrap">
            {images.map((image) => (
              <div key={image.id} className="relative">
                <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]">
                  <img
                    src={image.url}
                    alt="Imagem do animal"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <button
                  className="absolute top-0 right-0 p-1 text-red-500 hover:text-black"
                  onClick={() => handleRemoveImage(image.id)}
                >
                  <Trash2 size={25} />
                </button>
              </div>
            ))}
          </div>
          <label className="text-[#2B9EED] w-fit rounded-2xl bg-transparent border border-[#2B9EED] hover:bg-blue-100 flex gap-2 items-center px-4 p-2 cursor-pointer">
            <Upload size={20} />
            Adicionar Imagem
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleAddImage}
            />
          </label>
        </div>

        {/* ----- Lista de itens ------ */}
        <div className="w-full justify-center pb-10 border-b-gray-500 border-b">
          <h2 className="text-[24px] font-bold">Lista de itens</h2>
          <div className="mt-5 flex flex-wrap gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center mb-2 p-2 bg-white rounded-xl shadow"
              >
                <div className="w-[100px] h-[100px] relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-bold">{item.name}</p>
                  <p>Preço: R${item.price.toFixed(2)}</p>
                </div>
                <button
                  className="text-red-500 hover:text-black mt-2"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <Trash2 size={25} />
                </button>
              </div>
            ))}
          </div>
          <div className="my-4">
            <p>URL da imagem do item:</p>
            <input
              type="text"
              className="rounded-xl p-3 bg-white w-full"
              value={newItem.image}
              onChange={(e) => setNewItem((prev) => ({ ...prev, image: e.target.value }))}
              placeholder="https://linkdaimagem.com.br"
            />
          </div>
          <div className="flex gap-4 lg:flex-row flex-col">
            <div className="lg:w-72 flex flex-col">
              <label htmlFor="itemName">Nome do item</label>
              <input
                className="rounded-xl bg-white p-3 lg:w-72"
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Exemplo: Coleira"
              />
            </div>
            <div className="w-full flex flex-col">
              <p>Valor do item:</p>
              <input
                className="rounded-xl bg-white p-3 w-full"
                type="number"
                value={newItem.price || ""}
                onChange={(e) =>
                  setNewItem((prev) => ({ ...prev, price: parseFloat(e.target.value) || 0 }))
                }
                placeholder="10"
              />
            </div>
          </div>
          <button
            className="text-[#2B9EED] w-fit mt-5 rounded-2xl bg-transparent border border-[#2B9EED] hover:bg-blue-100 flex gap-2 items-center px-4 p-2 cursor-pointer"
            onClick={handleAddItem}
          >
            Adicionar Item
          </button>
        </div>

        {/* ----- Botões de Ação ----- */}
        <div className="flex gap-4">
          <button
            className="text-white my-10 rounded-2xl bg-[#2B9EED] justify-center text-center border flex gap-2 items-center px-5 w-[200px] p-2 cursor-pointer"
            onClick={handleSubmit}
          >
            Salvar alterações
          </button>
          <button
            className="text-[#2B9EED] my-10 rounded-2xl bg-transparent border border-[#2B9EED] hover:bg-blue-100 flex gap-2 items-center px-5 w-[200px] p-2 cursor-pointer"
            onClick={onCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
