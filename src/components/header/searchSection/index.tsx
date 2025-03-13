"use client";

import HighlightedFiles from "@/components/highLightsCards";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchSection() {
  return (
    <section className="w-full bg-gray-100 py-10">
      <div className="container mx-auto text-center px-4">
        {/* Título e Subtítulo */}
        <h1 className="text-2xl font-bold tracking-tighter md:text-3xl lg:text-5xl">
          Pesquise aqui seus <AuroraText>Arquivos</AuroraText>
        </h1>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">
          Busque por templates, ilustrações, fontes e muito mais.
        </p>

        {/* Barra de Busca */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3">
          <Input
            type="text"
            placeholder="Digite o que você procura..."
            className="w-full md:w-96 p-3 text-gray-700"
          />
          <Button className="w-full md:w-auto flex items-center gap-2">
            <Search className="w-5 h-5" />
            Buscar
          </Button>
        </div>
      </div>
      <HighlightedFiles />
    </section>
  );
}
