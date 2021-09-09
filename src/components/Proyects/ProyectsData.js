// import taskManager from '../../multimedia/imagenes/task-manager.png';
import countrieApp from '../../multimedia/imagenes/countrie-app.png';
import listaCompras from '../../multimedia/imagenes/crud-react-redux.png';
import pokedex from '../../multimedia/imagenes/pokedex.png';

export const ProyectData = [
  // {
  //   nombre: 'Administrador de tareas',
  //   descripcion: 'Proyecto full stack con autenticacion el cual permite crear, leer, actualizar y eliminar proyectos individualizados, cada uno de ellos con sus propias tareas.',
  //   imagen: taskManager,
  //   tecnologias: 'Node, Express, React, JWT, MongoAtlas, Mongoose',
  //   view: 'https://task-manager-fullstack.netlify.app/',
  // },
  {
    nombre: 'Aplicacion de Paises',
    descripcion: 'Proyecto creado con react, donde hago pedidos a una API, componetizando los elementos y de esa forma reutilizarlos facilmente, el flujo de datos se maneja de componente en componente mediante los "props" de React.',
    imagen: countrieApp,
    tecnologias: 'React',
    view: 'https://countries-reactapp.netlify.app/',
  }, 
  {
    nombre: 'Lista de compras (react-redux)',
    descripcion: 'Proyecto CRUD simple, hecho con react haciendo uso del manejo de estados centralizados con redux',
    imagen: listaCompras,
    tecnologias: 'React, Redux',
    view: 'https://reactredux-app.netlify.app/',
  },
  {
    nombre: 'Pokedex',
    descripcion: 'Proyecto hecho con React utilizando el hook context para centralizar los estados de la aplicacion',
    imagen: pokedex,
    tecnologias: 'React, React hook(context)',
    view: 'https://pokeedeexreact.netlify.app/',
  },
]