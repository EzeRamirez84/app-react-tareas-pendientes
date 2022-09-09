import React,{useState,useEffect, useContext} from 'react';
import './App.css';
import AddButton from './components/AddButton';
import Tarea from './components/Tarea';



function App() {
  const [tareas, setTareas] = useState(
    []
  );
  


  const onClickAddButton=()=>{
    const tareasNuevas = tareas.slice();
    const id = tareas.length;
    setTareas(
      tareasNuevas.concat(
        {
          title: 'Titulo '+ tareas.length +' este es un titulo de la tarea '+tareas.length, date: '12/12/2020',
          idTask: id, 
          itsDone: false
        }
      )
    ); 
  }

  const onClickDelButton=()=>{
    console.log('la xs tuya');
  }


  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <div className='add-button-container'>
          <AddButton
          clickHandle={onClickAddButton}
          />
        </div>   
        <div className='tasks-container'>
          <ul>
            {tareas.map((tarea) => {
              return(
              <div key={tarea.idTask}>
                <Tarea
                  id={tarea.idTask}
                  title={tarea.title}
                  date={tarea.date}
                  itsDone={tarea.itsDone} 
                  delButtonHandle={onClickDelButton}
                />
              </div>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
