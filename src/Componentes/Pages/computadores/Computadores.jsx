import { connDatabase } from "../../../database/Firebase.jsx";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import Layout from "../../Layout/Layaout.jsx";
import CardItem from "../../CardItem/CardItem.jsx";
import ModalPc from "../../Modal/ModalPc.jsx";
import { InformacionCuenta } from "../../Context/Contex";
import Navegador from "../../Layout/Navegador.jsx";
import Reservando from "../Reservas/Reservando.jsx";

function Computadores() {
  const [computadores, setComputadores] = useState([]);
  const context = useContext(InformacionCuenta);

  async function getComputadores() {
    let collectionComputadores = collection(connDatabase, "computadores");
    let resultado = await getDocs(collectionComputadores);
    setComputadores(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getComputadores();
  }, []);

  return (
    <>
      <Layout>
        <Fragment>
          <Navegador />
          <div className="grid grid-cols-4 gap-5">
            {computadores.map((computador) => (
              <CardItem datos={computador} />
            ))}
          </div>
          <Reservando />
          <ModalPc
            isVisible={context.showModal}
            onClose={() => context.setShowModal(false)}
            pc = {context.Computadores}
          ></ModalPc>
        </Fragment>
      </Layout>
    </>
  );
}

export default Computadores;
