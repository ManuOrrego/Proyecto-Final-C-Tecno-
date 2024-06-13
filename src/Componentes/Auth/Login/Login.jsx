import FondoFormulario from "../Login/FondoFormulario";
import FondoImagenLogin from "../Login/FondoImagenLogin";

function Login() {
  return (
    <main className="bg-blue-900 w-full h-screen flex items-center  ">
      <FondoFormulario />
      <FondoImagenLogin />
    </main>
  );
}

export default Login;