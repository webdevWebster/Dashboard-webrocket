import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";
import { Share2 } from "lucide-react";

// 🔹 Simulação de dados do Criador
const creator = {
  name: "John Doe",
  username: "@johndoe",
  description: "Criador de conteúdos digitais e apaixonado por design.",
  profilePic: "https://i.pravatar.cc/150?img=3", // Foto do Criador
  banner: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg", // Banner aleatório
  stats: {
    arquivos: 120,
    downloads: 4500,
    seguidores: 2800,
    curtidas: 7800,
  },
};

const CreatorPage = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // 🔹 Função para seguir/desseguir o criador
  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  // 🔹 Função para compartilhar o perfil
  const handleShare = () => {
    const profileUrl = window.location.href;
    navigator.clipboard.writeText(profileUrl);
    toast.success("Link do perfil copiado!");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* 🔹 Banner do Criador */}
      <div className="relative w-full h-48 md:h-64">
        <img
          src={creator.banner}
          alt="Banner do Criador"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Seção de Perfil (Foto, Nome e Descrição) */}
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center -mt-14 sm:-mt-20 bg-white p-6 rounded-lg shadow-lg">
          {/* 🔹 Foto de Perfil Centralizada */}
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-lg">
            <AvatarImage src={creator.profilePic} alt={creator.name} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          {/* 🔹 Nome e Descrição Centralizados */}
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold">{creator.name}</h2>
            <p className="text-gray-500">{creator.username}</p>
            <p className="mt-2 text-gray-700">{creator.description}</p>
          </div>

          {/* 🔹 Botões de Seguir e Compartilhar */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            {/* 🔹 Botão de Seguir */}
            <Button
              onClick={handleFollow}
              className={`px-6 py-2 font-medium text-white rounded-lg transition-all ${
                isFollowing ? "bg-gray-500 hover:bg-gray-600" : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
              }`}
            >
              {isFollowing ? "Seguindo" : "Seguir"}
            </Button>

            {/* 🔹 Botão de Compartilhar */}
            <Button
              onClick={handleShare}
              className="flex items-center px-6 py-2 border border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-300 rounded-lg cursor-pointer"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar
            </Button>
          </div>
        </div>

        {/* 🔹 Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Object.entries(creator.stats).map(([key, value]) => (
            <Card key={key} className="p-4 flex flex-col items-center text-center shadow-md">
              <span className="text-2xl font-bold">{value.toLocaleString()}</span>
              <span className="text-gray-500 capitalize">{key}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorPage;
