//Importaciones requeridas:
//Aqui se importa el componente de TaskItem.
import TaskItem from './TaskItem';
//Aqui importa los estilos para este componente.
import './TaskList.css';

/*Funciones de la lista de tareas 
recibe las tareas desde Home.jsx*/
function TaskList({ tareas, onCompletado, onActTarea, onEliminar }) {
    return (
    /*La etiqueta div sirve como contenedor, para cumplir
    la función de react en su forma de entregar los valores de los componentes*/
        <div className="contenedor-lista">
            <h2> Mis Tareas</h2>

            {/* Una vez dentro, revisa que existan tareas o no y decide que hacer en base a esta revisión */}
            {tareas.length === 0 ? (
                //Si no hay tareas mostrara un aviso
                    <div className='contenedor-estado-lista'>
                        <p>No hay tareas pendientes, agrega una nueva tarea.</p>
                    </div>
                ) : (
                    /*Si hay tareas, se muestran con el map
                    ul usado para generar la columna de las tareas*/
                    <ul className="lista-tareas">
                        {/* Con map se generan un elemento de la lista para cada objeto de las tareas
                            key nos ayuda a identificar los elemnentos */}
                        {tareas.map(tarea => (
                            <TaskItem key={tarea.id} tarea={tarea} 
                            onCompletado={onCompletado} onActTarea={onActTarea} onEliminar={onEliminar} />
                        ))}
                    </ul>
                )}
        </div>
    );
}

export default TaskList;