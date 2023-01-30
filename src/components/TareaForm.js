import React, {useState} from 'react'
import '../stylesheets/tarea-form.css'

function TareaForm(props){

    const [datos, setDatos] = useState({
        titulo : '',
        fecha : ''
    })
    const onClickAddTask = (e) =>{
        e.preventDefault()
        const tareaNueva = {
            titulo: datos.titulo,
            fecha: datos.fecha
        }
        setDatos({titulo: '', fecha: ''})
        props.onSubmit(tareaNueva)
        
    }

    const handleChange = e => {
        const target = e.target
        setDatos(
            {
                ...datos,
                [target.name] :target.value, 
            }
        )
    } 

    return (
        <form 
            className='tarea-form' autoComplete='off'
            onSubmit={onClickAddTask}>
            <label >Titulo:
                <input 
                    className='tarea-input'
                    type='text'
                    placeholder='Escribe una tarea...'
                    name='titulo'
                    onChange={handleChange}
                    value={datos.titulo}
                />
            </label>
            <label >Fecha:
                <input 
                    className='fecha-tarea-input'
                    type= 'date'
                    name='fecha'
                    onChange={handleChange}
                    value={datos.fecha}
                />
            </label>
            
        
            <button className='tarea-boton'>
                agregar tarea
            </button>

        </form>
    );
}

export default TareaForm 