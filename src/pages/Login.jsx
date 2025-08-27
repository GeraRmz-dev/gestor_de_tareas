//Importaciones requeridas:
//Aqui se importa el uso del hook 'useState'
import { useState } from 'react';
//Aqui importo el Login de authService
import { login } from '../services/authService';
//Aqui importa los estilos para esta pagina.
import './Login.css';

//Esta funcion recibe una funcion de App.jsx para saber que el login es correcto
function Login({ onLoginAcceso }) {
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [error, setError] = useState('');

    //Para evitar que se recargue 
    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        const acceso = login(usuario, clave);  

        if(acceso) {
            onLoginAcceso(usuario); //Aqui se avisa a App.jsx que se accedio correctamente
        } else {
            setError('El usuario o la contraseña son incorrectos.');
        }
    }


    return (
        <div className='contenedor-login'>
            <form className='formulario-login' onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <div className='formulario'>
                    <label htmlFor='usuario'> Usuario </label>
                    <input type="text" id="usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                    {/* Aqui se coloca el usuario */}
                </div>  
                <div className='formulario'>
                    <label htmlFor='clave'>Contraseña</label>
                    <input type="password" id="clave" value={clave} onChange={(e) => setClave(e.target.value)}/>
                    {/* Aqui se coloca la clave */}
                </div> 
                {error && <p className='mensaje-error'>{error}</p>}
                <button type="sumbit" className='boton-acceso'>Ingresar</button>
                    {/* Boton para acceder */}
            </form> 
        </div>
    )
}

export default Login;
