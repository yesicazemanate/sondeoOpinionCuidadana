import axios from 'axios';
import React, { useState } from 'react';

 export const RegistroUsuario = () => {
    const [tipo_documento, setTipoDocumento] = useState('');
    const [numero_documento, setNumeroDocumento] = useState('');
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefono_celular, setTelefonoCelular] = useState('');
    const [telefono_fijo, setTelefonoFijo] = useState('');
    const [correo_electronico, setCorreoElectronico] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [direccion, setDireccion] = useState('');
    const [barrio_vereda, setBarrioVereda] = useState('');
    const [fecha_nacimiento, setFechaNacimiento] = useState('');
    const [etnia, setEtnia] = useState('');
    const [condicion_discapacidad, setCondicionDiscapacidad] = useState('');
    const [estrato_residencial, setEstratoResidencial] = useState('');
    const [nivel_educativo, setNivelEducativo] = useState('');
    const [acceso_dispositivo, setAccesoDispositivo] = useState(false);
    const [dispositivos, setDispositivos] = useState({
        movil: false,
        computador: false,
        tablet: false,
        otro: false,
        otroTexto: ''
    });
    const [conectividad_internet, setConectividadInternet] = useState(false);
    const [tipo_regimen_afiliacion, setTipoRegimenAfiliacion] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const[mensaje, setMensaje]= useState(false)
const [regExit, setRegExit]=useState(false)
    const handleAccesoChange = (e) => {
        const value = e.target.value === 'si';
        setAccesoDispositivo(value);
        if (!value) {
            setDispositivos({
                movil: false,
                computador: false,
                tablet: false,
                otro: false,
                otroTexto: ''
            });
        }
    }
    const handleDispositivoChange = (e) => {
        const { name, checked } = e.target;
        setDispositivos(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        switch (name) {
            case 'tipo_documento':
                setTipoDocumento(value);
                break;
            case 'numero_documento':
                setNumeroDocumento(value);
                break;
            case 'nombres':
                setNombres(value);
                break;
            case 'apellidos':
                setApellidos(value);
                break;
            case 'sexo':
                setSexo(value);
                break;
            case 'telefono_celular':
                setTelefonoCelular(value);
                break;
            case 'telefono_fijo':
                setTelefonoFijo(value);
                break;
            case 'correo_electronico':
                setCorreoElectronico(value);
                break;
            case 'municipio':
                setMunicipio(value);
                break;
            case 'direccion':
                setDireccion(value);
                break;
            case 'barrio_vereda':
                setBarrioVereda(value);
                break;
            case 'fecha_nacimiento':
                setFechaNacimiento(value);
                break;
            case 'etnia':
                setEtnia(value);
                break;
            case 'condicion_discapacidad':
                setCondicionDiscapacidad(value);
                break;
            case 'estrato_residencial':
                setEstratoResidencial(value);
                break;
            case 'nivel_educativo':
                setNivelEducativo(value);
                break;
            case 'acceso_dispositivo':
                setAccesoDispositivo(checked);
                break;
            
            case 'conectividad_internet':
                setConectividadInternet(checked);
                break;
            case 'tipo_regimen_afiliacion':
                setTipoRegimenAfiliacion(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'rol':
                setRol(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4003/usuario', {
                tipo_documento,
                numero_documento,
                nombres,
                apellidos,
                sexo,
                telefono_celular,
                telefono_fijo,
                correo_electronico,
                municipio,
                direccion,
                barrio_vereda,
                fecha_nacimiento,
                etnia,
                condicion_discapacidad,
                estrato_residencial,
                nivel_educativo,
                acceso_dispositivo,
                dispositivos,
                conectividad_internet,
                tipo_regimen_afiliacion,
                password,
                rol
            });
            setRegExit(true)
            console.log('usuario registrado exitossamente')

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            setMensaje(true);
            setTimeout(() => setMensaje(false), 5000);
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Registro de Usuario</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="tipo_documento">Tipo de Documento</label>
                <select
                    name="tipo_documento"
                    id="tipo_documento"
                    value={tipo_documento}
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
                    value={numero_documento}
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
                    value={nombres}
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
                    value={apellidos}
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
                    value={sexo}
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
                    value={telefono_celular}
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
                    value={telefono_fijo}
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
                    value={correo_electronico}
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
                    value={municipio}
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
                    value={direccion}
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
                    value={barrio_vereda}
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
                    value={fecha_nacimiento}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="etnia">Etnia</label>
                <select
                    name="etnia"
                    id="etnia"
                    value={etnia}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Indigena">Indígena</option>
                    <option value="Afrodescendiente">Afrodescendiente</option>
                    <option value="Blanco">Blanco</option>
                    <option value="Mestizo">Mestizo</option>
                    <option value="Ninguna">Ninguna</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="condicion_discapacidad">Condición de Discapacidad</label>
                <select
                    name="condicion_discapacidad"
                    id="condicion_discapacidad"
                    value={condicion_discapacidad}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="estrato_residencial">Estrato Residencial</label>
                <select
                    name="estrato_residencial"
                    id="estrato_residencial"
                    value={estrato_residencial}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="nivel_educativo">Nivel Educativo</label>
                <select
                    name="nivel_educativo"
                    id="nivel_educativo"
                    value={nivel_educativo}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                    <option value="">Seleccionar</option>
                    <option value="Primaria">Primaria</option>
                    <option value="Secundaria">Secundaria</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Tecnológico">Tecnológico</option>
                    <option value="Universitario">Universitario</option>
                    <option value="Postgrado">Postgrado</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="acceso_dispositivo">Acceso a Dispositivo</label>
                <div>
                <label>¿Cuenta con acceso a dispositivos tecnológicos? *</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="si"
                            checked={acceso_dispositivo=== true}
                            onChange={handleAccesoChange}
                        />
                        Sí
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="no"
                            checked={!acceso_dispositivo=== false}
                            onChange={handleAccesoChange}
                        />
                        No
                    </label>
                </div>
            </div>

            {acceso_dispositivo && (
                <div className="space-y-2">
                    <p className="font-medium">Dispositvos con los que cuenta </p>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="movil"
                                checked={dispositivos.movil}
                                onChange={handleDispositivoChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">T. Móvil</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="computador"
                                checked={dispositivos.computador}
                                onChange={handleDispositivoChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Computador</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="tablet"
                                checked={dispositivos.tablet}
                                onChange={handleDispositivoChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Tablet</span>
                        </label>
                    </div>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                name="otro"
                                checked={dispositivos.otro}
                                onChange={handleDispositivoChange}
                                className="form-checkbox"
                            />
                            <span className="ml-2">Otro - ¿cuál?</span>
                        </label>
                        {dispositivos.otro && (
                            <input
                                type="text"
                                name="otroTexto"
                                value={dispositivos.otroTexto}
                                onChange={e => setDispositivos(prevState => ({
                                    ...prevState,
                                    otroTexto: e.target.value
                                }))}
                                className="ml-4 mt-2 p-2 border rounded"
                            />
                        )}
                    </div>
                </div>
            )}
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="conectividad_internet">Conectividad a Internet</label>
                <input
                    type="checkbox"
                    name="conectividad_internet"
                    id="conectividad_internet"
                    checked={conectividad_internet}
                    onChange={handleChange}
                    className="mt-1"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="tipo_regimen_afiliacion">Tipo Régimen de Afiliación</label>
                <select
                    name="tipo_regimen_afiliacion"
                    id="tipo_regimen_afiliacion"
                    value={tipo_regimen_afiliacion}
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
                    value={password}
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
                    value={rol}
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
            {mensaje && (
                <div className="mb-4 p-4 border rounded-lg text-white bg-red-600">
                    <p>el usuario ya existe </p>
                </div>
            )}
            {regExit &&(
            <div>
                <p>Registro exitoso</p>
                    <a href="/">Ir al inicio de sesión</a>
              
            </div>
        )}
        </form>
    );
};

