import { XCircleIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { InformacionCuenta } from "../Context/Contex";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ModalAcc({ acc, isVisible, onClose }) {
  const context = useContext(InformacionCuenta);
  let redireccion = useNavigate();
  if (!isVisible) return null;

  console.log("acc" + acc)

  function actionModal(event,acc) {
    if (Object.keys(context.usuariogeneral).length === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Inicia sesión para Continuar",
        showConfirmButton: false,
        timer: 1500
      });
      redireccion("/login")
     
    }else{
      event.stopPropagation()
      context.openReserving();
      context.setStockReserva((prevReserva) => [...prevReserva, acc]);
      context.setShowModal(false)
      context.setReservaboton(true)
  }

 
  }


  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-2/6 h-2/4 rounded-xl">
        <div className="h-[15%] flex">
          <h1 className="w-[99%] text-center text-3xl font-extrabold self-center">{acc.nombre}</h1>
          <button onClick={onClose}>
            <XCircleIcon className="w-8 text-red-600 text-xl m-2 self-" />
          </button> 
        </div>
        <div className="flex justify-center h-[65%] mt-3">
          <div className="w-[60%] h-[100%] flex flex-col">
            <div className="w-[100%] h-[70%] flex justify-center">
              <img src={acc.imagen} alt="imagen" />
            </div>
            <div className="w-[100%] h-[100%] flex justify-center items-start ">
                <h2>{acc.descripcion}</h2>
            </div>
          </div>
        </div>
        <div className="h-[15%] flex justify-center items-start">
          <button className="bg-[#003785] text-white p-3 rounded-lg" onClick={(event) => actionModal(event,acc)}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAcc;
