import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Função para fechar o menu se o clique for fora do dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Adiciona o listener ao montar o componente
    document.addEventListener("mousedown", handleClickOutside);

    // Remove o listener ao desmontar o componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-pbase text-pdark p-4 rounded-md flex items-center justify-between relative">
      {/* Botão do Menu (esquerda) */}
      <button onClick={toggleMenu} className="p-4">
        <Image
          src="/images/menu-icon.png"
          alt="menu-icon"
          width={40}
          height={40}
        />
      </button>

      {/* Logo centralizada */}
      <div className="flex-1 flex justify-center">
        <a href="/" className="flex items-center">
          <Image
            src="/images/joicelogo.jpg"
            alt="joicemaelilogo"
            width={200}
            height={200}
          />
        </a>
      </div>

      {/* Espaço vazio para manter a logo centralizada */}
      <div className="w-8" />

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-4 z-50 bg-porange shadow-lg rounded-md p-4 w-48"
          style={{ color: "white" }}
        >
          <a href="/" className="block p-2 hover:bg-ptlorange">
            Home
          </a>
          <a href="/about" className="block p-2 hover:bg-ptlorange">
            Sobre
          </a>
          <a href="/services" className="block p-2 hover:bg-ptlorange">
            Serviços
          </a>
          <a href="/contact" className="block p-2 hover:bg-ptlorange">
            Contato
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
