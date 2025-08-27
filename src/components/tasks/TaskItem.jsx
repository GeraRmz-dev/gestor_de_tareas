//Importaciones requeridas:
//Aqui se importa el uso del hook 'useState'
import { useState } from 'react';
//Aqui import la funcion toast
import { toast } from 'react-toastify';
//Aqui importa los estilos para este componente.
import './TaskItem.css';

/*Funcion del componente para recibir cada tarea y las funciones de Home.jsx */
function TaskItem({ tarea, onCompletado, onActTarea, onEliminar }) {
    //Aqui defino un estado local para saber cuando se esta editando la tarea
    const [ editando, setEditando ] = useState(false);
    //Este estado es para el texto del input para la edicion
    const [ textoEditado, setTextoEditado] = useState(tarea.text);
    //Para guardar
    const handleSave = () => {
        //Para evitar que quede vacio el campo 
        if(textoEditado.trim() === '') {
            toast.error("No puedes dejar la tarea vacia")
            return;
        }
        //Llamada a la funcion de actualizar tarea de Home.jsx
        onActTarea(tarea.id, textoEditado);
        //Salir del modo de edicion
        setEditando(false);
    };
    //Para eliminar 
    const handleDelete = () => {

        //Sirve para identificar el toast que confirmara la eliminacion
        let toastId = null;
        //Este componente es el toast personalizado
        const ToastConfirmacion = () => (
            <div className='toast-confirmacion'>
                <p>¿Seguro de eliminar esta tarea?</p>
                <div className='botones-confirmacion-toast'>
                    <button className='boton-confirmar-toast' onClick={() => {
                        onEliminar(tarea.id);
                        toast.dismiss(toastId) //dismiss cerrara el toast identificado
                        toast.info("Tarea Eliminada."); 
                    }}>
                        Eliminar
                    </button>
                </div>
            </div>
        );

        toast.warn(<ToastConfirmacion/>, {
            position: "top-center",
            autoClose: false,
            closeOnClick: false,
            draggable: false,
            toastId: 'Confirmar eliminacion-${tarea.id}'
        });        
    };

    //El modo edicion colocara la siguiente interfaz
    if (editando) {
        return (
            <li className="tarea editando">
                <input type="text" value={textoEditado} onChange={(e) => setTextoEditado(e.target.value)} className='Input-edicion' autoFocus />
                    {/* Autofocus es para que se coloque el cursor en el input 
                    onChange para que actualice el estado cuando escribe */}
                <div className="botones-edicion">
                    <button className="boton-cancelar" onClick={() => setEditando(false)}>Cancelar</button>
                    <button className="boton-guardar" onClick={handleSave}>Guardar cambios</button>
                </div>
            </li>
        )
    }
    //Esta sera la vista cuando no nos encontremos editando una tarea
    return (
        
        
        <li className={tarea.completed ? 'tarea tarea-completada' : 'tarea'}>
            {/* Este boton sera el que marque como completada la tarea 
                onChange para que actualice el estado cuando se marque a completado */}
            <input type="checkbox" className='checkbox-tarea' checked={tarea.completed} onChange={()=>onCompletado(tarea.id)}/>
            <span className='tarea-texto'>{tarea.text}</span>
            <div className='botones-tarea'>
                {/* Boton de editar tarea */}
                <button className="boton-edicion" onClick={() => setEditando(true)}>
                    Editar
                </button>

                {/* Boton de eliminar tarea */}
                <button className="boton-eliminar" onClick={handleDelete}>
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default TaskItem;