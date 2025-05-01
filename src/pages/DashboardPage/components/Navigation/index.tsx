import { Banknote, House, PawPrint } from "lucide-react";

// Interface para as props do Navigation
interface NavigationProps {
  onDashboardClick: () => void;
  onDonationsClick: () => void;
  onAnimalsClick: () => void;
  onAddNewAnimalClick: () => void;
}

export function Navigation({
  onDashboardClick,
  onDonationsClick,
  onAnimalsClick,
  onAddNewAnimalClick,
}: NavigationProps) {
  return (
    <nav className="md:w-[160px] md:h-[380px] flex flex-col gap-8 items-end md:items-start mx-4 pb-4 md:pr-5 lg:pr-7 border-b md:border-b-0 md:border-r border-[#61788A]">
      <div className="w-full flex md:flex-col items-center md:items-start justify-around md:gap-6 md:justify-start">
        <button
          type="button"
          className="flex flex-col md:flex-row items-center gap-1 cursor-pointer px-3 py-4"
          onClick={onDashboardClick}
        >
          <House />
          Dashboard
        </button>
        <button
          type="button"
          className="flex flex-col md:flex-row items-center gap-1 cursor-pointer px-3 py-4"
          onClick={onDonationsClick}
        >
          <Banknote />
          Doações
        </button>
        <button
          type="button"
          className="flex flex-col md:flex-row items-center gap-1 cursor-pointer px-3 py-4"
          onClick={onAnimalsClick}
        >
          <PawPrint />
          Animais
        </button>
      </div>

      <button
        className="w-[132px] bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition cursor-pointer"
        type="button"
        onClick={onAddNewAnimalClick}
      >
        Adicionar animal
      </button>
    </nav>
  );
}
