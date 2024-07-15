import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
export  const Login=()=> {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError]= useState(false)
        const [token, setToken]=useState(null)
        const navigate= useNavigate()
        useEffect(() => {
          if (error) {
            const timer = setTimeout(() => {
              setError(false);
            }, 5000);
            return () => clearTimeout(timer);
          }
        }, [error]);
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:4003/login', {
              correo_electronico: email,
              password: password,
            });
      
            if (response.data && response.data.token) {
              Cookies.set('token', response.data.token, { expires: 7 });
              setError(false);
      
              const userRole = response.data.data.rol
              if (userRole === 'Ciudadano') {
                navigate('/ciudadano');
              } else if (userRole === 'Administrador') {
                navigate('/administrador');
              }
            } else {
              setError(true);
            }
          } catch (error) {
            setError(true);
          }
        };

    
        return (
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800">Iniciar Sesión</h2>
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
                        Usuario o/y contraseña incorrectos
                    </div>
                )}
              <form className="space-y-6" onSubmit={(e)=>handleSubmit(e)}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo Electrónico
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      }
      

  
