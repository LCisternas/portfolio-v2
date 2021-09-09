import React from 'react';
import style from './proyects.module.css';
import gif from '../../multimedia/principal.gif';
import ProyectList from './ProyectList';

const Proyects = () => {

  return (
    <div className={style.proyectsContainer}>
      <div className={style.proyectGif}>
        <img src={gif} alt='gif' />
      </div>
      <div className={style.proyectContent}>
        <ProyectList />
      </div>
    </div>
  );
}
 
export default Proyects;