import Image from "next/image";
import ico03 from "/public/assets/ico03.png";
import maxlg from "/public/assets/maxlg.png";
import max01 from "/public/assets/max01.png";
import max02 from "/public/assets/max02.png";
import max03 from "/public/assets/max03.png";
import max04 from "/public/assets/max04.png";

import item01 from "/public/assets/item01.png";
import item02 from "/public/assets/item02.png";
import item03 from "/public/assets/item03.png";
import item04 from "/public/assets/item04.png";



function AnimalPage() {
    return ( 
        <>
        <div className="text-black flex lg:flex-row flex-col gap-10 p-10 w-full">
            <div className="max-w-[300px] py-5">
                <Image src={maxlg} className="max-w-[300px] rounded-3xl" alt="Imagem de um cachorro." />
                <div className="flex gap-3 items-center">
                   <h1 className="text-[24px] font-bold">Nome</h1>
                    <p>sexo</p>
                </div>
                <p>Idade</p>
                <p>Personalidade</p>
                <p>Porte</p>
                <p>Vacinado</p>
                <p>Castrado</p>
                <div>
                    <button className="p-3 w-fit rounded-3xl border font-bold hover:cursor-pointer">Quero Adotar</button>
                    <button className="p-3 w-fit bg-[#121417] text-white rounded-3xl font-bold hover:cursor-pointer">Quero doar</button>
                </div>
                <Image src={ico03}  className="max-w-[200px] mt-10" alt="Ícone de uma pata de cachorro." />
            </div>

             <div className="max-w-[800px] py-5">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">   
                    <Image src={max01} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl col-span-1" alt="Imagem de um cachorro." />
                    <Image src={max02} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl col-span-1" alt="Imagem de um cachorro." />
                    <Image src={max03} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl col-span-1" alt="Imagem de um cachorro." />
                    <Image src={max04} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl col-span-1" alt="Imagem de um cachorro." />
                </div>
                <div>
                  <h2 className="font-bold text-[24px]">Conheça Max</h2>
                  <p>Max é um verdadeiro guerreiro! Resgatado das ruas, ele enfrentou muitos desafios, mas nunca perdeu a alegria de viver. Cheio de energia e amor para dar, ele adora correr, brincar e receber carinho. Max se dá bem com outros cães e pessoas, sendo o companheiro perfeito para quem busca um amigo leal e afetuoso. </p>
                </div>
                
                
                <div className="py-10 ">
                    <h2 className="font-bold text-[24px]">Lista do Max</h2>
                    <div className="gap-2 py-2 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
                        <div>
                            <Image src={item01} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl" alt="" />
                             <p>Coleira</p>
                             <p>R$25,00</p>
                        </div>
                        <div>
                          <Image src={item02} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl" alt="" />
                            <p>Coleira</p>
                            <p>R$25,00</p>
                        </div>
                        <div>
                        <Image src={item03} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl" alt="" />
                            <p>Coleira</p>
                            <p>R$25,00</p>
                        </div>
                        <div>
                        <Image src={item04} className="lg:w-[200px] max-w-[300px] w-[155px] rounded-2xl" alt="" />
                            <p>Coleira</p>
                            <p>R$25,00</p>
                        </div>
                    </div>

                </div>
            </div>  

        </div>

        </>
     );
}

export default AnimalPage;