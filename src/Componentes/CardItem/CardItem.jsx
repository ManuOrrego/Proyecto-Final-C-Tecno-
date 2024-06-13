
import { useContext } from "react"
import { InformacionCuenta } from "../Context/Contex"

function CardItem({datos}) {
  const context = useContext(InformacionCuenta)

  function obtenerInformacion (datos) {
    context.setShowModal(true)
    context.setComputadores(datos)
    context.setAccesorios(datos)
    context.setSalas(datos)
  }

  return (
    <div className='bg-[#1465bb] cursor-pointer w-56 h-60 rounded-lg shadow-xl'
    onClick={() => obtenerInformacion(datos)}>
    <figure className='relative mb-2 w-full h-4/5'>
      <img className='w-full h-full object-cover rounded-lg' src={datos.imagen} alt={datos.nombre} />
    </figure>
    <p className='flex justify-center'>
      <span className='text-md  text-white font-bold'>{datos.nombre}</span>
    </p>
  </div>

  )
}

export default CardItem
