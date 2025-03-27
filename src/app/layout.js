import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Public_Sans } from 'next/font/google';


export const metadata = {
  title: "Lar São Francisco",
  description: "Lar São Francisco é uma organização dedicada ao resgate, cuidado e reabilitação de animais em situação de vulnerabilidade.",
};

const publicSans = Public_Sans({ subsets: ['latin'], weight: ['200','300', '400', '700'] });




export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <div className={publicSans.className}>
           {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
