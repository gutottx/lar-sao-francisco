'use client'
import { Icon } from "@iconify/react"
import { useState } from "react"
import DashboardMenu from "../components/Dashboard/DashboardMenu"
import DashboardDonations from "../components/Dashboard/DashboardDonations"
import DashboardAnimals from "../components/Dashboard/DashboardAnimals"
import AddAnimal from "../components/Dashboard/AddAnimal"
import EditAnimal from "../components/Dashboard/EditAnimal"

export default function DashboardContent({ user }) {
  const [activeComponent, setActiveComponent] = useState("dashboard")
  const [animalToEdit, setAnimalToEdit] = useState(null)

  const renderDashboard = () => {
    switch (activeComponent) {
      case "dashboard":
        return <DashboardMenu />
      case "donations":
        return <DashboardDonations />
      case "animals":
        return <DashboardAnimals setActiveComponent={setActiveComponent} />
      case "addanimals":
        return <AddAnimal />
      case "editanimal":
        return <EditAnimal animal={animalToEdit} />
      default:
        return null
    }
  }

  return (
    <>
      <div className="text-black lg:p-10 p-4 lg:gap-10 flex flex-col lg:flex-row lg:w-fit w-full">
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

          <div className="hidden lg:flex md:flex">
            <button
              onClick={() => setActiveComponent("addanimals")}
              className="bg-[#2B9EED] mt-4 lg:w-fit px-10 rounded-3xl p-2 box-border text-white font-semibold hover:cursor-pointer"
            >
              Adicionar animal
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex lg:hidden md:hidden justify-end my-3">
            <button
              onClick={() => setActiveComponent("addanimals")}
              className="bg-[#2B9EED] mt-4 lg:w-fit px-10 rounded-3xl p-2 box-border text-white font-semibold hover:cursor-pointer"
            >
              Adicionar animal
            </button>
          </div>
          {renderDashboard()}
        </div>
      </div>
    </>
  )
}