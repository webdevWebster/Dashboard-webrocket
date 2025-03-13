import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import image from '../../assets/abril azul2.png'

interface cardProps {
    title: string,
}

const CardComponent = ({title}: cardProps) => {
  return (
    <Card className="shadow-lg rounded-2xl overflow-hidden flex flex-col items-center">
        {/* Imagem de capa */}
        <img src={image} className="object-cover rounded-b-md aspect-[3/4] w-60" />
        <Button className="w-40 rounded-4xl cursor-pointer">{title}</Button>
    </Card>
  );
};

// Exemplo de uso
const CardsGrid = () => {
  const cardsData = [
    {
      image: "https://source.unsplash.com/300x200/?nature",
      title: "Mais Pesquisados",
    },
    {
      image: "https://source.unsplash.com/300x200/?city",
      title: "Destaques",
    },
    {
      image: "https://source.unsplash.com/300x200/?technology",
      title: "Mais baixados",
    },
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-center p-6">
        {cardsData.map((card, index) => (
            <CardComponent key={index} {...card} title={card.title} />
        ))}
    </div>
  );
};

export default CardsGrid;
