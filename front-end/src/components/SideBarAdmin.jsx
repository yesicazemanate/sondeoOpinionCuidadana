import React from 'react'
import { Link } from 'react-router-dom'

export const SideBarAdmin = () => {
  return (
    <aside className='border-2 border-y-0 border-black w-max h-screen text-center p-5'>
        <img src="src/assets/logoSondeo.png" alt="" className='w-52' />
        <h1 className='text-3xl font-bold '>SurveySwift</h1>
       
        <h1 className='text-2xl font-medium mt-16 pl-2 w-48'> <Link to={'/administrador'}>Crear Sondeo</Link></h1>
        <h1 className='text-2xl font-medium mt-7 pl-2'> <Link to={'/crearinforme'}>Crear Informe</Link></h1>   
    </aside>
  )
}
