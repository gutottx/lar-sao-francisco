import { CircleX } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { useState } from "react";
import { Animal, useAnimals } from "../../../../hooks/useAnimals";
import { DonationCartItem } from "../DonationCartItem";

interface Donation {
  date: string;
  donor: string;
  amount: string;
}

interface DonationAnimalModalProps {
  animal: Animal | null;
  setIsDonationAnimalModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Donations() {
  const { data: animals, isLoading, error } = useAnimals();
  const [isDonationAnimalModalOpen, setIsDonationAnimalModalOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const openModal = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsDonationAnimalModalOpen(true);
  };

  if (isLoading) return <p>Carregando animais...</p>;
  if (error) return <p>Erro ao carregar os animais.</p>;

  return (
    <div className="w-full md:w-[400px] lg:w-[800px] p-4 flex flex-col gap-7">
      <h2 className="font-bold text-2xl">Doações recebidas</h2>

      <div className="flex gap-2 flex-row flex-wrap">
        {animals?.map((animal) => (
          <DonationCartItem
            key={animal._id}
            animal={animal}
            onClick={() => openModal(animal)}
          />
        ))}

        {isDonationAnimalModalOpen && (
          <DonationAnimalModal
            animal={selectedAnimal}
            setIsDonationAnimalModalOpen={setIsDonationAnimalModalOpen}
          />
        )}
      </div>
    </div>
  );
}

function DonationAnimalModal({ animal, setIsDonationAnimalModalOpen }: DonationAnimalModalProps) {
  const donations: Donation[] = [
    { date: "10/12/2025", donor: "João", amount: "R$50,00" },
    { date: "11/12/2025", donor: "Maria", amount: "R$100,00" },
    { date: "12/12/2025", donor: "Pedro", amount: "R$75,00" },
    { date: "13/12/2025", donor: "Ana", amount: "R$80,00" },
    { date: "14/12/2025", donor: "Lucas", amount: "R$45,00" },
  ];

  const total = donations.reduce((sum, donation) => {
    const amount = parseFloat(donation.amount.replace("R$", "").replace(",", "."));
    return sum + amount;
  }, 0);

  return (
    <div className="fixed w-full h-screen overflow-hidden top-0 left-0 bg-black/80 flex">
      <div className="bg-white p-6 w-[330px] h-[420px] md:w-[560px] md:h-[460px] m-auto flex flex-col gap-4 items-end overflow-y-scroll">
        <button
          className="cursor-pointer"
          onClick={() => setIsDonationAnimalModalOpen(false)}
        >
          <CircleX />
        </button>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-5">
            <div>
              <img
                className="w-[88px] h-[88px] rounded-2xl"
                src={animal?.images[0]}
                alt={animal?.name || "Animal"}
              />
            </div>
            <div className="flex flex-col font-semibold">
              <span>{animal?.name || "Nome do Animal"}</span>
              <span>R${ "0,00"}</span>
            </div>
          </div>

          <div>
            <Table className="rounded-2xl">
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Quem Doou</TableHead>
                  <TableHead>Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {donations.map((donation, index) => (
                  <TableRow key={index}>
                    <TableCell>{donation.date}</TableCell>
                    <TableCell>{donation.donor}</TableCell>
                    <TableCell>{donation.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow className="rounded-2xl">
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell>R${total.toFixed(2)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
