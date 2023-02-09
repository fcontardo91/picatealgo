import { useState } from 'react'
import './App.css'
import { Adicionales } from './components/Adicionales'
import { Comanda } from './components/Comanda'
import { Otros } from './components/Otros'
import { Pedidos } from './components/Pedidos'
import { Reloj } from './components/Reloj'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <div className="App container-flex">
      <div className='border rounded text-center bg-black text-white border-primary m-3'>
        <Reloj />
      </div>
      <div className="row p-3">
        <div className="col">
            <Comanda />
          </div>
          <div className="col">
            <Pedidos />
          </div>
          <div className="col">
            <Adicionales />
          </div>
          <div className="col">
            <Otros />
          </div>
        </div>
    </div>
  )
}

export default App
