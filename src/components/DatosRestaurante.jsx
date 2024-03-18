import React from 'react'
import "./DatosRestaurante.css"

export const DatosRestaurante = ({data}) => {
    console.log(data.pizzeria[0].stars);
  return (
    <div className='right-container-grid-section'>
        <div className='grid-item'>
            <p>Abierto desde {data.pizzeria[0].date}</p>      
        </div>
        <div className='grid-item'>
            <p>Puntuacion: {data.pizzeria[0].stars}</p>    
        </div>
        <div className='grid-item'>
            <p>Estamos en {data.pizzeria[0].location}</p>
        </div>
        <div className='grid-item'>
            <p>Se parte de {data.pizzeria[0].clients} clientes satisfechos</p>
        </div>
    </div>
  )
}
