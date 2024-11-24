import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  type ServicesPropType = {
    key: number;
    name: string;
    path: string;
  };

  const Services: ServicesPropType[] = [
    {
      key: 1,
      name: "Rotina de Skincare",
      path: "procedimentos/skincare",
    },
    {
      key: 2,
      name: "Revitalização Facial",
      path: "procedimentos/revitalizacao-facial",
    },
    {
      key: 3,
      name: "Limpeza de Pele",
      path: "procedimentos/limpeza-de-pele",
    },
    {
      key: 4,
      name: "Massagem Relaxante",
      path: "procedimentos/massagem-relaxante",
    },
    {
      key: 5,
      name: "Drenagem Linfática",
      path: "procedimentos/drenagem-linfatica",
    },
    {
      key: 6,
      name: "Ventosaterapia",
      path: "procedimentos/ventosaterapia",
    },
    {
      key: 7,
      name: "Massagem Modeladora",
      path: "procedimentos/massagem-modeladora",
    },
  ];

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
            className="border border-pbase p-4"
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
            Início
          </a>
          {Services.map((service) => (
            <a
              href={"/" + service.path}
              key={service.key}
              className="block p-2 hover:bg-ptlorange"
            >
              {service.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
