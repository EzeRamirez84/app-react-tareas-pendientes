import React,{useState} from 'react';
import Button from './Button.js';
import '../stylesheets/Tarea.css'



function Tarea(props){
  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [idTask, setId] = useState(props.id);
  const [itsDone, setItsDone] = useState(props.itsDone);

  const makeTaskDone=()=>{
    
    setItsDone(!itsDone);
  }
  return (
    <div className='task'>
      <div className='info-container'>
        <div className={itsDone?'title-strike':'title'}>{title}</div>
        <div className='date'>Fecha: {date.getDate()}/
        {date.getMonth()+1}/{date.getFullYear()}</div>
      </div>      
      <div className='buttons-container'>
        <Button 
          isReadyButton={true} 
          clickHandle={makeTaskDone}
          />
        <Button 
          isReadyButton={false} 
          clickHandle={props.delButtonHandle}
          
          />
      </div>
    </div>
  )
}

export default Tarea;