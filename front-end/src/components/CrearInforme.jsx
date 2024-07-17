import React from 'react'
import {SideBarAdmin} from './SideBarAdmin.jsx'
import {CardReporte} from './CardReporte.jsx'
export const CrearInforme = () => {
  return (
    <>
   <div className="flex ">
      <div className="w-1/4  p-4">
        <SideBarAdmin />
      </div>
      <div className="   items-center ">
      <button className='bg-sky-500 text-white rounded-lg flex  items-center gap-5 p-2 m-20'>
                        <p className='text-xl'> Crear
                            {/* <Link to={'/crearsondeo'}>Crear</Link> */}
                        </p>
                        <img src="src/assets/send.png" alt="" className='w-10' />
                    </button>
      <div className=" flex flex-col items-center ">
        <h1 className="text-2xl font-bold mb-4">Informes disponibles</h1>
        <div className="grid  md:grid-cols-3 gap-4 ">
          <CardReporte />
          <CardReporte />
          <CardReporte />
          <CardReporte />
          <CardReporte />
          <CardReporte />
        </div>
       </div>
       </div>
    </div>
    </>
  )
}
