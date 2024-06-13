import React, { useContext, useEffect, useState } from "react";
import CardMiReserva from "../../CardItem/CardMiReserva";
import Layaout from "../../Layout/Layaout";
import Navegador from "../../Layout/Navegador";
import { connDatabase } from "../../../database/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { InformacionCuenta } from "../../Context/Contex";
import Swal from "sweetalert2";

function MisReservas() {
  const [miReserva, setMiReserva] = useState([]);
  const[email,setEmail] = useState("")
  const [reservaEncontrada, setReservaEncontrada] = useState(null);
 



  async function getReserva() {
    let collectionUsuarios = collection(connDatabase, "reservas");
    let resultado = await getDocs(collectionUsuarios);
    console.log(resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setMiReserva(resultado.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(() => {
    getReserva();
  }, []);

  function EncontrarReserva() {
    let encontrada = miReserva.find((reserva)=>reserva.email === email);
    if (encontrada) {
      setReservaEncontrada(encontrada);
    } else {
      setReservaEncontrada(null);
      Swal.fire("No tienes reservas en el momento");
    }
  }

  

  return (
    <>
      <div>
        <Layaout>
          <h2 className="font-bold mb-2 text-[20px] mt-10">Mis reservas</h2>

          <input className="w-60 border-[2px] border-solid  border-[#1465bb] hover:border-[#81c9fa] cursor-pointer p-1 rounded-md"
           type="email"  placeholder="Ingresa tu email" onChange={(e)=>setEmail(e.target.value)}/>
          <button className="bg-[#003785] text-white p-2 rounded-lg mt-2 mb-4"  onClick={EncontrarReserva}>Buscar</button>
          {reservaEncontrada ? (
            <div>
              <h4 className="font-semibold mb-2 text-center">Reserva realizada para: {reservaEncontrada.tiempoCompleto}</h4>
              <div className=" flex">
              {reservaEncontrada.reservados && reservaEncontrada.reservados.length > 0 ? (
                reservaEncontrada.reservados.map((item) => (
                    
                  <CardMiReserva key={item.id} item={item} />
                  
                ))
              ) : (
                <p>No hay reservas asociadas.</p>
              )}
              </div>
            </div>
          ) : null}
        </Layaout>
      </div>
    </>
  );
}

export default MisReservas;
