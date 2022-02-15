import React, { useState } from "react";
import "../estilos.css";


function InsertFunction() {  
    const [mensaje,setMensaje] = useState("");       
    const [mensajeError,setMensajeError]=useState("");
    
    const cambiarMensaje = (e) => {
        setMensaje(e.target.value);
    }
    
    const enviar = (event) =>{           
        const datos = new FormData();
        datos.append('mensaje' , mensaje);
        datos.append('id', localStorage.getItem('id') );
        fetch("http://localhost:80/chatFinal/chat/db/insert.php", {
            method: "POST",
            body: datos
        })
        
        .then(res => res.json())
        .then(data=> console.log('Succees: '+ data))
        .catch(error => setMensajeError('Error: Mensaje no insertado'))
        event.preventDefault();
      }    

        return(
            <div className="enviar">
                <form>
                    <label>Introduzca su mensaje</label><br/>
                    <input type="text" placeholder="mensaje" onChange={cambiarMensaje} ></input><br/>                
                    <button onClick={enviar}> Envia </button>
                    <p>{mensajeError}</p>
                </form>
            </div>
        )
    
}


export default InsertFunction;