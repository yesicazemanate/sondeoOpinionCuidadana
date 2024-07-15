import React from 'react'

export const PreguntasSondeo = () => {
  return (
    <article className="bg-[url('src/assets/fondoPreguntas.jpg')] w-full h-screen flex justify-center items-center">
        <section className='border-2 p-3 border-black rounded-md bg-white shadow-xl '>
        <h1 className='text-3xl'>¿Que desayuno saludable prefieres?</h1>
        <div className='text-2xl'>
        <div className='border-2 border-black mt-5 p-2 rounded-md'>
            <input type="radio"  name='opcion' className='w-6 h-6 checked:bg-black' />
            <label htmlFor="">Yogurt con frutas</label>
        </div>
        <div className='border-2 border-black mt-3 p-2 rounded-md'>
            <input type="radio"  name='opcion' className='w-6 h-6 active:bg-black'/>
            <label htmlFor="">Bolwn de avena</label>
        </div>
        <div className='border-2 border-black mt-3 p-2 rounded-md'> 
            <input type="radio"  name='opcion' className='w-6 h-6 active:bg-black'/>
            <label htmlFor="">Tostadas Integrales</label>
        </div>
        <div className='border-2 border-black mt-3 p-2 rounded-md mb-3'>
            <input type="radio" name='opcion'  className='w-6 h-6 active:bg-black'/>
            <label htmlFor="">Torta con fruta</label>
        </div>
        </div>
        <div className='bg-orange-500  text-xl text-white flex justify-between pl-5 pr-5 rounded-md '>
            <button className='flex items-center'>
                <img src="src/assets/atras.png" alt="" className='w-12 ' />
                Anterior
            </button>
            <button className='flex items-center'>
                <img src="src/assets/siguiente.png" alt="" className='w-12' />
                Siguiente
            </button>
        </div>
        </section>
    </article>
  )
}
