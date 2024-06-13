import FormularioLogin from "../Login/FormularioLogin";

function FondoFormulario() {
  return (
    <div className="w-full h-[90%] bg-white rounded-tl-xl rounded-bl-xl shadow-md flex items-center justify-center ml-10 shadow-sky-400  ">
      <div className=" flex flex-col items-center w-1/2 h-xl shadow-xl border rounded-xl border-gray-200">
        <FormularioLogin />
      </div>
    </div>
  );
}

export default FondoFormulario;
