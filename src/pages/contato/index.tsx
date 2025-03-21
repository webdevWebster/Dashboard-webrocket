import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:contato@sistemacriativos.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511999999999", "_blank"); // Substitua pelo seu número de WhatsApp
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Entre em Contato</h1>

      {/* Seção de Contato */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Fale Conosco</CardTitle>
          <CardDescription>
            Estamos aqui para ajudar! Entre em contato por e-mail ou WhatsApp.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* E-mail */}
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-semibold">E-mail</p>
              <p className="text-gray-700">contato@sistemacriativos.com</p>
            </div>
            <Button variant="outline" onClick={handleEmailClick}>
              Enviar E-mail
            </Button>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-gray-700">+55 11 99999-9999</p>
            </div>
            <Button variant="outline" onClick={handleWhatsAppClick}>
              Enviar Mensagem
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}