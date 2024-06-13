import React, { Children } from 'react'
import Header from '../Pages/Home/Header'
import Navegador from '../Layout/Navegador.jsx'



function Layaout({children}) {
  return (
    <>
      <Header/>
      <div className='flex flex-col items-center mt-28'>
         {children}
     </div>
    </>
  )
}

export default Layaout
