
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import {Login} from './components/login.jsx'
import { Protected } from './components/protectedRoutes.jsx'
import { SondeosDisponibles } from './pages/SondeosDisponibles.jsx'
import { CertificadoCiudadano } from './components/CertificadoCiudadano.jsx'
import { PreguntasSondeo } from './components/PreguntasSondeo.jsx'
import { SondeoAdmin } from './pages/SondeoAdmin.jsx'
import { CrearInforme } from './components/CrearInforme.jsx'
import { CrearSondeo } from './components/CrearSondeo.jsx'
import {RegistroUsuario} from './pages/registro.jsx'
import { OpcionPregunta } from './components/OpcionPregunta.jsx'

function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
<Route  path='/' element={<Login/>}/>
<Route path='/registro' element ={<RegistroUsuario/>}/>
<Route  element={<Protected/>}>

<Route path='/administrador' element={<SondeoAdmin/>}/>
<Route path='/ciudadano' element={<SondeosDisponibles/>}/>
<Route path='/certificadosdisponibles' element={<CertificadoCiudadano/>} />
<Route path='/preguntassondeo' element={<PreguntasSondeo/>}/>
<Route path='/crearinforme' element={<CrearInforme/>}/>
<Route path='/crearsondeo' element={<CrearSondeo/>} />  
<Route path='/opcionespregunta' element={<OpcionPregunta/>}/>
</Route>
 </Routes>
 
 </BrowserRouter>


</>
  
  )
}
export default App

