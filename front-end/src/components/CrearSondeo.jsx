import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export const CrearSondeo = () => {
    const [titulo, setTitulo] = useState();
    const [descripcion, setDescripcion] = useState();
    const [fechaApertura, setFechaApertura] = useState();
    const [fechaCierre, setFechaCierre] = useState();
    const [perfilPoblacional, setPerfilPoblacional] = useState();
    const [imagen, setImagen] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const imageData = new FormData();
        imageData.append('titulo', titulo);
        imageData.append('descripcion', descripcion);
        imageData.append('fechaApertura', fechaApertura);
        imageData.append('fechaCierre', fechaCierre);
        imageData.append('perfil_poblacional', perfilPoblacional);
        imageData.append('imgSondeo', imagen);

        const crearSondeo = await axios.post('http://localhost:4003/sondeos', imageData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (crearSondeo.data.msg) {
            Swal.fire({
                title: crearSondeo.data.msg,
                icon: "success",
            });
        }

        setTitulo('');
        setDescripcion('');
        setFechaApertura('');
        setFechaCierre('');
        setPerfilPoblacional('');
        setImagen(null);
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <img src="src/assets/createSondeo.png" alt="" className='w-28' />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">Crea un nuevo sondeo</h2>
                <p className="text-gray-600 text-center mb-6">Registra el nuevo sondeo</p>
                <form className='' onSubmit={handleSubmit}>
                    <div className='flex gap-5'>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="titulo" className="block text-gray-700 text-sm font-semibold mb-2">Título</label>
                                <input
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                    type="text" id="titulo" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Salud, Dieta, Ejercicio" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="descripcion" className="block text-gray-700 text-sm font-semibold mb-2">Descripción</label>
                                <input
                                    value={descripcion}
                                    onChange={e => setDescripcion(e.target.value)}
                                    type="text" id="descripcion" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Sondeo sobre la dieta" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fechaApertura" className="block text-gray-700 text-sm font-semibold mb-2">Fecha Apertura</label>
                                <input
                                    value={fechaApertura}
                                    onChange={e => setFechaApertura(e.target.value)}
                                    type="date" id="fechaApertura" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required />
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="fechaCierre" className="block text-gray-700 text-sm font-semibold mb-2">Fecha Cierre</label>
                                <input
                                    value={fechaCierre}
                                    onChange={e => setFechaCierre(e.target.value)}
                                    type="date" id="fechaCierre" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="perfilPoblacional" className="block text-gray-700 text-sm font-semibold mb-2">Perfil Poblacional</label>
                                <input
                                    value={perfilPoblacional}
                                    onChange={e => setPerfilPoblacional(e.target.value)}
                                    type="text" id="perfilPoblacional" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="Hombre, Mujer, mayor 14 años, etc..." />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imgSondeo" className="block text-gray-700 text-sm font-semibold mb-2">Ícono del sondeo</label>
                                <input type="file"
                                    onChange={(e) => setImagen(e.target.files[0])} id="imgSondeo" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Crear</button>
                </form>
            </div>
        </div>
    );
};