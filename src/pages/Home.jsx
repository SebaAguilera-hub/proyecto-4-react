import React from 'react'
import "./Home.css"
import { DatosRestaurante } from '../components/DatosRestaurante'

import data from "../data.json"


export const Home = () => {


  return (
    <div className='main-container'>
     <div className='container-flex'>
       <div className='left-container'>
          <div className='card'>
            {/* Imagen de la pizza */}
          </div>
       </div>
       <div className='right-container'>
          <h2>El corazón hecho pizza</h2>
          <p>En el centro histórico. A lado de uno de los monumentos más bellos de nuestra ciudad, te brindamos una clásica cena con las personas que amas.</p>
          <p>Nos hemos destacadopor crear una exquisita variedad de pizzas italianas en la Ciudad de Chillán. Nuestros chefs de calidad internacional crean una experiencia gastronómica que permite que jamás olvides tu visita</p>
          <DatosRestaurante data={data} />
       </div>
        </div>
    </div>
    
  )
}
