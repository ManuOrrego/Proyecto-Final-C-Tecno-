import React, { useContext, useState } from "react";
import {connDatabase } from "../../../database/Firebase";
import { addDoc, collection} from "firebase/firestore";
import Layout from "../../Layout/Layaout";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navegador from "../../Layout/Navegador";
import { InformacionCuenta } from "../../Context/Contex";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



function TerminandoReserva() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [tiempoCompleto, setTimepoCompleto] = useState("");
  const context = useContext(InformacionCuenta);
  let redireccion = useNavigate();

 

  dayjs.locale("es");
  const localizer = dayjsLocalizer(dayjs);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setFechaSeleccionada(selectedDate);
  };

  const handleTimeChange = (event) => {
    setHoraSeleccionada(event.target.value);
  };

  
  const handleSave = () => {
    const fechaCompleta = `${fechaSeleccionada}T${horaSeleccionada}`;

    if (dayjs(fechaCompleta, "YYYY-MM-DDTHH:mm", true).isValid()) {
      setTimepoCompleto(dayjs(fechaCompleta).format());
    } else {
      console.error(
        "Invalid date and time format. Please check your selections."
      );
    }
  };

  const events = [
    {
      start: dayjs(tiempoCompleto).toDate(),
      end: dayjs(tiempoCompleto).add(2, "hour").toDate(),
      title: context.usuariogeneral.nombres,
    },
  ];

  async function guardarPc () {
    let email = context.usuariogeneral.email
    let reservados = context.stockReserva
      let nuevaReserva = {
        reservados,
        email,
        tiempoCompleto
      };
      let enviarReserva = collection(connDatabase, "reservas");
      await addDoc(enviarReserva, nuevaReserva);
      terminarProceso()
    }

    function terminarProceso(){
      context.setStockReserva([]);
      redireccion("/")
      context.closeReserving()
    }

  function confirmarReserva(){
    Swal.fire({
      title: "¿Seguro que deseas reservar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reservar"
    }).then((result) => {
      if (result.isConfirmed) {
        guardarPc()
       
        Swal.fire({
          title: "Reservado!",
          text: "Tu reserva ha sido guardada",
          icon: "success"
        });
       
      }
    });
  }

  return (
    <>
      <Layout>
        <Navegador />
        <div className="flex mt-8">
          <div className=" h-80 flex flex-col ml-[-15%] mr-24   justify-around">
            <h2 className="font-semibold">Fecha en la que deseas reservar</h2>
            <input
              className="border-[2px] border-solid  border-[#1465bb] hover:border-[#81c9fa] cursor-pointer p-1 rounded-md"
              type="date"
              onChange={handleDateChange}
            />
            <h2 className="font-semibold" >Hora</h2>
            <input
              className=" border-[2px] border-solid  border-[#1465bb] hover:border-[#81c9fa] cursor-pointer p-1 rounded-md"
              type="time"
              value={horaSeleccionada}
              onChange={handleTimeChange}
            />
            <button
              className="bg-[#003785] rounded-md w-40 self-center p-1 text-white"
              onClick={handleSave}
            >
              Reservar
            </button>
          </div>
          <div>
            <div className="h-96 flex justify-center">
              <Calendar
                localizer={localizer}
                events={events}
                min={dayjs("2024-06-11T08:00").toDate()}
                max={dayjs("2024-06-11T20:00").toDate()}
              />
            </div>
            <div className="flex justify-center">
              <button className="bg-[#003785] p-3 text-white rounded-lg m-5" onClick={confirmarReserva} >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default TerminandoReserva;
