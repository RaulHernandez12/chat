import React, { useState} from "react";
import  "../estilos.css";

function Conexion (){  
        
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
    
        return(
            <div className='chat' >
                <ul>
                    {mensajes.map(el =>(<p key = {el.NumeroMens}  >{el.Nombre}: {el.Mensaje} 
                        </p>                       
                        ))}
                </ul>
            </div>
        );
    
}


export default Conexion;