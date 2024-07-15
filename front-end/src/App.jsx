import {BrowserRouter, useRoutes } from 'react-router-dom'
import { SondeosDisponibles } from './pages/SondeosDisponibles'

function App() {
  const AppRouter = ()=>{
    const routes = useRoutes([
      {path:'/', element:<SondeosDisponibles/>}
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
