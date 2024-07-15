
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css'
import {Login} from './components/login.jsx'
import {Administrador} from './components/administrador.jsx'
import {Ciudadano } from './components/ciudadano.jsx'
import { Protected } from './components/protectedRoutes.jsx'
//import {BrowserRouter, useRoutes } from 'react-router-dom'
//import { SondeosDisponibles } from './pages/SondeosDisponibles'
//import { PreguntasSondeo } from './components/PreguntasSondeo'
function App() {
  // const AppRouter = ()=>{
  //   const routes = useRoutes([
  //     {path:'/', element:<PreguntasSondeo/>}
  //   ])
  
  //   return routes
  // }
  return (
    <>
 <BrowserRouter>
 <Routes>
<Route  path='/' element={<Login/>}/>
<Route  element={<Protected/>}>

<Route path='/administrador' element={<Administrador/>}/>
<Route path='/ciudadano' element={<Ciudadano/>}/>
</Route>
 </Routes>
 
 </BrowserRouter>


</>
  
  )
}
export default App

