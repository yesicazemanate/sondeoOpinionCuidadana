import React from 'react'

export const NavCiudadano = () => {
  return (
   <nav className='flex justify-between pr-5 pl-5 items-center'>
    <div className='flex items-center gap-3'>
        <img src="src/assets/logoSondeo.png" alt="" className='w-28' />
        <h1><h1 className='text-2xl font-bold '>SurveySwift</h1></h1>
    </div>

    <div className='flex gap-5'>
        <h1 className='text-2xl font-bold'>Sondeo</h1>
        <h1 className='text-2xl font-bold'>Certificados</h1>
    </div>
   </nav>
  )
}
