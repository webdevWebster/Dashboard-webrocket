import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CreditCard, Banknote } from "lucide-react";

interface Invoice {
  id: number;
  date: string;
  paymentMethod: string;
  amount: string;
}

const invoices: Invoice[] = [
  {
    id: 1,
    date: "2023-10-01",
    paymentMethod: "Cartão de Crédito",
    amount: "R$ 49,90",
  },
  {
    id: 2,
    date: "2023-09-01",
    paymentMethod: "Cartão de Crédito",
    amount: "R$ 49,90",
  },
  {
    id: 3,
    date: "2023-08-01",
    paymentMethod: "Pix",
    amount: "R$ 49,90",
  },
];

export default function Faturas() {
  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case "Cartão de Crédito":
        return <CreditCard className="w-4 h-4 mr-2" />;
      case "Pix":
        return <Banknote className="w-4 h-4 mr-2" />;
      default:
        return null;
    }
  };

  return (
    <Table className="w-full">
      <TableCaption>Histórico de Faturas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Método de Pagamento</TableHead>
          <TableHead>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>
              <div className="flex items-center">
                {getPaymentMethodIcon(invoice.paymentMethod)}
                {invoice.paymentMethod}
              </div>
            </TableCell>
            <TableCell>{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}