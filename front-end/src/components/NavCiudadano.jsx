import React from 'react'
import { Link } from 'react-router-dom'

export const NavCiudadano = () => {
  return (
   <nav className='flex justify-between pr-5 pl-5 items-center'>
    <div className='flex items-center gap-3'>
        <img src="src/assets/logoSondeo.png" alt="" className='w-28' />
        <h1 className='text-2xl font-bold '>SurveySwift</h1>
    </div>

    <div className='flex gap-5'>
        <Link className='text-2xl font-bold' to={'/ciudadano'} >Sondeo</Link>
        <Link className='text-2xl font-bold' to={'/certificadosdisponibles'}>Certificado</Link>
    </div>
   </nav>
  )
}
