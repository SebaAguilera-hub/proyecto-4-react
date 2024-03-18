import React from 'react'
import "./CardMenu.css"
// import data from "../menu.json"
import data from "../data.json"
import pizzaFav from "../images/pizzaFav.jpg"


export const CardMenu = () => {
  
  return (
    <>
      {
        data.menu.map(menu =>(

        <div className='card-product' key={menu.id}>
            <div className='card-image-container'>
             <img src={menu.img}></img> 
             </div>

        <div className="card-grid">
            <div className="nameProduct">{menu.title}</div>
            <div className="priceProduct">${menu.price}</div>
            <div className="timeProduct ">{menu.time} min</div>
            <div className="ingredients">
                <ul>
                    {menu.imgredients.map(ingr => (<li>{ingr}</li>))}      
                </ul>
            </div>
        </div>
        
        </div>
        ))
      }
    </>
   
  )
}
