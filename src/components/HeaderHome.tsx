import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logotipo-menu-Fernanda-Sena-1280x225.png";
import { Menu, X } from "lucide-react";

export default function HeaderHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    const onResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Estilo do header - verde fixo no mobile, comportamento original no desktop/tablet
  const headerStyle = {
    transition: "background-color 500ms ease, padding 500ms ease",
    backgroundColor: isScrolled ? "rgba(0,0,0,0.8)" : "transparent",
  };

  // No mobile, sempre usar verde escuro independente do scroll
  const mobileHeaderStyle = {
    backgroundColor: "#2E4E1E",
  };

  const navLinkClasses = "text-white hover:opacity-80 transition-opacity no-underline";

  const agendarBtnStyles = {
    padding: "8px 20px",
    backgroundColor: "#22c55e",
    color: "white",
    fontWeight: 600,
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  };

  // Tamanhos responsivos para a logo
  const getLogoSize = () => {
    if (windowWidth < 768) return "h-10"; // Mobile
    if (windowWidth >= 769 && windowWidth < 1024) return "h-11"; // Faixa específica 769-1023px
    if (windowWidth < 1280) return "h-12"; // Tablet padrão
    return "h-14"; // Desktop
  };

  // Tamanhos responsivos para a navegação
  const getNavSize = () => {
    if (windowWidth < 768) return "hidden"; // Mobile - oculto
    if (windowWidth >= 769 && windowWidth < 1024) return "flex gap-4 text-xs"; // Faixa específica 769-1023px
    if (windowWidth < 1280) return "flex gap-6 text-lg"; // Tablet padrão
    return "flex gap-8 text-xl"; // Desktop
  };

  // Padding responsivo para o container
  const getContainerPadding = () => {
    if (windowWidth >= 769 && windowWidth < 1024) return "px-3 py-2"; // Faixa específica 769-1023px
    return "px-4 py-3"; // Padrão
  };

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50" 
      style={windowWidth < 768 ? mobileHeaderStyle : headerStyle}
    >
      <div className={`container mx-auto ${getContainerPadding()}`}>
        {/* Linha principal com logo e ícone do menu */}
        <div className="flex justify-between items-center w-full">
          {/* Logo com tamanho responsivo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo Dra. Fernanda Sena" 
              className={getLogoSize()} 
            />
          </Link>

          {/* Ícone Mobile - sempre visível em mobile, oculto em desktop/tablet */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Navegação Desktop/Tablet - com tamanhos responsivos */}
          <nav className={`${getNavSize()} text-white items-center`}>
            <Link to="/fernanda-sena" className={navLinkClasses}>
              Fernanda Sena
            </Link>
            <Link to="/a-consulta-geriatrica" className={navLinkClasses}>
              A Consulta Geriátrica
            </Link>
            <Link to="/especialidades" className={navLinkClasses}>
              Especialidades
            </Link>
            <a
              href="https://wa.me/5519989609449"
              target="_blank"
              rel="noopener noreferrer"
              style={agendarBtnStyles}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
              className="whitespace-nowrap" // Impede quebra de linha no texto do botão
            >
              Agendar Consulta
            </a>
          </nav>
        </div>

        {/* Menu Mobile - abre abaixo da linha do logo */}
        {isMenuOpen && (
          <nav className="md:hidden w-full flex flex-col items-center gap-4 py-4 mt-2 bg-dark-green rounded-lg">
            <Link 
              to="/fernanda-sena" 
              className={`${navLinkClasses} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              Fernanda Sena
            </Link>
            <Link 
              to="/a-consulta-geriatrica" 
              className={`${navLinkClasses} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              A Consulta Geriátrica
            </Link>
            <Link 
              to="/especialidades" 
              className={`${navLinkClasses} text-lg`}
              onClick={() => setIsMenuOpen(false)}
            >
              Especialidades
            </Link>
            <a
              href="https://wa.me/5519989609449"
              target="_blank"
              rel="noopener noreferrer"
              style={agendarBtnStyles}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2"
            >
              Agendar Consulta
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}