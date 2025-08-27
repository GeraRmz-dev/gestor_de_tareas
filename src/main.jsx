//Se importa lo necesario para trabajar el DOM con react
import React from 'react';
import ReactDOM from 'react-dom/client';
//Aqui se importara el browserRouter que se encarga de monitorear las pestañas
import { BrowserRouter } from 'react-router-dom';
//Aqui se importa el App.jsx
import App from './App.jsx';

//Aqui es donde se definira que maneja el DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Aqui envolvemos el componente App entre el browserRouter para asegurar que controle las urls */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);