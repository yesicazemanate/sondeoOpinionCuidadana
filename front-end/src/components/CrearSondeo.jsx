import React from 'react'

export const CrearSondeo = () => {
  return (
<div class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-lg">
        <div class="flex justify-center mb-6">
            <img src="src/assets/createSondeo.png" alt="" className='w-28'/>
        </div>
        <h2 class="text-2xl font-semibold text-center mb-4">Crea un nuevo sondeo</h2>
        <p class="text-gray-600 text-center mb-6">Registra el nuevo sondeo</p>
        <form className='flex gap-5'>
            <div className=''> 
            <div class="mb-4">
                <label for="fullName" class="block text-gray-700 text-sm font-semibold mb-2">Titulo</label>
                <input type="text" id="fullName" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Salud,Dieta Ejercicio"/>
            </div>
            <div class="mb-4">
                <label for="fullName" class="block text-gray-700 text-sm font-semibold mb-2">Descripcion</label>
                <input type="text" id="fullName" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Sondeo sobre la dieta"/>
            </div>
            <div class="mb-4">
                <label for="fullName" class="block text-gray-700 text-sm font-semibold mb-2">Fecha Apertura</label>
                <input type="date" id="fullName" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="James Brown"/>
            </div>
            </div>
            <div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">Fecha Cierre</label>
                <input type="date" id="email" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="hello@alignui.com"/>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 text-sm font-semibold mb-2">Perfil Poblacional</label>
                <input type="password" id="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Hombre, Mujer, mayor 14 años, etc..."/>
            </div>
            <div class="mb-4">
                <label for="fullName" class="block text-gray-700 text-sm font-semibold mb-2">Icono del sondeo</label>
                <input type="file" required/>
            </div>
            </div>
        </form>
            <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Crear</button>
    </div>
</div>
  )
}
