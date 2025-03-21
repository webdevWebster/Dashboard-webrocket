import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface LikeHistoryItem {
  id: number;
  file: string;
  author: string;
  likeDate: string;
}

const likeHistory: LikeHistoryItem[] = [
  {
    id: 1,
    file: "Arquivo1.pdf",
    author: "Autor1",
    likeDate: "2023-10-01",
  },
  {
    id: 2,
    file: "Arquivo2.jpg",
    author: "Autor2",
    likeDate: "2023-10-05",
  },
  {
    id: 3,
    file: "Arquivo3.docx",
    author: "Autor3",
    likeDate: "2023-10-10",
  },
];

export default function LikeHistoryTable() {
  const handleDownload = (file: string) => {
    console.log(`Download do arquivo: ${file}`);
    // Lógica para fazer o download do arquivo
  };

  return (
    <Table className="w-full">
      <TableCaption>Histórico de Curtidas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Arquivo</TableHead>
          <TableHead>Autor</TableHead>
          <TableHead>Data de Curtida</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {likeHistory.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.file}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.likeDate}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload(item.file)}
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}