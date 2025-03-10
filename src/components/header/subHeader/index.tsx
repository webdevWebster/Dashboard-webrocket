"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "PNG", subcategories: ["Pessoas", "Comidas", "Animais"] },
  { name: "PSD", subcategories: ["Datas", "Social Media", "Banners"] },
  { name: "Mockups", subcategories: ["Computador", "Relógio", "Iphones"] },
  { name: "Fotos", subcategories: [] }, // Sem subcategorias
];

export default function Subheader() {
  return (
    <div className="w-full bg-gray-100 border-b">
      <div className="container mx-auto flex items-center gap-4 p-1 overflow-x-auto">
        {categories.map((category, index) =>
          category.subcategories.length > 0 ? (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-black cursor-pointer">
                  {category.name}
                </Button>
              </DropdownMenuTrigger>
              {/* Corrigido: Garante que o menu seja renderizado corretamente */}
              <DropdownMenuContent align="start" className="w-48 bg-white shadow-md">
                {category.subcategories.map((sub, subIndex) => (
                  <DropdownMenuItem key={subIndex} className="cursor-pointer hover:bg-gray-200">
                    {sub}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button key={index} variant="ghost" className="text-gray-700 hover:text-black">
              {category.name}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
