// src/pages/Usuario.tsx
import { useState } from "react";
import Sidebar from "./sideBar/index";
import { Perfil } from "./perfil"; "./perfil/index";
import Configuracao from "./configuracao/index";
import Assinatura from "./assinatura";
import Faturas from "./faturas";
import HistoricoCurtidas from "./historicoCurtidas";
import HistoricoDownloads from "./historicoDownloads";

const Usuario = () => {
  const [conteudoAtual, setConteudoAtual] = useState("inicio");

  const renderizarConteudo = () => {
    
    switch (conteudoAtual) {
      case "inicio":
        return <Perfil />;
      case "configuracoes":
        return <Configuracao />;
      case "assinatura":
        return <Assinatura />
      case "faturas":
        return <Faturas />
      case "historicoCurtidas":
        return <HistoricoCurtidas />
      case "historicoDownloads":
        return <HistoricoDownloads />
      default:
        return <h2>Selecione uma opção</h2>;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSelectItem={setConteudoAtual} />
      <main className="flex-1 p-4">{renderizarConteudo()}</main>
    </div>
  );
};

export default Usuario;