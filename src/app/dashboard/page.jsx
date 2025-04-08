'use client';
import { Icon } from "@iconify/react";
import DashboardMenu from "../components/Dashboard/DashboardMenu";
import DashboardDonations from "../components/Dashboard/DashboardDonations";
import DashboardAnimals from "../components/Dashboard/DashboardAnimals";
import { useState } from "react";

function Dashboard() {
    const [activeComponent, setActiveComponent] = useState("dashboard");

    const renderComponent = () => {
        switch (activeComponent) {
            case "dashboard":
                return <DashboardMenu />;
            case "donations":
                return <DashboardDonations />;
            case "animals":
                return <DashboardAnimals />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="text-black lg:p-10 p-4 gap-10 flex flex-col lg:flex-row lg:w-fit w-full">
                <div className="flex w-full lg:w-fit lg:flex-col lg:justify-normal justify-center gap-4">
                    <div 
                        onClick={() => setActiveComponent("dashboard")}
                        className={`p-2 flex lg:flex-row flex-col items-center lg:gap-5 hover:bg-[#DEC8E2] lg:w-[300px] lg:p-5 rounded-2xl cursor-pointer ${activeComponent === "dashboard" ? "bg-[#DEC8E2]" : ""}`}
                    >
                        <Icon icon="material-symbols:home" height={24} />
                        <p>Dashboard</p>
                    </div>

                    <div 
                        onClick={() => setActiveComponent("donations")}
                        className={`p-2 flex lg:flex-row flex-col items-center lg:gap-5 hover:bg-[#DEC8E2] lg:w-[300px] lg:p-5 rounded-2xl cursor-pointer ${activeComponent === "donations" ? "bg-[#DEC8E2]" : ""}`}
                    >
                        <Icon icon="mdi:cash" height={24} />
                        <p>Doações</p>
                    </div>

                    <div 
                        onClick={() => setActiveComponent("animals")}
                        className={`p-2 flex lg:flex-row flex-col items-center lg:gap-5 hover:bg-[#DEC8E2] lg:w-[300px] lg:p-5  rounded-2xl cursor-pointer ${activeComponent === "animals" ? "bg-[#DEC8E2]" : ""}`}
                    >
                        <Icon icon="dashicons:pets" height={24} />
                        <p>Animais</p>
                    </div>
                </div>

                <div className="flex flex-col flex-1">
                    {renderComponent()}
                    <div className="flex justify-end lg:hidden">
                        <button className="bg-[#2B9EED] mt-4 lg:w-fit px-10 rounded-3xl p-2 box-border text-white font-semibold hover:cursor-pointer">
                            Adicionar animal
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
