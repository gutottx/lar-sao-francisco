'use client'
import { Icon } from "@iconify/react";
import Image from "next/image";
import milo3 from '/public/assets/milo3.png';

    function DonateModal({ handleDonateModal }) {
        return (
            <div>
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-40 z-50"></div>
                <div className="lg:min-w-[640px] lg:max-h-[570px] max-w-[360px] md:max-w-[700px] w-full  bg-white rounded-lg lg:p-2 md:p-2 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button onClick={handleDonateModal} className="cursor-pointer flex w-full justify-end">
                        <Icon icon="material-symbols:close" height={30} alt="" />
                    </button>
                    <div className="lg:p-10 p-4">
                    <div className="flex bg-white p-2 gap-4 lg:w-[352px] hover:bg-[#DEC8E2] rounded-2xl border-[#C8E2D5] border mb-10">
                            <Image src={milo3} className="rounded-2xl" alt="Imagem de um gato."></Image>
                            <div className="flex flex-col justify-between p-2">
                                <p className="font-medium">Milo</p>
                                <span>R$ 350,00</span>
                            </div>
                        </div>
                        <table className="w-full">
                            <thead className="items-start">
                                <tr className="w-full">
                                    <th className="text-start">Data</th>
                                    <th className="text-start">Quem doou</th>
                                    <th className="text-start">Valor</th>
                                </tr>
                            </thead>
                            <tbody className="lg:mt-4"> 
                                <tr className="border-b">
                                    <td>2021-09-01</td>
                                    <td>John Doe</td>
                                    <td>R$ 350,00</td>
                                </tr>
                                <tr className="border-b">
                                    <td>2021-09-01</td>
                                    <td>John Doe</td>
                                    <td>R$ 350,00</td>
                                </tr>
                                <tr className="border-b">
                                    <td>2021-09-01</td>
                                    <td>John Doe</td>
                                    <td>R$ 350,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }



export default DonateModal;
