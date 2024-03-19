
import React from 'react'
import { Button } from 'react-bootstrap'
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-info'>
            <h2>Reserva con nosotros</h2>
            <span className='span1'><p>A partir de tu contacto, nos comunicaremos contigo para revisar fechas y disponibilidad de horarios.</p></span>
           
           <div className='centro'>
            <p>Centro Histórico</p>
            <p>Ciudad de México, MX 12345</p>
           </div>
       
            <div className='footer-contacto'>
              <p>+56 987653123</p>
              <p>contacto@email.com</p>  
            </div>

            <i>2021. UCamp. Todos los derechos reservados.
             Esta es una aplicación ficticia para fines académicos.</i>
        </div>
        <div className='footer-form'>
           <form action="">
              <input type="text" placeholder='Tu nombre' />
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Teléfono' />
              <input type="text" placeholder='Mensaje y comentarios' />
           </form>
           <Button className='form-button'>Enviar</Button>
        </div>
    </div>
  )
}
