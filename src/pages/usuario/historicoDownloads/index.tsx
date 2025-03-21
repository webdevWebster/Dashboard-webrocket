import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadItem {
  id: number;
  file: string;
  downloadDate: string;
}

const downloadHistory: DownloadItem[] = [
  {
    id: 1,
    file: "Arquivo1.pdf",
    downloadDate: "2023-10-01",
  },
  {
    id: 2,
    file: "Arquivo2.jpg",
    downloadDate: "2023-10-05",
  },
  {
    id: 3,
    file: "Arquivo3.docx",
    downloadDate: "2023-10-10",
  },
];

export default function HistoricoDownloads() {
  const handleDownload = (file: string) => {
    console.log(`Download do arquivo: ${file}`);
    // Lógica para fazer o download do arquivo
  };

  return (
    <Table className="w-full">
      <TableCaption>Histórico de Downloads</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Arquivo</TableHead>
          <TableHead>Data do Download</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {downloadHistory.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.file}</TableCell>
            <TableCell>{item.downloadDate}</TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload(item.file)}
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Novamente
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}