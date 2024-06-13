function CardServicios({ img, titulo }) {
  return (
    <div>
      <figure className="p-[10px]  w-[400px] h-[330px] flex flex-col  bg-white shadow-lg rounded-sm ">
        <img className="bg-cover" src={img} alt={titulo} />
        <h2 className="font-bold text-center text-[20px]">{titulo}</h2>
        <h5 className="text-[#1465bb] font-bold text-center">
          Realiza tu reserva aqui...
        </h5>
      </figure>
    </div>
  );
}

export default CardServicios;
