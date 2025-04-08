import { useState } from "react";
import Image from "next/image";
import milo3 from "/public/assets/milo3.png";
function DashboardDonations() {

    const [donateModal, setDonateModal] = useState(false);
    
    const handleDonateModal = () => {
    setDonateModal(!donateModal);
    }
    
    return ( 
        <>
         {donateModal && <DonateModal handleDonateModal={handleDonateModal} />}
           <div className=" w-full justify-center">
               <h1 className="font-bold text-[32px] my-4">Doações recebidas</h1>
                   <div onClick={handleDonateModal} className="grid grid-cols-1 gap-3 lg:grid-cols-2 md:lg:grid-cols-2 lg:gap-5 justify-center items-center w-full">
                       <div className="flex bg-white p-2 gap-4 lg:w-[352px] hover:bg-[#DEC8E2] rounded-2xl border-[#C8E2D5] border cursor-pointer">
                           <Image src={milo3} className="rounded-2xl" alt="Imagem de um gato."></Image>
                           <div className="flex flex-col justify-between p-2">
                               <p className="font-medium">Milo</p>
                               <span>R$ 350,00</span>
                           </div>
                       </div>
                       <div className="flex bg-white p-2 gap-4 lg:w-[352px] hover:bg-[#DEC8E2] rounded-2xl border-[#C8E2D5] border">
                           <Image src={milo3} className="rounded-2xl" alt="Imagem de um gato."></Image>
                           <div className="flex flex-col justify-between p-2">
                               <p className="font-medium">Milo</p>
                               <span>R$ 350,00</span>
                           </div>
                       </div>
                       <div className="flex bg-white p-2 gap-4 lg:w-[352px] hover:bg-[#DEC8E2] rounded-2xl border-[#C8E2D5] border">
                           <Image src={milo3} className="rounded-2xl" alt="Imagem de um gato."></Image>
                           <div className="flex flex-col justify-between p-2">
                               <p className="font-medium">Milo</p>
                               <span>R$ 350,00</span>
                           </div>
                       </div>
                       <div className="flex bg-white p-2 gap-4 lg:w-[352px] hover:bg-[#DEC8E2] rounded-2xl border-[#C8E2D5] border">
                           <Image src={milo3} className="rounded-2xl" alt="Imagem de um gato."></Image>
                           <div className="flex flex-col justify-between p-2">
                               <p className="font-medium">Milo</p>
                               <span>R$ 350,00</span>
                           </div>
                       </div>

                   </div>
          </div> 
        </>
     );
}

export default DashboardDonations;