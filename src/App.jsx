import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Routes from "./routers/routes"
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <header>
    <h1 className='title'>🎬Películas</h1>
   </header>
   <Routes></Routes>
   </div>
  )
}

export default App
