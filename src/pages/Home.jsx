//Importaciones requeridas:

//Importo el useLocalStorage para almacenamiento
import useLocalStorage from '../hooks/useLocalStorage';
//Componente de la cabecera
import Header from '../components/layout/Header';
//Componente del formulario para agregar tareas
import AddTask from '../components/tasks/AddTask';
//Componente de lista de tareas
import TaskList from '../components/tasks/TaskList';
//Estilo para este archivo
import './Home.css'

//Funciones que llegan a la app web
function Home({onLogout, usuario}) {
  //Lista de tareas iniciales
  const tareasIniciales = []
  //Uso de useLocalStorage
  const [tareas, setTareas] = useLocalStorage('tareas', tareasIniciales);

  const agregarTarea = (textoTarea) => {
    const nuevaTarea = {
      id: Date.now(), text: textoTarea, completed: false
    };

    setTareas([...tareas, nuevaTarea]);
  };

  //Funcion para marcar y desmarcar las tareas
  const Completado = (tareaId) => {
    setTareas(tareas.map(tarea =>
      tarea.id === tareaId ? { ...tarea, completed: !tarea.completed} : tarea
    ));
  };

  //Funcion para editar texto de las tareas ya creadas
  const ActTarea = (tareaId, nuevoTexto) => {
    setTareas(tareas.map(tarea =>
      tarea.id === tareaId ? { ...tarea, text: nuevoTexto, completed: false} : tarea
    ));
  };

  //Funcion para eliminar tarea
  const Eliminar = (tareaId) => {
    setTareas(tareas.filter(tarea => tarea.id !== tareaId ));
  };

  return(
    /*Etiquetas fragments '<>' las uso para cumplir la función de react
    sin usar etiquetas no semanticas
    */
    <>
      {/* Llamada al componente cabecera*/}
      <Header onLogout={onLogout} usuario={usuario}/>
      <main className="contenido-home">
        {/* El orden en que coloque los componentes es el indicado en la prueba
        1.- Formulario de agregado de tarea
        2.- Lista de tareas*/}    
          <AddTask onAgregarTarea={agregarTarea}/> {/* Llamada al componente de agregado de tarea*/}
          <TaskList tareas={tareas} onCompletado={Completado} onActTarea={ActTarea} onEliminar={Eliminar}/> {/* Llamada al componente de lista de tareas y paso las funciones*/}
      </main>
    </>
  );
}
export default Home;
