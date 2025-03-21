"use client";

import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import SearchSection from "../header/searchSection";

import imgTeste from '../../assets/Abril-Azul.png'
import imgTeste2 from '../../assets/abril azul2.png'
import imgTeste3 from '../../assets/banner-abril-azul.png'

// 🔹 Gerando arquivos simulados
// const generateFiles = (count: number) => {
//   return Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     image: imgTeste, // Imagem dinâmica
//   }));
// };

// const files = generateFiles(100); // 🔹 Agora temos 100 arquivos de exemplo
const itemsPerPage = 10; // 🔹 Exibir 30 arquivos por página

const files = [
  {id: 1,image: imgTeste, proporcao: '3/4' },
  {id: 2, image: imgTeste2, proporcao: '3/4'},
  {id: 3, image: imgTeste3, proporcao: '9/4'},
]

export default function FileGallery() {
  const [currentPage, setCurrentPage] = useState(1);

  // Paginação dinâmica
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFiles = files.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(files.length / itemsPerPage);

  return (
    <>
      <SearchSection />
      <section className="w-full py-10">
        <div className="container mx-auto px-4">
          {/* Grid dinâmico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          {files.map((file) => {
            const proporcao = file.proporcao; // Pega a proporção do arquivo

            return (
              <div
                key={file.id}
                className={`w-auto shadow-md cursor-pointer rounded-lg overflow-hidden ${
                  file.proporcao === '9/4' ? 'col-span-3' : '' // Ajuste para o banner
                }`}
              >
                {/* Contêiner com aspect-ratio */}
                <div style={{ aspectRatio: proporcao }} className="w-full">
                  <img
                    src={file.image}
                    className="w-full h-full object-contain rounded-lg" // Usando object-contain
                    alt={`Imagem ${file.id}`} // Adicione um alt para acessibilidade
                  />
                </div>
              </div>
            );
          })}
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
    </>
  );
}
