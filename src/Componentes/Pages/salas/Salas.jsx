import Layout from "../../Layout/Layaout";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { connDatabase } from "../../../database/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";
import CardItem from "../../CardItem/CardItem";
import Navegador from "../../Layout/Navegador.jsx";
import { InformacionCuenta } from "../../Context/Contex.jsx";
import ModalSala from "../../Modal/ModalSala.jsx";

function Salas() {
  const [salas, setSalas] = useState([]);
  const context = useContext(InformacionCuenta);

  async function getSalas() {
    let collectionSalas = collection(connDatabase, "Salas");
    let resultado = await getDocs(collectionSalas);
    setSalas(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getSalas();
  }, []);

  return (
    <>
      <Layout>
        <Fragment>
          <Navegador />
          <div className="grid grid-cols-4 gap-5">
            {salas.map((sala) => (
              <CardItem datos={sala} />
            ))}
          </div>

          <ModalSala
            isVisible={context.showModal}
            onClose={() => context.setShowModal(false)}
            sala={context.salas}
          ></ModalSala>
        </Fragment>
      </Layout>
    </>
  );
}

export default Salas;
