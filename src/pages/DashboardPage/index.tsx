import { useState } from "react";
import { Animals } from "./components/Animals";
import { Dashboard } from "./components/Dashboard";
import { Donations } from "./components/Donations";
import { Navigation } from "./components/Navigation";
import { AddNewAnimal } from "./components/AddNewAnimal";
import { EditAnimal } from "./components/EditAnimal";
import { Animal } from "../../hooks/useAnimals";

export function DashboardPage() {
  const [activeComponent, setActiveComponent] = useState<
  "Dashboard" | "Donations" | "Animals" | "AddNewAnimal"
  >("Dashboard");
  const [editingAnimal, setEditingAnimal] = useState<Animal | null>(null);

  const handleDashboardClick = () => setActiveComponent("Dashboard");
  const handleDonationsClick = () => setActiveComponent("Donations");
  const handleAnimalsClick = () => {
    setActiveComponent("Animals");
    setEditingAnimal(null); 
  };
  const handleAddNewAnimalClick = () => setActiveComponent("AddNewAnimal");

  const handleEditAnimal = (animal: Animal) => {
    setEditingAnimal(animal);
    setActiveComponent("Animals");
  };

  const handleCancelEdit = () => {
    setEditingAnimal(null); 
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Donations":
        return <Donations />;
      case "Animals":
        return editingAnimal ? (
          <EditAnimal animal={editingAnimal} onCancel={handleCancelEdit} />
        ) : (
          <Animals onEditAnimal={handleEditAnimal} />
        );
      case "AddNewAnimal":
        return <AddNewAnimal />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <main className="min-h-screen px-6 md:px-[72px] lg:w-[1085px] mt-[38px] gap-6 pb-9">
      <div className="flex flex-col gap-7 md:flex-row">
        <Navigation
          onDashboardClick={handleDashboardClick}
          onDonationsClick={handleDonationsClick}
          onAnimalsClick={handleAnimalsClick}
          onAddNewAnimalClick={handleAddNewAnimalClick}
        />
        <div>{renderActiveComponent()}</div>
      </div>
    </main>
  )
}
