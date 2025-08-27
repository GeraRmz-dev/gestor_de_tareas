//Importaciones requeridas:
//Importo lo necesario para el manejo del router 
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
//Importo el useState
import { useState } from 'react';
//Importo el servicio de autenticacion
import { usuarioLogueado, logout, getUsuarioLogueado } from './services/authService';
//Aqui importo toastify para las notificaciones es una libreria de react
import { ToastContainer } from 'react-toastify';
//Y tambien sus estilos
import 'react-toastify/dist/ReactToastify.css';
//Componente de Home
import Home from './pages/Home';
//Componente de Login
import Login from './pages/Login';

//Creo un componente para proteger las rutas definiendo cual mostrara en cada caso
const RutaProtegida = ({ children }) => {
  //Aqui definira si el usuario no esta logueado enviara a login
  if(!usuarioLogueado()) {

    return <Navigate to="/login" />;
  }
  //Si esta logueado enviara a home
  return children;
}

//Funciones que llegan a la app web
function App() {
  //Primeramente se inicializa el nombre del usuario actual
  const [usuarioActual, setUsuarioActual] = useState(getUsuarioLogueado());
  //Este hook sirve para navegar con una estructura definida
  const navigate = useNavigate();

  //Se confirma que el usuario no esta autenticado
  const handleLoginCompletado = (usuario) => {
    setUsuarioActual(usuario);//Aqui se guarda el nombre del usuario actual que aparece en el header
    navigate('/'); //Aqui redirige al home del gestor de tareas posterior a loguearnos
  }
  //Se confirma que el usuario no esta autenticado
  const handleLogout = () => {
    logout(); //Aqui se llama a la funcion logout que se importo del servicio de autenticacion
    setUsuarioActual(null); //Aqui limpiamos el nombre del usuario actual cuando se cerro la sesion
    navigate('/login'); //Aqui redirige al login posterior a cerrar sesion
  };

  //Ahora basado en el estado de autenticacion define que mostrar
  return (
    /*Etiquetas fragments '<>' las uso para cumplir la función de react
    sin usar etiquetas no semanticas
    */
    <>
    {/* Aqui se definen todas las posibles rutas y como se identifica a cada una */}
      <Routes>
        {/* Esta es la ruta para el Home */}
        <Route path="/" element={
          <RutaProtegida>
            <Home onLogout={handleLogout} usuario={usuarioActual}/>
          </RutaProtegida>
        }/>
        {/* Esta es la ruta para el Login */}
        <Route path="/login" element={<Login onLoginAcceso={handleLoginCompletado}/>}/>
       </Routes>
        {/* Aqui se define los avisos y alertas con toastify */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} 
      closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>    
    </>
  );
  
}
export default App;
