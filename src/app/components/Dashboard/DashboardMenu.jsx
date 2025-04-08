function Dashboard() {
    return (
        <>
            <div className="flex flex-col gap-10 w-full justify-center items-center">
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
           </div> 
        </>
      );
}

export default Dashboard;