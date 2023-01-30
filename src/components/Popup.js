import React, {useState} from 'react';

import TareaForm from './TareaForm';
import '../stylesheets/Popup.css'
import { FiXCircle } from "react-icons/fi";
const Popup = (props) =>{
    
    return(
        <div className='popup-box'>
            <div className='box'>
                <button 
                    className='btn-close' 
                    onClick={props.onClickClose}
                ><FiXCircle/>
                </button>
                <div className='box-title'>Agregar una tarea</div>
                <TareaForm
                    onSubmit={props.onSubmit}  
                />
            </div>
        </div>
    );
}

export default Popup;