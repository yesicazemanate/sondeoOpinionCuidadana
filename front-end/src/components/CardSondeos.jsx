import React from 'react'
import { Link } from 'react-router-dom'

export const CardSondeos = () => {
  return (
    <div className='border-black border-2 w-max pl-7 pr-7 pb-2 text-center ml-4 mt-10 rounded-xl '>
        <img src="src/assets/imgLogoDesayuno.png" alt="" className='w-32 ml-32' />
        <h1 className='font-bold mt-3'>Dieta Saludable, vida, Ejercicio</h1>
        <div className='flex gap-5 mt-5 font-medium'>
            <h1>
                Fecha Apertura: 14/07/2024 
            </h1>
            <h1>
                Fecha Cierre: 16/07/2024 
            </h1>
        </div>
        <h1 className='mt-5 font-medium'>Poblacion: Mayores 14 años</h1>
        <button className='bg-orange-500 w-full text-white text-lg font-extrabold rounded-md p-1 mt-5 '><Link to={'/preguntassondeo'}> Empezar</Link></button>
    </div>
  )
}
