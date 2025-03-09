"use client";

import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

// 🔹 Gerando arquivos simulados
const generateFiles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    image: `https://img.cdndsgni.com/preview/12567118.jpg`, // Imagem dinâmica
  }));
};

const files = generateFiles(100); // 🔹 Agora temos 100 arquivos de exemplo
const itemsPerPage = 20; // 🔹 Exibir 30 arquivos por página

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
            <div key={file.id} className="w-full shadow-md cursor-pointer h-full rounded-lg">
              <img 
                src={file.image} 
                alt={`Arquivo ${file.id}`} 
                className="w-full rounded-lg shadow-md"
              />
            </div>
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
