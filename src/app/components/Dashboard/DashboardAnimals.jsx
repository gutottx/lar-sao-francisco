import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";

function DashboardAnimals() {

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    return ( 
        <>
         <div className=" grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 my-3 items-center lg:min-w-[1076px] w-full">
            
            <div className="my-5 flex flex-col justify-center items-center">
                <div className="relative">
                  <Image src="/assets/milo2.png" width={258} height={258}></Image>
                  <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                    <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                    <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                  </div>
                </div>
                  <p className="font-bold">Milo</p>
                  <div className="flex gap-2">
                    <p>5 meses</p>
                    <p>• macho</p>
                  </div>
              </div>
            <div className="my-5 flex flex-col justify-center items-center">
                <div className="relative">
                  <Image src="/assets/milo2.png" width={258} height={258}></Image>
                  <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                    <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                    <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                  </div>
                </div>
                  <p className="font-bold">Milo</p>
                  <div className="flex gap-2">
                    <p>5 meses</p>
                    <p>• macho</p>
                  </div>
              </div>
            <div className="my-5 flex flex-col justify-center items-center">
                <div className="relative">
                  <Image src="/assets/milo2.png" width={258} height={258}></Image>
                  <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                    <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                    <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                  </div>
                </div>
                  <p className="font-bold">Milo</p>
                  <div className="flex gap-2">
                    <p>5 meses</p>
                    <p>• macho</p>
                  </div>
              </div>
            <div className="my-5 flex flex-col justify-center items-center">
                <div className="relative">
                  <Image src="/assets/milo2.png" width={258} height={258}></Image>
                  <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                    <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                    <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                  </div>
                </div>
                  <p className="font-bold">Milo</p>
                  <div className="flex gap-2">
                    <p>5 meses</p>
                    <p>• macho</p>
                  </div>
              </div>
            <div className="my-5 flex flex-col justify-center items-center">
                <div className="relative">
                  <Image src="/assets/milo2.png" width={258} height={258}></Image>
                  <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                    <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                    <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                  </div>
                </div>
                  <p className="font-bold">Milo</p>
                  <div className="flex gap-2">
                    <p>5 meses</p>
                    <p>• macho</p>
                  </div>
              </div>
            <div className="my-5 flex flex-col justify-center items-center">
                <div className="relative">
                  <Image src="/assets/milo2.png" width={258} height={258}></Image>
                  <div className="absolute top-0 right-1 p-1 bg-[#DEC8E2] rounded-2xl mt-1.5">
                    <button onClick={handleEdit} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:edit" height={25} alt=""/></button> 
                    <button onClick={handleDelete} className="cursor-pointer hover:bg-white"><Icon icon="material-symbols:delete" height={25} alt=""/></button>
                  </div>
                </div>
                  <p className="font-bold">Milo</p>
                  <div className="flex gap-2">
                    <p>5 meses</p>
                    <p>• macho</p>
                  </div>
              </div>
           
  
             </div>
        </>
     );
}

export default DashboardAnimals;