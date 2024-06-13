import logo from "../../../assets/logodefinitivo.png";

function FondoimagenLogin() {
  return (
    <div
      id="contenedor1"
      className="w-1/2 h-[90%] bg-gradient-to-r from-sky-500 to-blue-900 rounded-e-xl shadow-sky-400 shadow-md   mr-10   "
    >
      <div className="h-[100%] flex justify-center items-center">
        <img
          className=" ml-[-230px] mr-10"
          src={logo}
          alt="logodefinitivo"
        />
      </div>
    </div>
  );
}
export default FondoimagenLogin;