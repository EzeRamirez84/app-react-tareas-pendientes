import React from "react";
import '../stylesheets/Button.css'
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

function Button({
  isReadyButton, 
  clickHandle,
  
  })
  {
  return(
    <button 
      className={ isReadyButton ?'ready-button':'del-button'}
      onClick={clickHandle}
      >
      {isReadyButton ? <FiCheckCircle className="svg-icon"/> : <FiXCircle className="svg-icon"/>}
      
    </button>
  )
}

export default Button;