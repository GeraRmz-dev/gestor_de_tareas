//Importaciones requeridas:
//Aqui importamos los estilos para el encabezado
import './Header.css';
//Aqui importe el icono de cerrar sesión de la carpeta assets 
import LogoutIcon from '../../assets/out.svg';

//Funciones de la cabecera
function Header({ onLogout, usuario }) {

   /*Dentro de estre constructor defini la lógica para cerrar la sesión del usuario
    buscando mantener la privacidad de cada usuario*/
   const handleLogOut = () => {
      console.log("Cerrando la sesión actual");
      onLogout();
   }
//Esto es lo que el componente header entregara
   return (
      <header className="cabecera-app">
         <h1>Gestor de tareas de {usuario}</h1> {/*Falta agregar nombre de usuario*/}
         {/* Boton de cierre de sesion */}
         <button className="cerrar-sesion-boton" onClick={handleLogOut}>
            {/* Aqui llamo al icono de cierre de sesion que importe arriba */}
            <img src={LogoutIcon} alt="Cerrar sesion" className="cerrar-sesion-img"/> 
            <span>Cerrar sesion</span>
         </button>
      </header>
   );
}

export default Header;