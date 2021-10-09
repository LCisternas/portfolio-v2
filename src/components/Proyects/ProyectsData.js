import omdb from '../../multimedia/imagenes/omdb.png';
import countrieApp from '../../multimedia/imagenes/countrie-app.png';
import listaCompras from '../../multimedia/imagenes/crud-react-redux.png';
import pokedex from '../../multimedia/imagenes/pokedex.png';

export const ProyectData = [
  {
    nombre: 'OMDB (aplicacion de peliculas)',
    descripcion: 'Aplicacion full stack de peliculas que permite el registro y autenticacion de usuarios, busqueda de peliculas y guardado de favoritos.',
    imagen: omdb,
    tecnologias: 'Node, Express, React, Redux, JWT, MongoDB, Mongoose',
    view: 'https://youtu.be/ozVEc9M4M1I',
  },
  {
    nombre: 'Aplicacion de Paises',
    descripcion: 'Aplicacion hecha con react, donde realiza pedidos a una API, componetiza elementos y los reutiliza facilmente, el flujo de datos se maneja de componente en componente mediante los "props" de React.',
    imagen: countrieApp,
    tecnologias: 'React',
    view: 'https://countries-reactapp.netlify.app/',
  }, 
  {
    nombre: 'Lista de compras (react-redux)',
    descripcion: 'Aplicacion CRUD simple, hecho con react haciendo uso del manejo de estados centralizados con redux',
    imagen: listaCompras,
    tecnologias: 'React, Redux',
    view: 'https://reactredux-app.netlify.app/',
  },
  {
    nombre: 'Pokedex',
    descripcion: 'Aplicacion hecha con React utilizando el hook context para centralizar los estados de la aplicacion',
    imagen: pokedex,
    tecnologias: 'React, React hook(context)',
    view: 'https://pokeedeexreact.netlify.app/',
  },
]