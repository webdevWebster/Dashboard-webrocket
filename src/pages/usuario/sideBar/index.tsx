import { useState } from "react";
import { Banknote, CreditCard, Download, Heart, MonitorCog, User, Menu } from "lucide-react";

type SidebarProps = {
  onSelectItem: (item: string) => void;
};

export default function SideBar({ onSelectItem }: SidebarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Botão para abrir/fechar o Sidebar em dispositivos móveis */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 p-2 bg-gray-100 rounded-lg lg:hidden z-50 shadow-md"
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-100 text-black h-screen p-4 fixed lg:static transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 z-40`}
      >
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="flex flex-col gap-4">
          <li className="mb-2 flex gap-2">
            <User />
            <button
              onClick={() => onSelectItem("inicio")}
              className="w-full text-left cursor-pointer"
            >
              Inicio
            </button>
          </li>
          <li className="mb-2 flex gap-2">
            <CreditCard />
            <button
              onClick={() => onSelectItem("assinatura")}
              className="w-full text-left cursor-pointer"
            >
              Assinatura
            </button>
          </li>
          <li className="mb-2 flex gap-2">
            <Banknote />
            <button
              onClick={() => onSelectItem("faturas")}
              className="w-full text-left cursor-pointer"
            >
              Faturas
            </button>
          </li>
          <li className="mb-2 flex gap-2">
            <Heart />
            <button
              onClick={() => onSelectItem("historicoCurtidas")}
              className="w-full text-left cursor-pointer"
            >
              Histórico Curtidas
            </button>
          </li>
          <li className="mb-2 flex gap-2">
            <Download />
            <button
              onClick={() => onSelectItem("historicoDownloads")}
              className="w-full text-left cursor-pointer"
            >
              Histórico de Downloads
            </button>
          </li>
          <li className="mb-2 flex gap-2">
            <MonitorCog />
            <button
              onClick={() => onSelectItem("configuracoes")}
              className="w-full text-left cursor-pointer"
            >
              Configurações
            </button>
          </li>
        </ul>
      </aside>

      {/* Overlay para fechar o Sidebar ao clicar fora (em dispositivos móveis) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30"
        ></div>
      )}
    </>
  );
}