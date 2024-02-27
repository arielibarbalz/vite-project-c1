import React, { useState } from 'react'

const Contact = () => {
    const [mensaje, setMensaje] = useState({
        nombre: '',
        email: '',
        asunto: '',
        descripcion: '',
    })
    console.log(mensaje)
    const [mostrar, setMostrar] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(mensaje.nombre.trim().length > 3 && mensaje.asunto.length > 6 && mensaje.descripcion.length > 10){
            setMostrar(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

  return (
    <div>
        {mostrar ? 
            <h3>Mensaje enviado</h3> 
        :
            <form onSubmit={handleSubmit}>
                <label>Nombre: </label>
                <input type="text" value={mensaje.nombre}
                    onChange={(e) => setMensaje({...mensaje, nombre: e.target.value})}
                />
                <label>Email: </label>
                <input type="email" value={mensaje.email}
                    onChange={(e) => setMensaje({...mensaje, email: e.target.value})}
                />
                <label>Asunto: </label>
                <input type="text" value={mensaje.asunto}
                    onChange={(e) => setMensaje({...mensaje, asunto: e.target.value})}
                />
                <label>Descripción</label>
                <textarea  name="" id="" cols="30" rows="10" value={mensaje.descripcion}
                    onChange={(e) => setMensaje({...mensaje, descripcion: e.target.value})}
                ></textarea>
                <button>Enviar</button>
            </form>
        }
        {err && <h4>Por favor, complete los campos correctamente</h4>}
    </div>
  )
}

export default Contact