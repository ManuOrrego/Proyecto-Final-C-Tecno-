import CardServicios from "./CardServicios.jsx";
import computador from '../../../assets/computador.jpg';
import sala from '../../../assets/salaComputo1.jpg';
import accesorio from '../../../assets/Accesorio.jpg';
import { Link } from 'react-router-dom';

function SolicitarServicio() {
  return (
    <section className="flex flex-row mt-3 w-full">
      <div className="bg-[#003785] w-[35%] h-96 flex flex-col justify-center items-start pl-10">
        <h1 className="text-white font-bold text-5xl ml-10">Solicitar Servicios</h1>
        <p className="text-white text-1xl  mt-3 ml-10">"Facilitando tu acceso a la mejor tecnología, de forma rápida y sencilla."</p>
      </div>
      <div className="w-[65%]">
        <div className="flex justify-evenly w-full mt-10 ml-[-100px] gap-5">
          <Link to="/computadores">
            <CardServicios img={computador} titulo="Computadores" parrafo="Solicita la reserva de tu computador" />
          </Link>
          <Link to="/salas">
            <CardServicios img={sala} titulo="Salas" />
          </Link>
          <Link to="/accesorios">
            <CardServicios img={accesorio} titulo="Accesorios" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SolicitarServicio;


//Horario mas usado  dia mas usado sala mas usada 