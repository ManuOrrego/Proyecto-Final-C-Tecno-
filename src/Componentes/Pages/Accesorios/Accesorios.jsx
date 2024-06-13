import CardItem from "../../CardItem/CardItem";
import Layaout from "../../Layout/Layaout";
import { useEffect, useState, Fragment, useContext } from "react";
import { collection } from "firebase/firestore";
import { connDatabase } from "../../../database/Firebase";
import { getDocs } from "firebase/firestore";
import Navegador from "../../Layout/Navegador";
import ModalAcc from "../../Modal/ModalAcc";
import { InformacionCuenta } from "../../Context/Contex";

function Accesorios() {
  const [accesorios, setAccesorios] = useState([]);
  const context = useContext(InformacionCuenta)
  

  async function getAccesorios() {
    let collectionAccesorios = collection(connDatabase, "accesorios");
    let resultado = await getDocs(collectionAccesorios);
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
    setAccesorios(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getAccesorios();
  }, []);

  return (
    <Layaout>
      <Fragment>
      <Navegador/>
        <div className="grid grid-cols-4 gap-5">
          {accesorios.map((accesorio) => (
            <CardItem datos={accesorio} />
          ))}
        </div>
        <ModalAcc
            isVisible={context.showModal}
            onClose={() => context.setShowModal(false)}
            acc={context.accesorios}
         ></ModalAcc> 
      </Fragment>
    </Layaout>
  );
}

export default Accesorios;
