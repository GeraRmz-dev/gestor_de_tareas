//Importaciones requeridas:
//Aqui se importa el uso del hook 'useState'
import { useState } from 'react';
//Aqui import la funcion toast
import { toast } from 'react-toastify';
//Aqui importa los estilos para este componente.
import './AddTask.css';

/*Funciones del agregado 
de tareas recibe
la funcion de agregar tarea desde Home.jsx*/
function AddTask({ onAgregarTarea }) {
    //Este estado maneja si el formulario es o no visible
    const [formEstado, setFormEstado] = useState(false);
    //Este otro se encarga del estado del
    //  texto del input de agregado
    const [textoTarea, setTextoTarea] = useState('');

    //Este constructor se encarga del manejo del formulario y su envio
    const handleSubmit = (event) => {
        event.preventDefault(); //Evitara el recargado al enviar el formulario

        //Aqui reviso que el texto no este vacio y defino que hacer si es el caso
        if(textoTarea.trim() === '') {
            toast.error("Escribe una tarea para poder agregarla correctamente.")
            return;
        }
        //Aqui uso la funcion del agregarTarea de Home.jsx
        onAgregarTarea(textoTarea);
        toast.success("Tarea agregada.");
        //Despues de realizar todo regresamos los estados a su estado inicial
        setTextoTarea('');
        setFormEstado(false);
    };

    if(!formEstado) {
        return (
            //Boton para mostrar el formulario
            <button className="boton-mostrar-form" onClick={() => setFormEstado(true)}>
                Añadir tarea
            </button>
        );
    }

    return ( 
        <form className="agregar-tarea" onSubmit={handleSubmit}> {/* Aqui agrego el formulario para las tareas */}
            <input type="text" placeholder="Agregar tarea" className="input-agregar-tarea" 
            value={textoTarea} onChange={(e)=>setTextoTarea(e.target.value)} autoFocus/>
            {/* Autofocus es para que se coloque el cursor en el input 
                onChange para que actualice el estado cuando escribe */}
            <button type="submit" className="agregar-tarea-boton">
                Añadir
            </button>
        </form>
    );
}

export default AddTask;