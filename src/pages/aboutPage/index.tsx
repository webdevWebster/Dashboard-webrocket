import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, Heart, Download, Settings, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Sobre o Sistema de Criativos</h1>

      {/* Seção de Introdução */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Bem-vindo ao Sistema de Criativos</CardTitle>
          <CardDescription>
            Uma plataforma projetada para ajudar criativos a gerenciar, compartilhar e baixar recursos de forma eficiente.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Nosso sistema foi desenvolvido para simplificar o fluxo de trabalho de designers, artistas e outros profissionais criativos. Com recursos como histórico de downloads, gerenciamento de assinaturas e muito mais, estamos aqui para facilitar sua vida.
          </p>
        </CardContent>
      </Card>

      {/* Seção de Recursos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <Users className="w-8 h-8 mb-2" />
            <CardTitle>Para Criativos</CardTitle>
            <CardDescription>
              Feito por criativos, para criativos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Oferecemos ferramentas que ajudam você a se concentrar no que realmente importa: sua criatividade.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="w-8 h-8 mb-2" />
            <CardTitle>Curtidas e Favoritos</CardTitle>
            <CardDescription>
              Mantenha seus recursos favoritos sempre à mão.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Salve seus recursos preferidos e acesse-os facilmente quando precisar.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Download className="w-8 h-8 mb-2" />
            <CardTitle>Downloads Ilimitados</CardTitle>
            <CardDescription>
              Baixe seus recursos quantas vezes precisar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Com planos flexíveis, você tem acesso ilimitado aos seus downloads.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Seção de Contato */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Entre em Contato</CardTitle>
          <CardDescription>
            Tem dúvidas ou sugestões? Estamos aqui para ajudar!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <p className="text-gray-700">contato@sistemacriativos.com</p>
          </div>
          <Button className="mt-4" variant="outline">
            Enviar Mensagem
          </Button>
        </CardContent>
      </Card>

      {/* Seção da Equipe */}
      <Card>
        <CardHeader>
          <CardTitle>Nossa Equipe</CardTitle>
          <CardDescription>
            Conheça as pessoas por trás do Sistema de Criativos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Membro da Equipe"
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">João Silva</p>
              <p className="text-sm text-gray-500">Desenvolvedor Front-end</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Membro da Equipe"
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">Maria Souza</p>
              <p className="text-sm text-gray-500">Designer UX/UI</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Membro da Equipe"
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <p className="font-semibold">Carlos Oliveira</p>
              <p className="text-sm text-gray-500">Desenvolvedor Back-end</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}