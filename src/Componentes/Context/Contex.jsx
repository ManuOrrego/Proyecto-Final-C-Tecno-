import { createContext, useState } from "react";

export const InformacionCuenta = createContext();

export const ProveedorInformacion = ({ children }) => {
  const [usuariogeneral, setusuariogeneral] = useState({});
  const [botonstate, setbotonstate] = useState(true);
  const [iconoState, seticonoState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [Computadores, setComputadores] = useState([]);
  const [accesorios, setAccesorios] = useState([]);
  const [salas, setSalas] = useState([])
  const [isReservingOpen, setisReservingOpen] = useState(false);
  const [stockReserva, setStockReserva] = useState([]);
  const [reservaBoton, setReservaboton] = useState(true)

  const botonoff = () => setbotonstate(false);
  const iconoOn = () => seticonoState(true);
  const openReserving = () => setisReservingOpen(true);
  const closeReserving = () => setisReservingOpen(false);

  return (
    <InformacionCuenta.Provider
      value={{
        usuariogeneral,
        botonstate,
        setusuariogeneral,
        botonoff,
        iconoOn,
        iconoState,
        showModal,
        setShowModal,
        Computadores,
        setComputadores,
        accesorios,
        salas,
        setSalas,
        openReserving,
        setAccesorios,
        closeReserving,
        isReservingOpen,
        stockReserva,
        setStockReserva,
        reservaBoton,
        setReservaboton
      }}
    >
      {children}
    </InformacionCuenta.Provider>
  );
};
