import { Trash2, Upload } from "lucide-react";
import { useState } from "react";

interface Animal {
  name: string;
  size: string;
  personality: string;
  birthDate: string;
  vaccinated: boolean;
  neutered: boolean;
  availableForAdoption: boolean;
  about: string;
}

interface Image {
  id: string;
  url: string;
  file?: File; 
}

interface Item {
  id: string;
  image: string;
  name: string;
  price: number;
  file?: File; 
}

export function AddNewAnimal() {
  const [animal, setAnimal] = useState<Animal>({
    name: "",
    size: "",
    personality: "",
    birthDate: "",
    vaccinated: false,
    neutered: false,
    availableForAdoption: false,
    about: "",
  });

  const [images, setImages] = useState<Image[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<Item>({ id: "", image: "", name: "", price: 0 });
  const [errors, setErrors] = useState<string[]>([]);

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
        file, // Armazena o arquivo para futura integração
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
    } else {
      setErrors(["Preencha todos os campos do item (nome, preço e imagem)."]);
    }
  };

  const handleRemoveItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const validateForm = (): string[] => {
    const newErrors: string[] = [];
    if (!animal.name) newErrors.push("Nome do animal é obrigatório.");
    if (!animal.birthDate) newErrors.push("Data de nascimento é obrigatória.");
    if (!animal.personality) newErrors.push("Personalidade é obrigatória.");
    if (!animal.size) newErrors.push("Porte é obrigatório.");
    if (!animal.about) newErrors.push("História é obrigatória.");
    return newErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    if (formErrors.length > 0) {
      setErrors(formErrors);
      return;
    }

    // Preparar payload compatível com CreateAnimalDto
    const createAnimalDto = {
      name: animal.name,
      birthDate: animal.birthDate,
      personality: animal.personality,
      size: animal.size,
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

    console.log("Payload para cadastro:", {
      createAnimalDto,
      images: imageUrls,
      itemImages: itemImageUrls,
    });

    // Resetar formulário
    setAnimal({
      name: "",
      size: "",
      personality: "",
      birthDate: "",
      vaccinated: false,
      neutered: false,
      availableForAdoption: false,
      about: "",
    });
    setImages([]);
    setItems([]);
    setNewItem({ id: "", image: "", name: "", price: 0 });
    setErrors([]);
  };

  return (
    <div className="p-4 flex flex-col gap-7 w-full md:w-[400px] lg:w-[800px]">
      <h2 className="font-bold text-2xl">Cadastrar um Animal</h2>

      {errors.length > 0 && (
        <div className="bg-red-100 text-red-700 p-3 rounded-xl">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

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

        {/* ----- Cadastrar Animal ----- */}
        <button
          className="text-white my-10 rounded-2xl bg-[#2B9EED] justify-center text-center border flex gap-2 items-center px-5 w-[200px] p-2 cursor-pointer"
          onClick={handleSubmit}
        >
          Cadastrar animal
        </button>
      </div>
    </div>
  );
}
