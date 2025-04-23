import { Icon } from "@iconify/react";
import Image from "next/image";

function AddAnimal() {

const handleDelete = () => {
}

const handleAddAnimal = () => {
   
}


return ( 
<>
<div className="text-black">
   <h1 className="text-[32px] font-bold mb-10">Adicionar Animal</h1>
   <div className="lg:max-w-[750px] lg:min-w-[750px] justify-center">
      <h2 className="text-[24px] font-bold">Dados do animal</h2>
      <div className="flex lg:flex-row gap-4 flex-col">
         <div className="w-full flex flex-col">
            <label htmlFor="">Nome do animal</label>
            <input className="rounded-xl bg-white p-3 w-full" type="text" placeholder="Digite o nome do animal" />
         </div>
         <div className="">
            <p>Porte</p>
            <select name="" id="" className="rounded-xl p-3  bg-white w-full lg:w-72">
               <option value="Selecione" disabled>Selecione</option>
               <option value="pequeno">Pequeno</option>
               <option value="medio">Médio</option>
               <option value="grande">Grande</option>
            </select>
         </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 my-4">
         <div className="w-full">
            <p>Personalidade</p>
            <input type="text" className="rounded-xl p-3 bg-white w-full" placeholder="Ex: Brincalhão"/>
         </div>
         <div className="w-full">
            <p>Data de nascimento:</p>
            <input type="date"  className="rounded-xl p-3 bg-white w-full" name="dfdfd" id="" placeholder="16/10/2020s"/>
         </div>
      </div>
      <div className="flex gap-4">
         <input type="checkbox" name="" id="vacinado" />
         Vacinado
         <input type="checkbox" name="" id="castrado" />
         Castrado
         <input type="checkbox" name="" id="adocao" />
         Permitir adoção
      </div>
   </div>
   <div className="lg:max-w-[750px] lg:min-w-[750px] justify-center mt-10">
      <h2 className="text-[24px] font-bold">Perfil:</h2>
      <p>URL da foto do perfil:</p>
      <div className="my-4">
         <p>Personalidade</p>
         <input type="text" className="rounded-xl p-3 bg-white w-full" placeholder="Digite a URL da foto"/>
      </div>
      <div className="my-4">
         <p>História</p>
         <textarea name="" id="" cols="25" rows="8" className="bg-white resize-none w-full rounded-xl p-3" placeholder="Conte a história do animal"></textarea>
      </div>
   </div>
   <div className="max-w-[750px] min-w-[750px justify-center mt-10">
      <h2 className="text-[24px] font-bold">Galeria de imagens:</h2>
      <p>Máximo de quatro imagens:</p>
      <div className="my-5 mb-10 flex gap-2">
         <div className="relative">
            <Image src="/assets/milo2.png" width={155} height={155}></Image>
            <div className="absolute p-1 mt-1.5">
               <button onClick={handleDelete} className="text-red-500 cursor-pointer hover:text-black">
                  <Icon icon="tabler:trash" height={25} alt=""/>
               </button>
            </div>
         </div>
         <div className="relative">
            <Image src="/assets/milo2.png" width={155} height={155}></Image>
            <div className="absolute p-1 mt-1.5">
               <button onClick={handleDelete} className="text-red-500 cursor-pointer hover:text-black">
                  <Icon icon="tabler:trash" height={25} alt=""/>
               </button>
            </div>
         </div>
      </div>
      <label className="text-[#2B9EED] w-fit rounded-2xl bg-transparent border flex gap-2 items-center px-4 p-2 cursor-pointer">
         <Icon icon="material-symbols:upload-sharp" height={20} />
         Adicionar Imagem
         <input type="file" className="hidden" accept="image/*" />
      </label>
   </div>
</div>
<div className="lg:max-w-[750px] lg:min-w-[750px] justify-center mt-10">
   <h2 className="text-[24px] font-bold">Lista de itens</h2>
   <div className="my-4">
      <p>URL da imagem do item:</p>
      <input type="text" className="rounded-xl p-3 bg-white w-full" placeholder="https://linkdaimagem.com.br"/>
   </div>
   <div className="flex gap-4 lg:flex-row flex-col">
      <div className="lg:w-72 flex flex-col">
         <label htmlFor="">Nome do item</label>
         <input className="rounded-xl bg-white p-3 lg:w-72" type="text" placeholder="Coleira" />
      </div>
      <div className="w-full flex flex-col">
         <p>Valor do item:</p>
         <input className="rounded-xl bg-white p-3 w-full" type="text" placeholder="10" />
      </div>
   </div>
   <button className="text-[#2B9EED] w-fit mt-5 rounded-2xl bg-transparent border flex gap-2 items-center px-4 p-2 cursor-pointer">Adicionar Item</button>
   <button onClick={handleAddAnimal} className="text-white mt-10 rounded-2xl bg-[#2B9EED] justify-center text-center border flex gap-2 items-center px-5 w-[200px] p-2 cursor-pointer">Cadastrar Animal</button>
</div>
</>
);
}
export default AddAnimal;