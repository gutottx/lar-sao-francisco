import { Icon } from "@iconify/react";


export function AboutPage() {
  return(
    <>
           <div className="text-black w-full justify-center my-10 px-5 flex flex-col items-center">
          
          <h2 className="font-bold text-3xl my-3 hidden lg:flex md:block items-start text-start lg:min-w-[1076px]">Sobre Nós </h2>
           <div className="flex lg:flex-row flex-col gap-10 my-10 w-full lg:w-fit lg:items-start lg:min-w-[1076px]">
          <h2 className="font-bold text-3xl my-3 lg:hidden md:hidden md:w-fit">Sobre Nós </h2>
              <img src="/dog.webp" className="hidden md:hidden lg:block" alt="Imagem de um cachorro." />
              <div className="lg:max-w-[400px]">
                <h2 className="font-bold text-3xl my-3">Nossa missão:</h2>
                <p>No Lar São Francisco, acreditamos que todo animal merece amor, cuidado e um lar seguro. Desde nossa fundação, temos trabalhado incansavelmente para resgatar, reabilitar e encontrar famílias amorosas para cães e gatos abandonados ou em situação de vulnerabilidade.</p>
              </div>
            </div>

          <div className="flex flex-col justify-center  gap-4 text-[18px] max-w-[1076px]">
            <p>Tudo começou com um simples gesto de compaixão. Quando <span className="inline font-bold">Fernanda Aline da Silva</span> resgatou seu primeiro animal em situação de vulnerabilidade, não imaginava que aquele ato daria início a uma jornada transformadora. O que começou como um pequeno esforço individual logo se tornou um movimento maior, reunindo voluntários, apoiadores e amantes dos animais que compartilham a mesma missão: salvar vidas e oferecer um futuro melhor para cães e gatos abandonados.</p>
            <p>Com o tempo, percebemos que só o resgate não era suficiente. Muitos animais precisavam de cuidados médicos, alimentação e, principalmente, de um lar. Foi assim que estruturamos nossa ONG, garantindo que cada animal resgatado recebesse tratamento veterinário, carinho e a chance de uma adoção responsável.</p>
            <p>Ao longo de 12 anos, já ajudamos mais de <span className="font-bold">1.000</span> animais. Atualmente, cuidamos de <span className="font-bold">100</span> animais resgatados — entre cães, gatos, galinhas e coelhos — e seguimos firmes no compromisso de transformar realidades. Nosso trabalho só é possível graças a pessoas incríveis como você, que acreditam na causa e fazem parte dessa mudança.</p>
            <p>Seja adotando, doando ou voluntariando, você também pode fazer parte dessa história. Vamos juntos?</p>
          </div>
   

        <div className="flex   max-w-[1200px] items-center   lg:px-0 my-5">
        <div className="text-black grid lg:grid-cols-2 md:grid-cols-2 gap-4 w-full lg:w-auto">
          <div className="bg-[#DEC8E2] lg:w-[530px] lg:h-[180px] rounded-2xl p-10 text-center">
                    <div className="flex items-center justify-center">
                      <Icon icon="zondicons:pin" height={30}/>
                    </div>
                  <h2 className="font-bold text-2xl mb-3">Resgate e acolhimento</h2>
                  <p>Salvamos animais de situações de risco e proporcionamos um ambiente seguro para sua recuperação.</p>
              </div>

              <div className="bg-[#C8E2D5] lg:w-[530px] lg:h-[180px] rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center">
                  <Icon icon="mdi:heart" height={30}/>
              
                </div>
                  <h2 className="font-bold text-2xl mb-3">Cuidados veterinários</h2>
                  <p>Garantimos alimentação, vacinação, castração e tratamentos médicos essenciais.</p>
              </div>

              <div className="bg-[#C8DBE2] lg:w-[530px] lg:h-[180px] rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center">
                  <Icon icon="mdi:dog" height={30}/>
                    </div>
                  <h2 className="font-bold text-2xl mb-3">Adoção responsável</h2>
                  <p>Buscamos lares comprometidos em oferecer carinho e segurança aos nossos resgatados.</p>
              </div>

              <div className="bg-[#E2E1C8] lg:w-[530px] lg:h-[180px] rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center">
                  <Icon icon="mdi:gift" height={30}/>
                    </div>
                  <h2 className="font-bold text-2xl mb-3">Facilitamos doações</h2>
                  <p>Criamos listas personalizadas para que cada animal receba exatamente o que precisa.</p>
              </div>
            </div>
        </div>
        </div>
      
        </>
  )
}