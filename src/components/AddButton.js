import React from "react";
import '../stylesheets/AddButton.css'

function AddButton({clickHandle}){
  return(
    <button 
      className='add-button'
      onClick={clickHandle}
      >
      Agregar tarea
    </button>
  )
}

export default AddButton;