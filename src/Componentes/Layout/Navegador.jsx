import React from "react";
import { NavLink } from "react-router-dom";

function Navegador() {
  const activeStyle = "underline underline-offset-4";

  return (
    <div className="flex flex-col w-3/5 mt-10"> {/* Agrega un margen superior */}
      <div className="flex justify-around items-center mb-5 font-bold">
        <NavLink
          to="/computadores"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Computadores
        </NavLink>
        <NavLink
          to="/accesorios"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Accesorios
        </NavLink>
        <NavLink
          to="/salas"
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Salas de computo
        </NavLink>
      </div>
    </div>
  );
}

export default Navegador;
