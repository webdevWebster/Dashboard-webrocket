import { Banknote, CreditCard, Download, Heart, MonitorCog, User } from "lucide-react";

type SidebarProps = {
    onSelectItem: (item: string) => void;
};

export default function SideBar({ onSelectItem }: SidebarProps){
    return(
        <aside className="bg-gray-100 text-black h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <ul className="flex flex-col gap-4">
                <li className="mb-2 flex gap-2">
                    <User /> 
                    <button onClick={() => onSelectItem("inicio")} className="w-full text-left cursor-pointer">
                        Inicio
                    </button>
                </li>
                <li className="mb-2 flex gap-2">
                    <MonitorCog /> 
                    <button onClick={() => onSelectItem("configuracoes")} className="w-full text-left cursor-pointer">
                        Configurações
                    </button>
                </li>
                <li className="mb-2 flex gap-2">
                    <CreditCard /> 
                    <button onClick={() => onSelectItem("assinatura")} className="w-full text-left cursor-pointer">
                        Assinatura
                    </button>
                </li>
                <li className="mb-2 flex gap-2">
                    <Banknote /> 
                    <button onClick={() => onSelectItem("faturas")} className="w-full text-left cursor-pointer">
                        Faturas
                    </button>
                </li>
                <li className="mb-2 flex gap-2">
                    <Heart /> 
                    <button onClick={() => onSelectItem("historicoCurtidas")} className="w-full text-left cursor-pointer">
                        Histórico Curtidas
                    </button>
                </li>
                <li className="mb-2 flex gap-2">
                    <Download /> 
                    <button onClick={() => onSelectItem("historicoDownloads")} className="w-full text-left cursor-pointer">
                        Histórico de Downloads
                    </button>
                </li>
            </ul>
      </aside>
    )
}