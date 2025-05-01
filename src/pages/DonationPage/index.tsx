import { useParams } from "react-router-dom";
import { useAnimal } from "../../hooks/useAnimals";
import { CircleX, Minus, PawPrint, Plus } from "lucide-react";
import { useState } from "react";

export function DonationPage() {
  const { id } = useParams(); 
  const { data: animal, isLoading, error } = useAnimal(id || "");

  const [name, setName] = useState("");
  const [extraValue, setExtraValue] = useState(0);
  const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleExtraValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setExtraValue(isNaN(value) ? 0 : value);
  };

  const handleAddItem = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const calculateSubtotal = () => {
    if (!animal?.needsList) return 0;
  
    return animal.needsList.reduce((acc, item) => {
      const quantity = cartItems[item._id] || 0;
      return acc + item.price * quantity;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + extraValue;
  };

  if (isLoading) return <p>Carregando animal...</p>;
  if (error || !animal) return <p>Erro ao carregar animal.</p>;

  return(
    <main className="px-6 md:px-[72px] lg:w-[1085px] m-auto mt-[38px] gap-6 pb-9">
      <section className="flex flex-col gap-5 items-center">
        <div className="w-full">
          <div className=" w-[326px] h-[150px] flex flex-col">
            {!animal.images[0] && (
              <PawPrint className="w-full h-full rounded-lg bg-gray-300 text-gray-100"/>
            )}
            {animal.images[0] && (
              <img 
                src={animal.images[0]} 
                alt={`Foto de ${animal.name}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>
          <span className="font-bold text-[24px]">{animal.name}</span>
        </div>
      </section>

      <div className="flex flex-col md:justify-around md:flex-row gap-5 md:mt-[36px]">
        {/* ----- Add needs items to cart ------ */}
        <section className="flex flex-col gap-5 items-center md:border-r md:pr-11">
          <div className="flex flex-col gap-4">
            {animal.needsList.map(item => (
              <div key={item._id} className="flex items-center gap-7">
                <div className="flex gap-1.5">
                  <div className="w-[88px] h-[88px] rounded-2xl">
                    <img src={item.image} alt={`Imagem ${item.name}`} className="rounded-2xl"/>
                  </div>
                  <div>
                    <div>{item.name}</div>
                    <div>R${item.price},00</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    className="rounded-full p-1 cursor-pointer bg-[#DEC8E2]" 
                    type="button"
                    onClick={() => handleRemoveItem(item._id)}
                  >
                    <Minus size={20}/>
                  </button>
                  <span>{cartItems[item._id] || 0}</span>
                  <button 
                    className="rounded-full p-1 cursor-pointer bg-[#C8D5E2]" 
                    type="button"
                    onClick={() => handleAddItem(item._id)}
                  >
                    <Plus size={20}/>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[240px] flex flex-col gap-2">
            <label htmlFor="extraValue">Doar valor extra:</label>
            <input 
              type="number" 
              placeholder="50" 
              className="bg-white rounded-2xl text-gray-700 py-1 px-4"
              value={extraValue}
              onChange={handleExtraValueChange}
            />
          </div>
        </section>

        {/* ----- Sumary section ----- */}
        <section className="flex flex-col gap-5 items-center">
          <div className="w-[240px]">
            <h3 className="font-bold text-[24px]">Resumo</h3>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-1.5 pb-8 border-b">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#61788A]">Subtotal:</span>
                  <span className="font-bold">R${calculateSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#61788A]">Valor extra:</span>
                  <span className="font-bold">R${extraValue.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-[18px] font-bold">Total:</span>
                <span className="text-[18px] font-bold">R${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="w-[240px] flex flex-col gap-2">
            <label htmlFor="name">Seu nome</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="bg-white rounded-2xl text-gray-700 py-1 px-4"
              placeholder="Seu nome"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <button 
            className="bg-blue-500 text-white rounded-3xl py-1 px-4 hover:bg-blue-600 cursor-pointer"
            onClick={handleOpenModal}
          >
            Fazer doação
          </button>
        </section>      
      </div>

      {/* ----- Modal ----- */}
      {isModalOpen && (
        <div className="fixed top-0 right-0 w-full h-screen bg-black/45 overflow-hidden">
          <div className="p-6 bg-white w-[400px] m-auto flex flex-col items-center gap-4 justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircleX 
              className="hover:text-gray-700 cursor-pointer"
              onClick={handleCloseModal}
            />
            <img src="/qrcode.png" alt="qrcode" />
            
            <div className="flex flex-col items-center">
              <p className="text-center">1. Escaneie o QR Code com o app do seu banco ou copie a chave PIX</p>
              <p className="text-center">2. Insira o valor: <span className="text-[18px] font-bold">R${calculateTotal().toFixed(2)}</span></p>
              <p className="text-center">3. Confirme a transação</p>
            </div>
            <button 
              className="bg-blue-500 text-white rounded-3xl py-1 px-4 hover:bg-blue-600 cursor-pointer"
              onClick={() => {
                handleCloseModal()
              }}
            >
              Finalizar doação
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
