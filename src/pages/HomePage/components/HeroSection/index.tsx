import { Link } from "react-router-dom";

export function HeroSection () {
  return (
    <section 
      className="relative w-full h-[300px] md:h-[400px] bg-cover bg-center" 
      style={{ backgroundImage: 'url("/hero.png")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full text-white text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Nos ajude a salvar mais animais
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl">
          Com sua doação, podemos continuar oferecendo abrigo, alimento e tratamento veterinário.
        </p>
        <Link 
          to='/animais'
          className="bg-blue-500 font-bold text-[18px] md:text-2xl text-white py-1.5 px-5 rounded-full hover:bg-blue-600 transition"
        >Doar agora</Link>
      </div>
    </section>
  )
}
