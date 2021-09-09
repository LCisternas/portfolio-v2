import React from 'react';
import style from './about.module.css';
import gif from '../../multimedia/secondary.gif';

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutGif}>
        <img src={gif} alt='gif'/>
      </div>
      <div className={style.aboutTech}>
        <ul>
          <li><i className="fab fa-html5"></i></li>
          <li><i className="fab fa-css3-alt"></i></li>
          <li><i className="fab fa-js"></i></li>
          <li><i className="fab fa-react"></i></li>
          <li><i className="fab fa-node"></i></li>
          <li><i className="fas fa-database"></i></li>
        </ul>
      </div>
      <div className={style.aboutInfo}>
        <p>
          ¡Hola! Mi nombre es Lucas Cisternas y soy desarrollador full stack junior. Descubri mi vocacion por la programación, creación y optimización de sistemas a mediados del año 2020. En plena pandemia comence a interesarme en el desarrollo de software y conocer cada vez mas de este rubro.
        </p>
        <p>
          Mi formacion comenzo como un completo autodidacta, aprendiendo los fundamentos como html, css y javascript en tutoriales en Youtube. Eso hasta que decidi dejarlo todo y enforcarme durante 4 meses en un coding bootcamp intensivo donde me enseñaron multiples tecnologias tales como React, Redux, Express, Node, MongoDB y otras mas. Por supuesto esto no son solo palabras, todo pueden verlo en la seccion de proyectos y en mi perfil de Github, donde implemento el uso de estas tecnologias en diversos trabajos desarrollados por mi.
        </p>
        <p>
          A dia de hoy busco mi primera experiencia laboral como desarrollador profesional :D
        </p>
      </div>
      <div className={style.footer}>
          <span>Hecho con React <i className="fas fa-heart"></i></span>
      </div>
    </div>
  );
}
 
export default About;