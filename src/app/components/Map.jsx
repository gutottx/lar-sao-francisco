function Map() {
  return (
    <>
      <div className=" md:flex flex-col gap-3 my-5 p-5 rounded-2xl bg-white text-black m-16">
        <div className="text-[28px] font-bold pb-5 flex justify-start mb-5">
          <p>Onde estamos</p>
        </div>
        <div className="flex gap-5 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.508432687855!2d-47.51216258911936!3d-23.51420892939673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58b4686345021%3A0x6c12d178dc50cc9b!2sAv.%20Prof.%20Fl%C3%A1vio%20Fazano%2C%20293%2C%20Sorocaba%20-%20SP%2C%2018051-725!5e0!3m2!1spt-BR!2sbr!4v1742392034855!5m2!1spt-BR!2sbr"
            width="639"
            height="396"
            loading="lazy"
          ></iframe>
          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              <Icon icon="ri:map-pin-fill" height={24} />
              <p>Av. Flávio Fazano, 293 - Piazza de Roma - Sorocaba / SP</p>
            </div>
            <div className="flex gap-3">
              <Icon icon="mingcute:instagram-fill" height={24} />
              <p>@larsaofranciscosorocaba</p>
            </div>
            <div className="flex gap-3">
              <Icon icon="mage:whatsapp-filled" height={24} />
              <p>(15) 98800-1704</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
