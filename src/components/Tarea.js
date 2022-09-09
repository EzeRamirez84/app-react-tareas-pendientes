import React,{useState} from 'react';
import Button from './Button.js';
import '../stylesheets/Tarea.css'



function Tarea(props){
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [idTask, setId] = useState(props.idTask);
  const [itsDone, setItsDone] = useState(props.itsDone);

  const makeTaskDone=()=>{
    console.log('La tarea ya se hizo');
    setItsDone(!itsDone);
  }
  return (
    <div className='task'>
      <div className='info-container'>
        <div className={itsDone?'title-strike':'title'}>{title}</div>
        <div className='date'>Fecha:{date}</div>
      </div>      
      <div className='buttons-container'>
        <Button 
          text='Listo'
          isReadyButton={true} 
          clickHandle={makeTaskDone}
          />
        <Button 
          text='Del'
          isReadyButton={false} 
          clickHandle={props.delButtonHandle}
          />
      </div>
    </div>
  )
}

export default Tarea;