import React from "react";

function CardMiReserva({item}) {
  return (
    <div className="border border-solid border-black hover:border-[#81c9fa] w-36 rounded-lg  m-3">
      <figure className="p-3 flex  flex-col justify-center items-center">
      <div className=" items-end jus">
          <p className="font-bold ">{item.nombre}</p>
        </div>
        <img className="w-[70%]" src={item.imagen} alt="" />
      </figure>
    </div>
  );
}

export default CardMiReserva;
