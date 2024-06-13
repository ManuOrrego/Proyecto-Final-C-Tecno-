import React from "react";

function Estadisticas({imag,titulo,subTitulo,seccion1,informacion1,seccion2,informacion2,estadistica}) {
  return (
    
      <figure className="w-1/4 bg-white p-5 shadow-xl m-10">
        <img src={imag} alt="estadistica1" className="bg-cover" />
        <h2 className="font-bold text-center">{titulo}</h2>
        <ul className="flex flex-col p-3 ">
          <h3 className="font-semibold p-1">{subTitulo}</h3>
          <li className="p-1">
            <span className="font-semibold">{seccion1} </span> {informacion1}
          </li>
          <li className="p-1">
          <span className="font-semibold"> {seccion2}</span> {informacion2}
          </li>
          <a href={estadistica} target="_blank"> <h6 className="text-[#1465bb] font-bold " > Ir a estadisticas</h6></a> 
        </ul>
      </figure>
  );
}

export default Estadisticas;
