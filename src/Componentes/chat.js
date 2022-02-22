import React, { useState} from "react";
import  "../estilos.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Chat (){          
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
              
                <div className='chat' id="chat">
                                            
                {mensajes.map(el=>{
                    if(el.Nombre === localStorage.getItem('usuario')){
                        return <div  className="propio" key = {el.NumeroMens}><h6 > {el.mensaje} <button className="eliminar" value={el.NumeroMens} onClick={eliminar}>🗑</button></h6></div>
                    }else{
                        return <div className="otro" key = {el.NumeroMens}><h6  >{el.Nombre}: {el.mensaje} <button className="eliminar" value={el.NumeroMens} onClick={eliminar}>🗑</button></h6> </div>
                    }
                } )}  
                       
                                                  
                </div>
                <div className="borrarTodo">
                    <button className="btn btn-success eliminar mt-3" onClick={vaciar}>Eliminar Todo</button>
                </div>
                
            </>
        );
    
}


export default Chat;