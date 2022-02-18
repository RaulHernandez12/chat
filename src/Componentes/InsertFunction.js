import React, { useState } from "react";
import "../estilos.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ConexionFunction from './ConexionFunction';

function InsertFunction() {  
    const [mensaje,setMensaje] = useState("");       
    const [mensajeError,setMensajeError]=useState("");
    
    const cambiarMensaje = (e) => {
        setMensaje(e.target.value);
    }
    
    const enviar = () =>{           
        const datos = new FormData();
        datos.append('mensaje' , mensaje);
        datos.append('id', localStorage.getItem('id') );
        fetch("http://localhost:80/chatFinal/chat/db/insert.php", {
            method: "POST",
            body: datos
        })
        
        .then(res => res.json())
        .then(data=> console.log('Succees: '+ data))
        .catch(error => setMensajeError('Error: Mensaje no insertado ' + error))       
      }    

      const volver = (e) =>{
          window.location.href="/";
          e.preventDefault();  
      }

        return(
            <>
                
                <form className="mensaje">
                    <div className="form-group mt-3">
                        <h3>Bienvenido {localStorage.getItem('usuario')}</h3>
                        <input type="text" className="form-control mt-3" placeholder="Escriba su mensaje"  onChange={cambiarMensaje}/>
                    </div>               
                    <button type = "submit" className="btn btn-success m-5" onClick={enviar}> Enviar Mensaje </button>
                    <button type = "submit" className="btn btn-success m-5" onClick={volver} > Cambiar usuario </button>
                    <p>{mensajeError}</p>
                </form>
            
            
                <ConexionFunction />
            
            </> 
        )
    
}


export default InsertFunction;