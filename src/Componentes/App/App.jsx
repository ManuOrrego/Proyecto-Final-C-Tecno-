import { useRoutes, BrowserRouter } from "react-router-dom";
import { ProveedorInformacion } from "../Context/Contex";
import Login from "../Auth/Login/Login";
import "./App.css";
import Home from "../Pages/Home/Home";
import Accesorios from "../Pages/Accesorios/Accesorios";
import Salas from "../Pages/salas/Salas";
import Computadores from "../Pages/computadores/Computadores";
import Reservando from "../Pages/Reservas/Reservando";
import TerminandoReserva from "../Pages/Reservas/TerminandoReserva";
import Registro from "../Auth/Registro/Registro";
import EditarUsuario from "../Auth/EditarUsuario/EditarUsuario";
import MisReservas from "../Pages/Reservas/MisReservas";

const Redirecciones = () => {
  let rutas = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login/> },
    {path: "/accesorios", element: <Accesorios/>},
    { path: "/salas", element: <Salas/> },
    { path: "/computadores", element: <Computadores/> },
    { path: "/reserva", element: <TerminandoReserva/> },
    { path: "/registro", element: <Registro/>},
    { path: "/EditarUsuario", element: <EditarUsuario/>},
    { path: "/mi_reserva", element: <MisReservas/> },
  ]);
  return rutas;
}



function App() {
  return (
    <ProveedorInformacion>
      <BrowserRouter>
        <Redirecciones />
        <Reservando/>
      </BrowserRouter>
    </ProveedorInformacion>
  );
}

export default App;
