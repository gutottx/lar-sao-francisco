import { NeedItemCard } from "../../../../components/NeedItemCard";


interface NeedsListProps {
  animal: {
    name: string
    needsList: {
      _id: string;
      name: string;
      price: number;
      image: string;
    }[];
  };
}

export function NeedsList({animal}: NeedsListProps) {

  return(
    <section>
    <h2 className="font-bold text-[24px]">Lista de itens de {animal.name}</h2>

    <div className="flex flex-col lg:flex-col gap-5">
      <div className="w-full flex flex-wrap gap-4 lg:flex">
      {(!animal.needsList || animal.needsList.length === 0) ? (
        <p>Nenhuma lista cadastrada</p>
        ) : (
        animal.needsList.map((need) => (
          <NeedItemCard key={need._id} need={need} />
        ))
      )}
      </div>
    </div>
  </section>
  )
}
