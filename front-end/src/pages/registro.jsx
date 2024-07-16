import axios from 'axios';
import React, { useState } from 'react';

const RegistroUsuario = () => {
    const [formData, setFormData] = useState({
        tipo_documento: '',
        numero_documento: '',
        nombres: '',
        apellidos: '',
        sexo: '',
        telefono_celular: '',
        telefono_fijo: '',
        correo_electronico: '',
        municipio: '',
        direccion: '',
        barrio_vereda: '',
        fecha_nacimiento: '',
        etnia: '',
        condicion_discapacidad: '',
        estrato_residencial: '',
        nivel_educativo: '',
        acceso_dispositivo: false,
        dispositivos: '',
        conectividad_internet: false,
        tipo_regimen_afiliacion: '',
        password: '',
        rol: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
const response = await axios.post('http://localhost:4003/usuario',{
formData
})
        console.log(response);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="tipo_documento">Tipo de Documento</label>
                <select
                    name="tipo_documento"
                    id="tipo_documento"
                    value={formData.tipo_documento}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Cedula de ciudadania">Cédula de Ciudadanía</option>
                    <option value="Tarjeta de identidad">Tarjeta de Identidad</option>
                    <option value="Cedula de extranjeria">Cédula de Extranjería</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="numero_documento">Número de Documento</label>
                <input
                    type="number"
                    name="numero_documento"
                    id="numero_documento"
                    value={formData.numero_documento}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>
           
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="nombres">Nombres</label>
                <input
                    type="text"
                    name="nombres"
                    id="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="apellidos">Apellidos</label>
                <input
                    type="text"
                    name="apellidos"
                    id="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="sexo">Sexo</label>
                <select
                    name="sexo"
                    id="sexo"
                    value={formData.sexo}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Hombre">Hombre</option>
                    <option value="Mujer">Mujer</option>
                    <option value="Intersexual">Intersexual</option>
                    <option value="Indefinido">Indefinido</option>
                    <option value="Prefieren no decir">Prefieren no decir</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="telefono_celular">Teléfono Celular</label>
                <input
                    type="number"
                    name="telefono_celular"
                    id="telefono_celular"
                    value={formData.telefono_celular}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="telefono_fijo">Teléfono Fijo</label>
                <input
                    type="number"
                    name="telefono_fijo"
                    id="telefono_fijo"
                    value={formData.telefono_fijo}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="correo_electronico">Correo Electrónico</label>
                <input
                    type="email"
                    name="correo_electronico"
                    id="correo_electronico"
                    value={formData.correo_electronico}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="municipio">Municipio</label>
                <input
                    type="text"
                    name="municipio"
                    id="municipio"
                    value={formData.municipio}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="direccion">Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="barrio_vereda">Barrio/Vereda</label>
                <input
                    type="text"
                    name="barrio_vereda"
                    id="barrio_vereda"
                    value={formData.barrio_vereda}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                <input
                    type="date"
                    name="fecha_nacimiento"
                    id="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="etnia">Etnia</label>
                <input
                    type="text"
                    name="etnia"
                    id="etnia"
                    value={formData.etnia}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="condicion_discapacidad">Condición de Discapacidad</label>
                <input
                    type="text"
                    name="condicion_discapacidad"
                    id="condicion_discapacidad"
                    value={formData.condicion_discapacidad}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="estrato_residencial">Estrato Residencial</label>
                <input
                    type="text"
                    name="estrato_residencial"
                    id="estrato_residencial"
                    value={formData.estrato_residencial}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="nivel_educativo">Nivel Educativo</label>
                <input
                    type="text"
                    name="nivel_educativo"
                    id="nivel_educativo"
                    value={formData.nivel_educativo}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="acceso_dispositivo">Acceso a Dispositivo</label>
                <input
                    type="checkbox"
                    name="acceso_dispositivo"
                    id="acceso_dispositivo"
                    checked={formData.acceso_dispositivo}
                    onChange={handleChange}
                    className="mt-1"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="dispositivos">Dispositivos</label>
                <input
                    type="text"
                    name="dispositivos"
                    id="dispositivos"
                    value={formData.dispositivos}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="conectividad_internet">Conectividad a Internet</label>
                <input
                    type="checkbox"
                    name="conectividad_internet"
                    id="conectividad_internet"
                    checked={formData.conectividad_internet}
                    onChange={handleChange}
                    className="mt-1"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="tipo_regimen_afiliacion">Tipo Régimen de Afiliación</label>
                <select
                    name="tipo_regimen_afiliacion"
                    id="tipo_regimen_afiliacion"
                    value={formData.tipo_regimen_afiliacion}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Subsidiado">Subsidiado</option>
                    <option value="Contributivo">Contributivo</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="rol">Rol</label>
                <select
                    name="rol"
                    id="rol"
                    value={formData.rol}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Ciudadano">Ciudadano</option>
                    <option value="Administrador">Administrador</option>
                </select>
            </div>



            <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
            >
                Registrarse
            </button>
        </form>
    );
};

export default RegistroUsuario;