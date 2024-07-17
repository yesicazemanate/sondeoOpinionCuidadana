import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const CardSondeos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const obtenerSondeos = async () => {
            try {
                const response = await axios.get('http://localhost:4003/sondeos');
                setData(response.data);
            } catch (error) {
                console.error('Error al obtener sondeos:', error);
            }
        };
        obtenerSondeos();
    }, []);

    return (
        <div className='flex flex-wrap gap-4'>
            {data.map((sondeo) => (
                <div key={sondeo._id} className= 'flex flex-col items-center justify-center border-black border-2 w-max pl-7 pr-7 pb-2 text-center rounded-xl'>
                    <img src={`http://localhost:4003/imagenes/${sondeo.imgSondeo}`} alt="" className='w-32 h-28 mt-5' />
                    <h1 className='font-bold mt-3'>{sondeo.titulo}</h1>
                    <div className='flex gap-5 mt-5 font-medium'>
                        <h1>Fecha Apertura: {new Date(sondeo.fechaApertura).toLocaleDateString()}</h1>
                        <h1>Fecha Cierre: {new Date(sondeo.fechaCierre).toLocaleDateString()}</h1>
                    </div>
                    <h1 className='mt-5 font-medium'>Población: {sondeo.perfil_poblacional}</h1>
                    <button className='bg-orange-500 w-full text-white text-lg font-extrabold rounded-md p-1 mt-5'>
                        <Link to={`/preguntassondeo/${sondeo._id}`}>Empezar</Link>
                    </button>
                </div>
            ))}
        </div>
    );
};