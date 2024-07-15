import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SideBarAdmin } from './components/SideBarAdmin'
import { SondeoAdmin } from './pages/SondeoAdmin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SondeoAdmin/>
    </>
  )
}

export default App
