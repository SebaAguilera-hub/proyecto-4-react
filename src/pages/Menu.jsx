import React from 'react'
import { CardMenu } from '../components/CardMenu'
import "./Menu.css"


export const Menu = () => {
  return (
    <>
    <div className='main-menu-container'>
      <div className='menu-title-container'>
         <h1>Pizzas disponíbles</h1>
      </div>
      <div className='card-container'>
       <CardMenu></CardMenu>
      </div>
    </div>
    </>
   
  )
}
