import { Copyright } from "lucide-react";

export function Footer() {
  return(
    <footer className="bg-[#1E1E1E] py-[40px] px-4 flex flex-col gap-6 items-center">
      <div className="flex justify-evenly w-full md:w-1/4 text-white">
      <a 
        href="https://www.facebook.com/ong.lar.sao.francisco/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        <span>Facebook</span>
      </a>

      <a 
        href="https://www.instagram.com/larsaofranciscosorocaba/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        <span>Instagram</span>
      </a>

      </div>
      <div>
        <div className="text-white flex items-center">
          <Copyright size={14} />
          2025 | Grupo DRP05-PJI110-001GRUPO-014 | Univesp
        </div>
      </div>
    </footer>
  )
}
