"use client";

import { useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

// 🔹 Gerando arquivos simulados
const generateFiles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f`, // Imagem dinâmica
  }));
};

const files = generateFiles(100); // 🔹 Agora temos 100 arquivos de exemplo
const itemsPerPage = 30; // 🔹 Exibir 30 arquivos por página

export default function FileGallery() {
  const [currentPage, setCurrentPage] = useState(1);

  // Paginação dinâmica
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFiles = files.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(files.length / itemsPerPage);

  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        {/* Grid dinâmico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {currentFiles.map((file) => (
            <Card key={file.id} className="overflow-hidden shadow-md">
              <CardHeader className="p-0">
                <img 
                  src={file.image} 
                  alt={`Arquivo ${file.id}`} 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Paginação */}
        <div className="mt-6 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                >
                  ⏮
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  ◀
                </PaginationLink>
              </PaginationItem>

              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={index + 1 === currentPage}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationLink
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  ▶
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === totalPages}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  ⏭
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
