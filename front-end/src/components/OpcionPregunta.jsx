import { Button, Modal } from "flowbite-react";
import { useState } from 'react';
export const OpcionPregunta = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalOpciones, setModalOpciones] = useState(false)
    const submit = (e) => {
        e.preventDefault()
        setOpenModal(true)

    }

    const cambioModal =()=>{
        setOpenModal(false)
        setTimeout(()=>{
            setModalOpciones(true)
        },700)
    }
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <img src="src/assets/createSondeo.png" alt="" className='w-28' />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">Ingresa el tipo de pregunta para el sondeo</h2>
                <p className="text-gray-600 text-center mb-6 font-medium">¿Que tipo de pregunta deseas utilizar?</p>
                <form className='' onSubmit={submit}>
                    <div className='mb-7'>
                        <input type="radio" className='w-8 h-6' name='tipoPregunta' />
                        <label htmlFor="">Abierta {`(El usuario ingres la respuesta)`}</label>
                    </div>
                    <div className='mb-5'>
                        <input type="radio" className='w-8 h-6' name='tipoPregunta' />
                        <label htmlFor="">Cerrada {`(Tipo abc)`}</label>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Siguiente</button>
                </form>
                <Modal show={openModal} onClose={() => setOpenModal(false)} className='p-5'>
                    <Modal.Header >
                        <h1 className='text-2xl text-center ml-48'>
                            Ingresa la pregunta
                        </h1>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <input type="text" className='form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500' required placeholder='Pregunta' />
                        </div>
                    </Modal.Body>
                    <Button className='w-96 ml-32 mb-5' onClick={() => cambioModal()}>Agregar Pregunta</Button>
                </Modal>

                <Modal show={modalOpciones} onClose={() => setModalOpciones(false)}>
                    <Modal.Header>
                        <h1 className='text-2xl text-center ml-48'>Agrega Las Opciones</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <ol type="A" className=' p-4'>
                                <li className='flex gap-5'> 
                                    <h1>A</h1>
                                    <input type="text" className='form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" mb-4' />
                                </li>
                                <li className='flex gap-5'>
                                    <h1>B</h1>
                                    <input type="text" className='form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" mb-4' />
                                </li>
                                <li className='flex gap-5'>
                                    <h1>C</h1>
                                    <input type="text" className='form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" mb-4' />
                                </li>
                                <li className='flex gap-5'>
                                    <h1>D</h1>
                                    <input type="text" className='form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" mb-4' />
                                </li>
                            </ol>
                        </div>
                    </Modal.Body>
                        <Button className='mr-10 ml-10 mb-5'  onClick={() => setModalOpciones(false)}>Agregar Opciones</Button>
                </Modal>
            </div>
        </div>
    )
}
