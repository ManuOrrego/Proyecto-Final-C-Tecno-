import whatsapp from "../../../assets/whatsapp.png";
import chatgpt from "../../../assets/chat-gpt.png";
import google from "../../../assets/google.png";
import { connDatabase } from "../../../database/Firebase";
import { useContext } from "react";
import { InformacionCuenta } from "../../Context/Contex";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function FormularioLogin() {
    const [dbUsuario, setDbUsuario] = useState([]);
    const [email, setEmail] = useState("");
    const [contrasena, setcontrasena] = useState("");
    const contex = useContext(InformacionCuenta)
    let redireccion = useNavigate();

    async function getUsuarios() {
        let collectionUsuarios = collection(connDatabase, "usuarios");
        let resultado = await getDocs(collectionUsuarios);
        console.log()
        setDbUsuario(resultado.docs.map((doc) => ({ ...doc.data() })));
      }
      useEffect(() => {
        getUsuarios();
      }, []);

      function buscarUsuario() {
        let UsuarioEncontrado = dbUsuario.find((usuario)=> usuario.email === email && usuario.contrasena == contrasena )
          if(UsuarioEncontrado){
           contex.setusuariogeneral(UsuarioEncontrado)
           contex.botonoff()
           contex.iconoOn()
           Swal.fire({
            icon: "success",
            title: "Bienvenido a tu cuenta",
            showConfirmButton: false,
            timer: 1500
          });
           redireccion("/")
          }else{
            let timerInterval;
            Swal.fire({
                     icon: "error",
                     title: "Usuario no registrado",
                     html: "Porfavor verifica tus datos",
                     timer: 2000,
                     timerProgressBar: true,
                     didOpen: () => {
                       Swal.showLoading();
                       const timer = Swal.getPopup().querySelector("b");
                       timerInterval = setInterval(() => {
                         timer.textContent = `${Swal.getTimerLeft()}`;
                       }, 100);
                     },
                     willClose: () => {
                       clearInterval(timerInterval);
                     }
                   })
          }
      }

  return (
    <>
    <div className="w-[70%] h-lg  flex-col m-10 ">
      <h2 className="text-center text-5xl font-sans font-semibold flex  justify-center  mb-10">
        Bienvenido
      </h2>
      <p className="text-2xl m-2 font-sans font-medium ">Correo:</p>

      <input
        className=" w-full h-12 py-1 rounded-xl p-4 border border-gray-300 focus:outline-blue-400  "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="Ingrese su correo electronico"
      />
      <p className="text-2xl m-2 font-sans font-medium ">Contraseña:</p>

      <input
        className=" bg-white w-full  h-12 py-1 border   rounded-xl border-gray-300 focus:outline-blue-400 p-4"
        onChange={(e) => {
          setcontrasena(e.target.value);
        }}
        type="password"
        placeholder="Ingrese su contraseña"
      />

      <div className="flex justify-center">
        <button
          className="w-full font-bold bg-blue-700 text-white p-2 h-12 flex justify-center mt-8 rounded-xl text-lg ease-in duration-300 hover:bg-sky-500"
          onClick={buscarUsuario}
        >
          {" "}
          INGRESAR{" "}
        </button>
      </div>

      <div className="flex justify-center">
        <h4>
          <Link to ="/registro" className=" flex justify-center p-2 text-blue-600 font-sans font-semibold  text-2xl "
            >
            Crear Usuario
          </Link>
        </h4>
      </div>

      <div className=" flex flex-row justify-center ">
        <a
          className="w-12 h-12 bg-white m-2 "
          target="_blank"
          href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin&theme=mn&ddm=0"
        >
          <img src={google} alt="iconogoogle" />
        </a>
        <a
          className="w-12 h-12 bg-white m-2 "
          target="_blank"
          href="https://chat.openai.com/"
        >
          <img src={chatgpt} alt="iconochatgpt" />
        </a>
        <a
          className="w-12 h-12 bg-white m-2"
          target="_blank"
          href="https://web.whatsapp.com/"
        >
          <img src={whatsapp} alt="iconowhatsapp" />
        </a>
      </div>
    </div>
  </>
  )
}

export default FormularioLogin
