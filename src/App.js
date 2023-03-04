import React from 'react'
import './css/estilos.css'

const App = () => {

    const saludo = "React - INTECAP"
    const nombre ="Belter Emanuel Vásquez Flores"


  return (
    <>
        <h1 className='titulo'>{saludo}</h1>
        <p className='titulo'>{nombre}</p>
    </>

  )
}

export default App