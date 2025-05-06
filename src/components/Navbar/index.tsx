import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAuth } from "../../context/AuthContext";

export function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();

  return (
    <div>
      {/* Navbar principal */}
      <nav className="md:flex lg:flex justify-between lg:px-10 p-3 relative bg-white z-50 shadow-md">
        <div className="flex w-full md:w-auto justify-between">
          <Link to="/">
            <img src="/logo.png" alt="Logo do Lar São Francisco" className="h-[82px]" />
          </Link>
          <Icon 
            icon={isMenuOpen ? "material-symbols:close" : "material-symbols:menu-rounded"} 
            height={55} 
            color="#2B9EED" 
            className={`transition-all duration-200 md:hidden lg:hidden ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} 
            onClick={toggleMenu} 
          />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <ul className="text-[#121417] flex gap-5 text-[24px] font-light">
            {location.pathname !== '/' && (
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">
                <Link to="/">Home</Link>
              </li>
            )}
            <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">
              <Link to="/animais">Adote / Doe</Link>
            </li>
            <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED]">
              <Link to="/contato">Contato</Link>
            </li>
            {isAuthenticated && (
              <li className="hover:cursor-pointer border-b-2 border-transparent hover:border-[#2B9EED] font-semibold">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>

        {/* Botão de login/logout */}
        <div className="hidden md:flex justify-center items-center">
          {!isAuthenticated ? (
            <Link to="/login">
              <button className="bg-[#2B9EED] font-semibold p-2 rounded-full hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]">
                Entrar
              </button>
            </Link>
          ) : (
            <button
              onClick={logout}
              className="bg-[#2B9EED] font-semibold p-2 rounded-full hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]"
              aria-label="Sair da conta"
            >
              Sair
            </button>
          )}
        </div>
      </nav>

      {/* Menu mobile */}
      <div className={`absolute w-full h-[335px] bg-[#F2DBD5] flex flex-col items-center justify-center z-40 transition-all duration-300 
        ${!isMenuOpen ? "top-[-100vh]" : "top-[100px]"}`}>

        <ul className="text-[#121417] text-[24px] font-light flex flex-col gap-10">
          {location.pathname !== '/' && (
            <li onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
          )}
          <li onClick={toggleMenu}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/animais">Adote / Doe</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contato">Contato</Link>
          </li>
          {isAuthenticated && (
            <li onClick={toggleMenu}>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            {!isAuthenticated ? (
              <Link to="/login" onClick={toggleMenu}>
                <button className="lg:bg-[#2B9EED] font-semibold lg:p-2 lg:rounded-full hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]">
                  Entrar
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  logout();
                  toggleMenu();
                }}
                className="bg-[#2B9EED] font-semibold p-2 rounded-full hover:bg-[#1a8cd6] transition-colors duration-300 w-[84px]"
                aria-label="Sair da conta"
              >
                Sair
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
