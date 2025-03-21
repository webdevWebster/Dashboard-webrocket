import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Seção: Sobre e Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Webcreativos</h3>
            <p className="text-gray-400 mb-4">
              Faça sua creatividade brincar!
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <p className="text-gray-400">webrocketagencia@gmail.com.br</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <p className="text-gray-400">+55 88 92146-5375</p>
              </div>
            </div>
          </div>

          {/* Seção: Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Webcriativos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/aboutPage" className="text-gray-400 hover:text-white">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/planos" className="text-gray-400 hover:text-white">
                  Planos
                </a>
              </li>
              <li>
                <a href="/ContactPage" className="text-gray-400 hover:text-white">
                  Entre em contato
                </a>
              </li>
            </ul>
          </div>

          {/* Seção: Arquivos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Arquivos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/psd" className="text-gray-400 hover:text-white">
                  PSD
                </a>
              </li>
              <li>
                <a href="/png" className="text-gray-400 hover:text-white">
                  PNG
                </a>
              </li>
              <li>
                <a href="/imagens" className="text-gray-400 hover:text-white">
                  Imagens
                </a>
              </li>
              <li>
                <a href="/ia" className="text-gray-400 hover:text-white">
                  IA
                </a>
              </li>
              <li>
                <a href="/vetores" className="text-gray-400 hover:text-white">
                  Vetores
                </a>
              </li>
              <li>
                <a href="/texturas" className="text-gray-400 hover:text-white">
                  Texturas
                </a>
              </li>
            </ul>
          </div>

          {/* Seção: Outros Tipos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Outros Tipos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/apresentacoes" className="text-gray-400 hover:text-white">
                  Apresentações
                </a>
              </li>
              <li>
                <a href="/3d" className="text-gray-400 hover:text-white">
                  3D
                </a>
              </li>
              <li>
                <a href="/flyers" className="text-gray-400 hover:text-white">
                  Flyers
                </a>
              </li>
              <li>
                <a href="/banners" className="text-gray-400 hover:text-white">
                  Banners
                </a>
              </li>
              <li>
                <a href="/backgrounds" className="text-gray-400 hover:text-white">
                  Backgrounds
                </a>
              </li>
              <li>
                <a href="/motions" className="text-gray-400 hover:text-white">
                  Motions
                </a>
              </li>
              <li>
                <a href="/colecoes" className="text-gray-400 hover:text-white">
                  Coleções
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Direitos Autorais e Links Legais */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center sm:text-left">
          <p className="text-gray-400">
            Copyright © 2025 Webcreativos. Todos os direitos reservados.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <a href="/termos" className="text-gray-400 hover:text-white">
              Termos de Uso
            </a>
            <a href="/privacidade" className="text-gray-400 hover:text-white">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}