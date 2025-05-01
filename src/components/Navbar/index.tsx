import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full py-6 md:px-16 ">
      {/* ----- Mobile & Tablet ----- */}
      <div className="flex flex-col items-center gap-3 lg:hidden mb-4 px-4">
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="Logo Lar São Francisco" 
              className="w-[80px]"
            />
          </Link>
          <div className="flex gap-2 items-center">

              <Link to="/dashboard" className="font-bold text-[#2e2d2d] hover:text-[#121417]">
                Dashboard
              </Link>

            <Link 
              to="/login" 
              className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition"
            >
              Entrar
            </Link>

          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/sobre" className="font-bold text-[#2e2d2d] hover:text-[#121417]">Sobre</Link>
          <Link to="/animais" className="font-bold text-[#2e2d2d] hover:text-[#121417]">Adote/ Doe</Link>
          <Link to="/contato" className="font-bold text-[#2e2d2d] hover:text-[#121417]">Contato</Link>
        </div>
      </div>

      {/* ----- Laptop & Desktop ----- */}
      <div className="hidden lg:flex flex-row items-center justify-between w-full">
        <Link to="/">
          <img 
            src="/logo.png" 
            alt="Logo Lar São Francisco" 
            className="w-[80px]"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/sobre" className="font-bold text-[#2e2d2d] hover:text-[#121417]">Sobre</Link>
          <Link to="/animais" className="font-bold text-[#2e2d2d] hover:text-[#121417]">Adote/ Doe</Link>
          <Link to="/contato" className="font-bold text-[#2e2d2d] hover:text-[#121417]">Contato</Link>
        </div>

        {/* Botão de login */}
        <div className="flex gap-2 items-center">
            <Link to="/dashboard" className="font-bold text-[#2e2d2d] hover:text-[#121417]">
              Dashboard
            </Link>

            <Link 
              to="/login" 
              className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition"
            >
              Entrar
            </Link>

            <button 
              className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition"
            >
              Sair
            </button> 

        </div>
      </div>
    </nav>
  );
}

