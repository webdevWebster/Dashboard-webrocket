import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { toast } from "react-hot-toast";
import { Heart, Bookmark, Share2 } from "lucide-react"; // Ícones
import Header from "@/components/header";
import Footer from "@/components/footer";
import FileGallery from "@/components/fileGallery";

// 🔹 Simulação de arquivo
const file = {
  id: 1,
  title: "Março Lilás - Estamos Juntos nessa Causa",
  description: "Arquivo no formato PSD editável. Para projetos comerciais e pessoais.",
  benefits: [
    "Não precisa atribuir o autor",
    "Qualidade do arquivo verificada",
    "Download imediato",
  ],
  isPremium: false,
  size: "19.55 MB",
  idNumber: "#12750179",
  format: "PSD",
  extension: "zip",
  image: "https://img.cdndsgni.com/preview/12750179.jpg",
  creator: {
    name: "Robert",
    profilePic: "https://i.pravatar.cc/150?img=10",
    files: 1600,
  },
};

export default function FilePreview() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [likes, setLikes] = useState(13);
  const [isLiked, setIsLiked] = useState(false);

  // 🔹 Função para seguir o criador
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  // 🔹 Função para curtir
  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  // 🔹 Função para compartilhar
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copiado para a área de transferência!");
  };

  // 🔹 Função para baixar (somente se for premium)
  const handleDownload = () => {
    if (file.isPremium) {
      toast.error("Este arquivo é exclusivo para membros premium!");
    } else {
      toast.success("Download iniciado!");
    }
  };

  return (
    <>
        <Header />
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 🔹 Imagem do Arquivo / Carrossel */}
            <div className="flex flex-col items-center">
                <Carousel className="w-full">
                    <CarouselItem className="w-full">
                        <img src={file.image} className="w-full rounded-lg shadow-md" />
                    </CarouselItem>
                </Carousel>

                {/* 🔹 Botões de interação */}
                <div className="mt-4 flex space-x-6">
                <Button variant="ghost" onClick={handleLike} className="flex items-center space-x-2">
                    <Heart className={isLiked ? "text-red-500 fill-red-500" : "text-gray-600"} size={20} />
                    <span>Curtir ({likes})</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                    <Bookmark className="text-gray-600" size={20} />
                    <span>Salvar</span>
                </Button>
                <Button variant="ghost" onClick={handleShare} className="flex items-center space-x-2">
                    <Share2 className="text-gray-600" size={20} />
                    <span>Compartilhar</span>
                </Button>
                </div>

                {/* 🔹 Informações do Arquivo */}
                <Card className="p-4 mt-6 w-full bg-gray-100 border border-gray-300 text-sm">
                    <p><strong>Formato do arquivo:</strong> {file.format}</p>
                    <p><strong>Extensão de download:</strong> {file.extension}</p>
                    <p><strong>Tamanho:</strong> {file.size}</p>
                    <p><strong>Número de identificação:</strong> {file.idNumber}</p>
                    <p><strong>Licença:</strong> {file.isPremium ? "Premium" : "Gratuito"}</p>
                    <p className="mt-2 text-gray-600">
                        Este é um recurso oferecido em formato {file.format}. Este arquivo, nativo do Adobe Photoshop, 
                        é ideal para edição avançada de imagens. Ele permite personalizar textos, alterar cores e ajustar 
                        elementos gráficos conforme a necessidade do seu projeto.
                    </p>
                </Card>
            </div>

            {/* 🔹 Detalhes do Arquivo */}
            <div>
                <h1 className="text-2xl font-bold">{file.title}</h1>
                <p className="text-gray-600 mt-2">{file.description}</p>

                {/* 🔹 Lista de Benefícios */}
                <ul className="mt-4 space-y-2">
                {file.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                    ✅ <span className="ml-2">{benefit}</span>
                    </li>
                ))}
                </ul>

                {/* 🔹 Info Premium */}
                {file.isPremium && (
                <Card className="p-4 mt-6 bg-yellow-100 border border-yellow-300">
                    <p className="font-semibold text-yellow-700">🔒 Arquivo premium</p>
                    <p className="text-sm text-yellow-600">
                    Este arquivo está disponível exclusivamente para membros premium.  
                    Crie uma conta e torne-se Premium para fazer o download.
                    </p>
                </Card>
                )}

                {/* 🔹 Botão de Download */}
                <Button
                    className="mt-6 w-100 py-6 px-4 text-lg bg-blue-700 hover:bg-blue-800 cursor-pointer"
                    disabled={file.isPremium}
                    onClick={handleDownload}
                >
                    Download ({file.size})
                </Button>

                {/* 🔹 Criador */}
                <div className="mt-8 flex items-center space-x-4">
                <Avatar className="w-16 h-16">
                    <AvatarImage src={file.creator.profilePic} alt={file.creator.name} />
                    <AvatarFallback>{file.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex gap-6">
                    <div>
                        <p className="font-semibold text-lg">{file.creator.name}</p>
                        <p className="text-gray-500">{file.creator.files.toLocaleString()} arquivos</p>
                    </div>
                    <Button
                    onClick={handleFollow}
                    className={`mt-2 px-4 py-2 text-sm ${
                        isFollowing ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    >
                    {isFollowing ? "Seguindo" : "Seguir"}
                    </Button>
                </div>
                </div>
            </div>
        </div>
        <FileGallery />
        <Footer />
    </>
  );
}
