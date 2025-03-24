function About() {
    return ( 
        <>
           <div className="text-black w-full justify-center my-3 px-20">
          <h2 className="font-bold text-3xl my-3">Nossa história</h2>
          <div className="flex flex-col gap-4 text-[18px]">
            <p>Tudo começou com um simples gesto de compaixão. Quando <p className="inline font-bold">[Nome do Fundador ou Nome da ONG]</p> resgatou seu primeiro animal em situação de vulnerabilidade, não imaginava que aquele ato daria início a uma jornada transformadora. O que começou como um pequeno esforço individual logo se tornou um movimento maior, reunindo voluntários, apoiadores e amantes dos animais que compartilham a mesma missão: salvar vidas e oferecer um futuro melhor para cães e gatos abandonados.</p>
            <p>Com o tempo, percebemos que só o resgate não era suficiente. Muitos animais precisavam de cuidados médicos, alimentação e, principalmente, de um lar. Foi assim que estruturamos nossa ONG, garantindo que cada animal resgatado recebesse tratamento veterinário, carinho e a chance de uma adoção responsável.</p>
            <p>Hoje, já ajudamos [X] animais, encontramos lares amorosos para [Y] cães e gatos e seguimos firmes no compromisso de transformar realidades. Nosso trabalho só é possível graças a pessoas incríveis como você, que acreditam na causa e fazem parte dessa mudança.</p>
            <p>Seja adotando, doando ou voluntariando, você também pode fazer parte dessa história. Vamos juntos?</p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
        <div className="text-black grid grid-cols-2 gap-4">
          <div className="bg-[#DEC8E2] w-[530px] h-[180px] rounded-2xl p-10 text-center">
                    <div className="flex items-center justify-center">
                      <Icon icon="zondicons:pin" height={24}/>
                    </div>
                  <h2>Resgate e acolhimento</h2>
                  <p>Salvamos animais de situações de risco e proporcionamos um ambiente seguro para sua recuperação.</p>
              </div>

              <div className="bg-[#C8E2D5] w-[530px] h-[180px] rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center">
                  <Icon icon="mdi:heart" height={24}/>
              
                </div>
                  <h2>Cuidados veterinários</h2>
                  <p>Garantimos alimentação, vacinação, castração e tratamentos médicos essenciais.</p>
              </div>

              <div className="bg-[#C8DBE2] w-[530px] h-[180px] rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center">
                  <Icon icon="mdi:dog" height={24}/>
                    </div>
                  <h2>Adoção responsável</h2>
                  <p>Buscamos lares comprometidos em oferecer carinho e segurança aos nossos resgatados.</p>
              </div>

              <div className="bg-[#E2E1C8] w-[530px] h-[180px] rounded-2xl p-10 text-center">
              <div className="flex items-center justify-center">
                  <Icon icon="mdi:gift" height={24}/>
                    </div>
                  <h2>Facilitamos doações</h2>
                  <p>Criamos listas personalizadas para que cada animal receba exatamente o que precisa.</p>
              </div>
            </div>
        </div>
      
        </>
     );
}

export default About;