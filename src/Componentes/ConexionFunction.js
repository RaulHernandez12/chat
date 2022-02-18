import React, { useState} from "react";
import  "../estilos.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Conexion (props){          
    const [mensajes,setMensaje] = useState([]);    
    
    useState(() => {
        fetch("http://localhost:80/chatFinal/chat/db/consulta.php")
        .then(res => res.json())
        .then(
            (result) => {
                setMensaje(result)
            }
        )
    });

    const eliminar = (event) =>{
        const datos = new FormData(); 
        datos.append('mensaje',event.target.value);
        fetch("http://localhost:80/chatFinal/chat/db/eliminar.php", {
            method: "POST",
            body: datos
        })
        .then(res => res.json())
        .then(data =>{ 
            console.log(data) ;         
            window.location.reload();
        })        
        .catch(error => console.log(error));            
    } 

    const vaciar = () =>{
        fetch("http://localhost:80/chatFinal/chat/db/eliminarTodo.php")
        .then(res => res.json())
        .then(data =>{ 
            console.log(data) ;         
            window.location.reload();
        })        
        .catch(error => console.log(error));  
    }
       
        return(
            <>
                <div className='chat'>
                        {mensajes.map(el =>(<p key = {el.NumeroMens}>{el.Nombre}: {el.mensaje} <button className="btn btn-success eliminar" value={el.NumeroMens} onClick={eliminar}>Eliminar</button></p> ))}                             
                </div>

                <button onClick={vaciar}>Eliminar Todo</button>
            </>
        );
    
}


export default Conexion;