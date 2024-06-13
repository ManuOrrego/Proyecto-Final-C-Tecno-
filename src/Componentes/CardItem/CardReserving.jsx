
import { ArchiveBoxXMarkIcon } from "@heroicons/react/16/solid";


const CardReserving = props => { 
  const {id,img,nombre,eliminarReservados} = props

  return (
    <div className="w-full p-3">
      <figure className="flex justify-around items-center border border-black rounded-md p-2">
        <img className='w-[20%]' src={img} alt={nombre} />
        <h1>{nombre}</h1>
        <div>
          <ArchiveBoxXMarkIcon className="h-5 w-5 text-red-500" onClick={()=>eliminarReservados(id)}/>
        </div>
      </figure>
    </div>
  );
}

export default CardReserving;
 