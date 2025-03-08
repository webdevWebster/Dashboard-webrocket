// components/Footer.tsx

const Footer = () => {
  return (
    <div className="bg-gray-200 text-black">
      {/* Footer Principal */}
      <div className="max-w-screen-xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Logo Marca</h3>
          <p className="mt-2 text-sm text-gray-400">
            Explore e compartilhe criativos incríveis com a comunidade.
          </p>
        </div>
        
        {/* Links no Footer */}
        <div className="mt-6 md:mt-0">
          <ul className="flex justify-center md:justify-end gap-6">
            <li>
              <a href="#home" className="hover:text-blue-400 transition duration-300">Seja um colaborador</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-400 transition duration-300">Denúncie</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 transition duration-300">Contato</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Menor (Direitos autorais) */}
      <div className="bg-gray-300 text-center py-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Logo. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
