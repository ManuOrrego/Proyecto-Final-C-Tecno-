import React, { useState, useEffect } from "react";
import { initStorage, connDatabase } from "../../../database/Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import Swal from "sweetalert2";
import logo from "../../../assets/logodefinitivo.png"
const Registro = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [apellidos, setUser] = useState("");
  const [contrasena, setPassword] = useState("");
  const [nombres, setName] = useState("");
  const [email, setEmail] = useState("");
  const [programa, setPrograma] = useState("");
  const [img, setImg] = useState("");
  let redireccion = useNavigate();

  async function getUsuarios() {
    let resultado = collection(connDatabase, "usuarios");
    let data = await getDocs(resultado);

    console.log(data.docs.map((doc) => ({ ...doc.data() })));
    setUsuarios(data.docs.map((doc) => ({ ...doc.data() })));
  }
  useEffect(() => {
    getUsuarios();
  }, []);

  const buscarUsuario = () => {
    let estado = usuarios.some((usuario) => usuario.email === email);
    console.log("buscar usuario " + estado)
    return estado;

  };


  async function subirImg(img) {
    let referenciaImg = ref(initStorage, v4());
    await uploadBytes(referenciaImg, img);
    console.log(referenciaImg);
    let urlImg = await getDownloadURL(referenciaImg);
    return urlImg;
  }
  async function crearUsuario() {
    let imagen = await subirImg(img);
    let nuevoUsuario = {
      nombres,
      apellidos,
      email,
      contrasena,
      programa,
      imagen,
    };
    let enviarUsuario = collection(connDatabase, "usuarios");
    await addDoc(enviarUsuario, nuevoUsuario);
  }

  const registrarUsuario = () => {
    if (!buscarUsuario()) {
      if (nombres === "" || apellidos == "" || email === "" || contrasena === "" || programa === "" || img === "") {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Llena todos los campos",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        crearUsuario();
        Swal.fire({
          title: "Bievenido",
          text: "Será redireccionado al panel principal",
          icon: "success",
        });
        redireccion("/login");
      }

    } else {
      Swal.fire({
        title: "Error",
        text: "Usuario ya existe en la base de datos",
        icon: "error",
      });
    }
  };
  return (
    <div className="bg-blue-900 w-full h-screen flex items-center justify-center ">
      <div className="w-[90%] h-[90%] bg-white rounded-lg rounded-bl-xl shadow-md flex items-center justify-center ml-10 shadow-sky-400 ">
        <div
          id="contenedor1"
          className="w-[35%] h-[100%] bg-gradient-to-r from-sky-500 to-blue-900 rounded-s-xl shadow-sky-400 shadow-md   mr-10   "
        >
          <div className="h-[90%] flex justify-center items-center ">
            <img
              className=" scale-[80%]"
              src={logo}
              alt="logodefinitivo"
            />
          </div>
        </div>
        <div className=" w-[65%] flex flex-col  items-center  h-xl shadow-xl border rounded-xl border-gray-200 m-11">
          <div className="w-[60%] h-lg  flex-col  m-10  ">

            <form className="flex flex-col  " action="registro">
              <h2 className="text-center text-3xl font-sans font-bold flex  justify-center text-blue-600   mb-8">Registro</h2>
              <input className="w-full h-12 py-1 mb-2 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nombre"
              />
              <input className="w-full h-12 py-1 mb-2 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
                onChange={(e) => setUser(e.target.value)}
                type="text"
                placeholder="Apellido"
              />
              <input className="w-full h-12 py-1 mb-2 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Correo"
              />
              <input className="w-full h-12 py-1 mb-2 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Contraseña"
              />
              <input className="w-full h-12 py-1 mb-2 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
                onChange={(e) => setPrograma(e.target.value)}
                type="text"
                placeholder="Programa"
              />
              <input className="w-full h-12 py-1 rounded-xl p-4 border border-gray-300 focus:outline-blue-400" onChange={(e) => setImg(e.target.files[0])} type="file" />
              <button className="w-full font-bold bg-blue-700 text-white p-2 h-12 flex justify-center mt-8 rounded-xl text-lg ease-in duration-300 hover:bg-sky-500" onClick={registrarUsuario} type="button">
                Guardar</button>
              <p className="flex  justify-center p-2 text-blue-600 font-sans font-semibold  text-2xl">
                <Link to="/login">Iniciar Sesión</Link>
              </p>
            </form>

          </div>
        </div>
      </div>

    </div>


  );
};

export default Registro;
