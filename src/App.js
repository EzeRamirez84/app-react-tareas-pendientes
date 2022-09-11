import React,{useState,useEffect, useContext} from 'react';
import Select from 'react-select';
import './App.css';

import Tarea from './components/Tarea';



function App() {
  const [tareas, setTareas] = useState(
    []
  );
  const [contador , setContador] = useState(0)
  

  const onClickAddButton=()=>{
    const tareasNuevas = tareas.slice();
    const id = contador;
    setTareas(
      tareasNuevas.concat(
        {
          title: 'Titulo '+ tareas.length +' este es un titulo de la tarea ' + tareas.length, 
          date: '12/12/2020',
          idTask: id, 
          itsDone: false
        }
      )
    );
    setContador(contador+1);
  };

  const onClickDelButton=(id)=>{
    const tareasNuevas = tareas.filter(tarea => !(tarea.idTask === id) );
    setTareas(tareasNuevas);
    console.log('tarea borrada:'+id);
  };

  const onClickDeleteAll=()=>{
    if (tareas.length > 0){
      const tareasNuevas = [];
      setTareas(tareasNuevas);
    }else{
      alert('Ya se elimino todo!!!');
    }  
  };
  const orderOptions=[
    {label:'Nombre' , value:'Nombre'},
    {label:'Fecha' , value:'Fechas'},
  ];
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <div className='header-buttons-container'>
          <button 
            className='add-button'
            onClick={onClickAddButton}>Agregar tarea</button>
          <button
            className='delete-all-button'
            onClick={onClickDeleteAll} >Borrar todo</button>
        </div>
        <div className='order-selector-container'>
          <div className='order-by-text'>Ordenar por:</div>
          <Select 
            className='order-selector'
            options={orderOptions} />
            
          
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
                  delButtonHandle={() => onClickDelButton(tarea.idTask)}
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
