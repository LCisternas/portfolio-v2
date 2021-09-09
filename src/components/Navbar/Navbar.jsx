import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar)

  return (
    // eslint-disable-next-line
    <div className={style.navbarContainer}>
      <div className={style.navbarIconFalse}>
        <button onClick={() => showSidebar()}>
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <div className={ sidebar ? style.navbarTrue : style.navbarFalse }>

        <div className={style.navbarIconTrue}>
          <button onClick={() => showSidebar()}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={style.navbarSections}>
          <div className={style.navbarButtons}>
            <Link to='/' onClick={() => showSidebar()}> Inicio </Link>
            <Link to='/about' onClick={() => showSidebar()}> Sobre mi </Link>
            <Link to='/proyects' onClick={() => showSidebar()}> Proyectos </Link>
          </div>
          <div className={style.navbarLinks}>
            <a href='https://www.linkedin.com/in/lucas-cisternas-fullstack-developer/' target='_blank' rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href='https://github.com/LCisternas' target='_blank' rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href='https://www.youtube.com/channel/UCVsWyXJ6WRFyJev-FFE_gdQ' target='_blank' rel="noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

      </div>

    </div>
  );
}
 
export default Navbar;