import { CircleX, PawPrint } from "lucide-react";
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
import { useDonationsByAnimal } from "../../../../hooks/useDonationsByAnimal";

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

/* ----- Modal com a lista de doações ------*/
function DonationAnimalModal({ animal, setIsDonationAnimalModalOpen }: DonationAnimalModalProps) {
  const { data, isLoading } = useDonationsByAnimal(animal?._id || "");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return "Data inválida";
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatCurrency = (value: number) => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  if (isLoading) return <p>Carregando doações...</p>;
  if (!animal) return <div className="text-white">Animal não selecionado.</div>;

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
            <div className="w-[88px] h-[88px] ">
              {!animal?.images[0] && (
                <PawPrint className="w-full h-full rounded-2xl bg-gray-300 text-gray-100"/>
              )}
              {animal?.images[0] && (
                  <img
                    className="rounded-2xl w-full h-full object-cover"
                    src={animal?.images[0]}
                    alt={animal?.name || "Animal"}
                  />
              )}
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
                {data?.donations.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center">
                        Nenhuma doação encontrada para este animal.
                      </TableCell>
                    </TableRow>
                  ) : (
                    data?.donations.map((donation) => (
                      <TableRow key={donation._id}>
                        <TableCell>{formatDate(donation.createdAt)}</TableCell>
                        <TableCell>{donation.donorName || "Anônimo"}</TableCell>
                        <TableCell>{formatCurrency(donation.amount)}</TableCell>
                      </TableRow>
                    ))
                  )}
              </TableBody>
              <TableFooter>
                <TableRow className="rounded-2xl">
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell>R${formatCurrency(data?.total ?? 0)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
