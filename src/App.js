import React,{useState,useEffect, useContext} from 'react';
import Select from 'react-select';

import './App.css';

import Tarea from './components/Tarea';
import axios from 'axios';
import Popup from './components/Popup';
import uuid from 'react-uuid';



function App() {
  const [tareas, setTareas] = useState(
    []
  );
  const [contador , setContador] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [formOpen, setFormOpen] = useState(false);

  
  useEffect( () =>{
    console.log("ejecucion del useEffect");
    axios
      .get('http://localhost:3001/tasks')
      .then(response =>{
        console.log('promesa cumplida',response);
        setTareas(response.data);
      })
      .catch(error => {
        console.error('Error de conexion:', error)
      })
  },[])
  const toggleFormOpen=()=>{
    setFormOpen(!formOpen)
  };

  const addTask = tarea =>{
    const tareasNuevas = tareas.slice()
    if(tarea.titulo !=='' && tarea.fecha !==''){
      const nuevaTarea = {
        title: tarea.titulo,
        date: tarea.fecha,
        idTask: uuid(),
        itsDone: false
      }
      console.log(nuevaTarea);
      axios
      .post('http://localhost:3001/tasks',nuevaTarea)
      .then(response =>{
        setTareas(tareasNuevas.concat(response.data)) 
      })
    }else{
      alert('Debes ingresar datos para agregar una tarea!')
    }

  }

  const onClickDelButton=(id)=>{
    axios
    .delete(`http://localhost:3001/tasks/${id}`)
    .then(response =>{
      console.log(response);
      console.log(response.data);
      const tareasNuevas = tareas.filter(tarea => !(tarea.id === id));
      setTareas(tareasNuevas);
    })
    

  };

  const onClickDeleteAll=()=>{
    if (tareas.length > 0){
      const tareasNuevas = [];
      setTareas(tareasNuevas);
    }else{
      alert('Ya se elimino todo!!!');
    }  
  };
  const strToDate = (fecha) =>{
    const arr = fecha.split('-',3)
    return new Date(arr[0],arr[1]-1,arr[2])
  }
  const onChange = selectedOption => {
    setSelectedOption(selectedOption)

    if(selectedOption){
      if(selectedOption.value === 'Nombre'){
        const tareasNuevas = [...tareas].sort((a,b) => a.title > b.title ? 1 : a.title < b.title ? -1 : 0 )
        setTareas(tareasNuevas)
      }else if (selectedOption.value === 'Fecha'){
        const tareasNuevas = [...tareas].sort((a,b) => {
          
          const datea = strToDate(a.date)  
          const dateb = strToDate(b.date)  
          console.log(datea,dateb)
          
          return (datea.getTime() < dateb.getTime() ? 1 : datea.getTime() > dateb.getTime() ? -1 : 0)
        } )
        setTareas(tareasNuevas)
      }
    }  
  }

  const orderOptions=[
    {label:'Nombre' , value:'Nombre'},
    {label:'Fecha' , value:'Fecha'},
  ];
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <div className='header-buttons-container'>
          <button 
            className='add-button'
            onClick={toggleFormOpen}>Agregar tarea</button>
          <button
            className='delete-all-button'
            onClick={onClickDeleteAll} >Borrar todo</button>
        </div>
        <div className='order-selector-container'>
          {/* <div className='order-by-text'>Ordenar por:</div> */}
          <Select 
            className='order-selector'
            options={orderOptions}
            onChange={onChange}
            placeholder='Ordenar por...' />
        </div>          
        <div className='tasks-container'>
          <ul>
            {tareas && tareas.map((tarea) => {
              return(
              <div key={tarea.id}>
                <Tarea
                  id={tarea.idTask}
                  title={tarea.title}
                  date={strToDate(tarea.date)}
                  itsDone={tarea.itsDone} 
                  delButtonHandle={() => onClickDelButton(tarea.id)}
                />
              </div>
              )
            })}
          </ul>
        </div>
        {formOpen && <Popup
          onSubmit={addTask}
          onClickClose={toggleFormOpen}
        />}
      </div>
    </div>
  );
}

export default App;
