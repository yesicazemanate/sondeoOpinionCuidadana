import {BrowserRouter, useRoutes } from 'react-router-dom'
import { SondeosDisponibles } from './pages/SondeosDisponibles'
import { PreguntasSondeo } from './components/PreguntasSondeo'

function App() {
  const AppRouter = ()=>{
    const routes = useRoutes([
      {path:'/', element:<PreguntasSondeo/>}
    ])

    return routes
  }

  return (
    <>
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    </>
  )
}

export default App
