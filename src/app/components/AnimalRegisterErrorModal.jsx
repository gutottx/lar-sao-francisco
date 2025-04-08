'use client'
import { Icon } from "@iconify/react";
import Image from "next/image";
import milo3 from '/public/assets/milo3.png';
import ico02red from '/public/assets/ico02red.png';
    function AnimalRegisterErrorModal() {
        return (
            <div>
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 z-50"></div>
                <div className="lg:min-w-[640px] lg:max-h-[570px] max-w-[360px] md:max-w-[700px] w-full lg:h-[400px] h-[500px]  bg-white rounded-lg lg:p-2 md:p-2 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button className="cursor-pointer flex w-full justify-end">
                        <Icon icon="material-symbols:close" height={30} alt="" />
                    </button>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="lg:p-10 p-4 flex w-full flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <Image src={ico02red} width={50} height={50}></Image>
                                <h1 className="text-[32px] font-bold text-center mt-10">Erro ao cadastrar</h1>
                            </div>
                                <p className="text-2xl mb-10">Por favor, tente novamente</p>
                            <div className="flex gap-6 justify-center min-w-[330px]">
                                <button className="text-[#2B9EED] p-2 rounded-3xl font-bold bg-white border cursor-pointer hover:bg-[#F0F0F0]">Ir para Dashboard</button>
                                <button className="text-white p-2 rounded-3xl font-bold bg-[#2B9EED] cursor-pointer hover:bg-[#1E7BBB]">Adicionar outro</button>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        );
    }



export default AnimalRegisterErrorModal;
