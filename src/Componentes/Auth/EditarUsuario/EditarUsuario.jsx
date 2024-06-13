import React, { useState, useEffect } from "react";
import { initStorage,connDatabase } from "../../../database/Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, Link, useParams } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const EditarUsuario = () => {
    
    const [apellido, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setName] = useState("");
    const [email, setEmail] = useState("");
    const [programa, setprograma] = useState("");
    const [img, setImg] = useState("");
    let { id } = useParams();
    let redireccion = useNavigate();
  
    async function getUsuarioId(id) {
      let resultado = await getDoc(doc(connDatabase, "usuarios", id));
      console.log(resultado);
      setEmail(resultado.data().email);
      setprograma(resultado.data().programa);
      setImg(resultado.data().imgServer);
      setName(resultado.data().nombre);
      setPassword(resultado.data().password);
      setUser(resultado.data().apellido);
    }
  
    useEffect(() => {
      getUsuarioId(id);
    }, []);
  
    const subirImg = async (imagen) => {
      let referenciaImg = ref(initStorage, v4());
      console.log(referenciaImg);
      await uploadBytes(referenciaImg, imagen);
      let urlImagen = await getDownloadURL(referenciaImg);
      return urlImagen;
    };
  
    async function editarUsuario() {
      let imgServer = await subirImg(img);
      let nuevoUsuario = {
        apellido,
        password,
        email,
        nombre,
        programa,
        imgServer,
      };
      let enviarUsuario = doc(connDatabase, "usuarios", id);
      await updateDoc(enviarUsuario, nuevoUsuario);
      redireccion("/listado-usuarios");
    }
  
    return (
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              onChange={(e) => setUser(e.target.value)}
              type="text"
              placeholder="username"
              value={apellido}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              value={password}
            />
            <input
              onChange={(e) => setprograma(e.target.value)}
              type="text"
              placeholder="programa"
              value={password}
            />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Nombre"
              value={nombre}
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              value={email}
            />
            <input onChange={(e) => setImg(e.target.files[0])} type="file" />
            <button onClick={editarUsuario} type="button">
              Editar
            </button>
            <button type="button" className="message">
              <Link className="cancelar" to="/listado-usuarios">
                Cancelar
              </Link>
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default EditarUsuario;
  


