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
const itemsPerPage = 91; // 🔹 Exibir 30 arquivos por página

const files = [
  {image: imgTeste, proporcao: '3/4' },
  {image: imgTeste2, proporcao: '3/4'},
  {image: imgTeste3, proporcao: '9/4'}
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
            {currentFiles.map((file) => (
              <div className="w-auto shadow-md cursor-pointer rounded-lg h-auto ">
                <img 
                  src={file.image} 
                  className={`w-full aspect-[${file.proporcao}] object-cover rounded-lg`}
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
    </>
  );
}
