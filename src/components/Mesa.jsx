import React, { useState } from 'react';
import "./Mesa.css";
import { Button } from 'react-bootstrap';
import data from "../data.json";

export const Mesa = () => {
  const [mesas, setMesas] = useState(data.mesa);

  const handleClick = (id) => {
    const updatedMesas = mesas.map(mesa => {
      if (mesa.id === id) {
        return { ...mesa, available: !mesa.available };
      }
      return mesa;
    });
    setMesas(updatedMesas);
  };

  return (
    <>
      {mesas.map(mesa => (
        <div className='mesa-card' key={mesa.id}>
          <div className='mesa-img'>
            <img src={mesa.img} alt={mesa.name} />
          </div>
          <div className="mesa-grid">
            <div className="div1 mesa-item">{mesa.name}: {mesa.available ? "Disponible" : "Reservado"}</div>
            <div className="div2 mesa-item">Ubicación: {mesa.location}</div>
            <div className="div3 mesa-item">Piso: {mesa.floor}</div>
          </div>
          <Button
            style={{ borderRadius: 0 }}
            variant='success'
            className='button-reservar'
            onClick={() => handleClick(mesa.id)}
          >
            {mesa.available ? "Reservar" : "Liberar"}
          </Button>
        </div>
      ))}
    </>
  );
};
