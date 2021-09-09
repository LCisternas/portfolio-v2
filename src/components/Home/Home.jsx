import React, { useEffect, useRef } from 'react';
import style from './home.module.css';
import gif from '../../multimedia/principal.gif';
import Typed from 'typed.js';

const Home = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer" ,"Front-End Developer", "Back-End Developer"],
      startDelay: 300,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 5000,
      loop: true,
      showCursor: false
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={style.homeContainer}>
      <div className={style.homeGif}>
        <img src={gif} alt='gif' />
        <div className={style.homeTitle}>
          <h1>Lucas Cisternas</h1>
          <span ref={el}></span>
        </div>
      </div>
      <div className={style.homeLinks}>
        <a href='https://drive.google.com/file/d/1-EiVUgEVfXOD9NaxAxlUYojX4ptU2z0l/view?usp=sharing' target='_blank' rel="noreferrer">Descargar CV</a>
      </div>
      <div className={style.footer}>
          <span>Hecho con React <i className="fas fa-heart"></i></span>
      </div>
    </div>
  );
}
 
export default Home;