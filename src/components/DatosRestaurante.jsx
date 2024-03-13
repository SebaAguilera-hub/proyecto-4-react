import React from 'react'
import "./DatosRestaurante.css"

export const DatosRestaurante = ({data}) => {
    console.log(data.pizza[0].stars);
  return (
    <div className='right-container-grid-section'>
        <div className='grid-item'>
            <p>Abierto desde el {data.pizza[0].date}</p>      
        </div>
        <div className='grid-item'>
            <p>Puntuacion: {data.pizza[0].stars}</p>    
        </div>
        <div className='grid-item'>
            <p>Estamos en {data.pizza[0].location}</p>
        </div>
        <div className='grid-item'>
            <p>Se parte de {data.pizza[0].clients} clientes satisfechos</p>
        </div>
    </div>
  )
}
