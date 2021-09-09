import React from 'react';
import style from './proyects.module.css';

const IndividualProyect = ({ proyect }) => {

  const { nombre, descripcion, imagen, tecnologias, view } = proyect;
  if(!nombre) return null

  return (
    <div className={style.individualProyect}>
      <img src={imagen} alt='proyecto' />
      <h2> {nombre} </h2>
      <p> {tecnologias} </p>
      <p> {descripcion} </p>
      <a href={view} target='_blank' rel="noreferrer"> En vivo </a>
    </div>
  );
}
 
export default IndividualProyect;