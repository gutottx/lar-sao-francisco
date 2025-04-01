import { Icon } from "@iconify/react";
import Image from "next/image";
import milo3 from '/public/assets/milo3.png';
function Dashboard() {
    return (
        <>
            <div className="text-black lg:p-10 p-4 gap-5 flex flex-col lg:flex-row  lg:w-fit  w-full">
                <div className="flex w-full lg:flex-col lg:justify-normal justify-center gap-4">
                    <div className="p-2 flex lg:flex-row flex-col items-center lg:gap-5 hover:bg-[#DEC8E2] lg:w-[300px] lg:p-5 rounded-2xl">
                        <Icon icon="material-symbols:home" height={24} alt=""  />
                        <p>Dashboard</p>
                    </div>

                    <div className="p-2 flex lg:flex-row flex-col items-center lg:gap-5  bg-[#DEC8E2] lg:w-[300px] lg:p-5 rounded-2xl">
                        <Icon icon="mdi:cash" height={24} alt=""  />
                        <p>Doações</p>
                    </div>

                    <div className="p-2 flex lg:flex-row flex-col items-center lg:gap-5  hover:bg-[#DEC8E2] lg:w-[300px] lg:p-5  rounded-2xl">
                        <Icon icon="dashicons:pets" height={24} alt=""  />
                        <p>Animais</p>
                    </div>
                </div>
                    <div className="flex justify-end lg:hidden">
                        <button className="bg-[#2B9EED] mt-4 lg:w-fit  px-10 rounded-3xl p-2 box-border text-white font-semibold hover:cursor-pointer">Adicionar animal</button>
                    </div>

                <div className=" w-full justify-center">
                <h1 className="font-bold text-[32px] my-4">Doações recebidas</h1>
                    <div className="flex flex-col gap-10 w-full justify-center items-center">
                        <div className="flex bg-white p-2 gap-4 w-[352px] hover:bg-[#DEC8E2] rounded-2xl border-[#C8E2D5] border">
                            <Image src={milo3} className="rounded-2xl" alt="Imagem de um gato."></Image>
                            <div className="flex flex-col justify-between p-2">
                                <p className="font-medium">Milo</p>
                                <span>R$ 350,00</span>
                            </div>
                        </div>

                    </div>
            
           {/* Dashboard */}
           {/* <div className="flex flex-col gap-10 w-full justify-center items-center">
                <div className="flex gap-2 flex-col lg:flex-row w-full justify-center">
                    <div className="bg-white rounded-2xl justify-between p-4 flex lg:flex-col lg:h-32 lg:w-[213px] border-[#C8E2D5] hover:bg-[#c8e2d57c] gap-4 ">
                        <p>Doações recebidas <br /> neste mês</p>
                        <span className="font-semibold text-[19px]">R$ 1.800,00</span>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex justify-between lg:flex-col lg:h-32 lg:w-[213px] gap-4 border-[#C8E2D5] hover:bg-[#c8e2d57c] border ">
                        <p>Doadores neste mês</p>
                        <span className="font-semibold text-[19px]">25</span>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex justify-between lg:flex-col lg:h-32 lg:w-[213px] gap-4 border-[#C8E2D5] hover:bg-[#c8e2d57c] border ">
                        <p>Animais cadastrados</p>
                        <span className="font-semibold text-[19px]">80</span>
                    </div>
                </div>
            
                <div className="flex lg:gap-4 gap-2 flex-col lg:flex-row lg:justify-normal justify-center items-stretch  w-full">
                        <div className="bg-[#F0F2F5] items-center rounded-2xl p-4 flex  flex-col lg:h-32 lg:w-[213px] gap-4 border-[#C8E2D5] hover:bg-[#c8e2d57c] border">
                            <p className="text-center flex justify-center">Total doações</p>
                            <span className="border w-[80px] flex items-center justify-center"></span>
                            <span className="font-semibold text-[24px]">R$ 1.800,00</span>
                        </div>

                        <div className="bg-[#F0F2F5] items-center rounded-2xl p-4 flex flex-col lg:h-32 lg:w-[213px] gap-4 border-[#C8E2D5] hover:bg-[#c8e2d57c] border">
                            <p className="text-center flex justify-center">Doadores</p>
                            <span className="border w-[80px] flex items-center justify-center"></span>
                            <span className="font-semibold text-[24px]">65</span>
                        </div>
                   </div>
           </div> */}
                </div>
     

            </div>
        </>
      );
}

export default Dashboard;