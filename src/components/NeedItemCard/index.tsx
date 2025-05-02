interface Need {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface MeedItemCardProps {
  need: Need;
}

export function NeedItemCard({need}: MeedItemCardProps ) {
  return (
      <div className="w-[154px] lg:w-[200px] p-1.5">
        <div className="flex items-center h-[154px] w-[154px]">
          <img 
            src={need.image} 
            alt={`Imagem ${need.image}`} 
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col px-2">
          <span className="font-bold">{need.name}</span>
          <span>R${need.price},00</span>
        </div>
    </div>
  )
}
