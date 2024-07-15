import React from 'react'
import { SideBarAdmin } from '../components/SideBarAdmin'
import { Link } from 'react-router-dom'

export const SondeoAdmin = () => {
  return (
    <article className='flex gap-10'>
        <SideBarAdmin/>
        <section className='w-full p-20'>
            <div className='flex gap-5 mb-10'>
            <button className='bg-sky-500 text-white rounded-lg flex justify-center items-center gap-5 p-2'><p className='text-xl'><Link to={'/crearsondeo'}>Crear</Link></p> <img src="src/assets/send.png" alt="" className='w-10' /></button>
            <button className='bg-sky-500 text-white rounded-lg w-36 p-2'><p className='text-xl'>Exportar Sondeo</p></button>
            </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th>Estado</th>
                <th scope="col" class="px-6 py-3">
                    Sondeo
                </th>
                <th scope="col" class="px-6 py-3">
                    Parametrizar
                </th>
                <th scope="col" class="px-6 py-3">
                   Configuracion
                </th>
                <th scope="col" class="px-6 py-3">
                    Publicar
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td>
                    <input type="checkBox" className='w-10 h-8 ml-2'  />
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                ¿Qué desayuno saludable prefieres?
                </th>
                <td class="px-6 py-4">
                    <select name="" id="">
                        <option value="">Escoge una opcion</option>
                        <option value="">Mayores de 14 años</option>
                        <option value="">Mujeres</option>
                        <option value="">Hombre</option>
                        <option value="">Todos</option>
                    </select>
                </td>
                <td class="px-6 py-4">
                    <select name="" id="">
                        <option value="">Escoge una opcion</option>
                    </select>
                </td>
                <td class="px-6 py-4 bg-slate-500 text-white rounded-lg">
                    publicar
                </td>
               
            </tr>
           
        </tbody>
    </table>

        </section>
    </article>
  )
}
