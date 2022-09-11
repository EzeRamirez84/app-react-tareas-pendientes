import React from 'react';
import '../stylesheets/Button.css'

function Button({
  text,
  isReadyButton, 
  clickHandle,
  
  })
  {
  return(
    <button 
      className={isReadyButton?'ready-button':'del-button'}
      onClick={clickHandle}
      >
      {text}
    </button>
  )
}

export default Button;