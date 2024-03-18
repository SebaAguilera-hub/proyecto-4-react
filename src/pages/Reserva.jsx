import React from 'react'
import "./Reserva.css"
import { Mesa } from '../components/Mesa'

export const Reserva = () => {
  return (
    
    <div className='main-container-reserva'>
      <div className='reserva-text'>
        <h1>Reserva tu mesa</h1>
        <strong><p>¡Aquí puedes reservar tu mesa favorita para comer tranquilamente!</p></strong>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos aliquam nemo! Omnis tenetur quos perferendis est doloremque, harum nulla repudiandae. Architecto quos voluptatem nemo laudantium atque quisquam porro in voluptas! Assumenda est voluptate quaerat. Accusamus laboriosam labore magni. </p>
      </div>
      <Mesa></Mesa>
    </div>
  )
}
