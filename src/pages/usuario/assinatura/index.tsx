import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon, CrossIcon } from "lucide-react";

export default function Assinatura() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Assinatura</CardTitle>
        <CardDescription className="text-lg">Plano Atual</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Gratuito</h3>
          <p className="text-sm text-gray-500">Downloads por Dia: 3 Downloads</p>
        </div>
        <div>
          <p className="text-sm">Valor da assinatura: R$ 0,00</p>
          <p className="text-sm">Vencimento: -</p>
        </div>
        <div>
          <p className="text-sm">Método de Pagamento:</p>
          <p className="text-sm font-semibold">Nenhum</p>
        </div>
        <div>
          <p className="text-sm">DesignBr Gratuito</p>
          <p className="text-sm text-gray-500">Atualize seu plano para realizar download de arquivos premium.</p>
        </div>
        <div>
          <p className="text-sm">Auto Renovação:</p>
          <p className="text-sm font-semibold">Desativada</p>
          <p className="text-sm text-gray-500">Próxima cobrança: -</p>
          <Button variant="outline" className="mt-2">Desativar</Button>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Atualizar Plano</Button>
      </CardFooter>
    </Card>
  );
}