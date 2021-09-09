import React from 'react';
import style from './proyects.module.css';
import { ProyectData } from '../Proyects/ProyectsData';
import IndividualProyect from './IndivualProyect';

const ProyectList = () => {

  return (
    <div className={style.listContainer}>
      {ProyectData.map(proyect => (
        <IndividualProyect 
          key={proyect.nombre}
          proyect={proyect}
        />
      ))}
    </div>
  );
}
 
export default ProyectList;