import React, {useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';


export default function Registro(){
    const [usuario,setUsuario] = useState("");
    const [pas, setPas] = useState("");
    const [mensajeError,setMensajeError] = useState("");

    const cambiarUsuario = (e) => {
        setUsuario(e.target.value);
    }

    const cambiarPas = (e) => {
        setPas(e.target.value);
    }
    

    const handleSubmit = (event) =>{       
        const datos = new FormData();
        datos.append('usuario' , usuario);
        datos.append('pas', pas);
        fetch("http://localhost:80/chatFinal/chat/db/registro.php", {
            method: "POST",
            body: datos
        })
        .then(res => res.json())
        .then(data =>{  
            if(data === "Debe insertar un usuario" || data === "El usuario ya esta registrado"){
                console.log("Succes: " + data)         
                setMensajeError(data);
            }else{
            setMensajeError(data);  
            setTimeout("window.location.href='/'",2000);     
            }   
        })        
        .catch(error => {
        console.log(error);
        setMensajeError("El usuario no ha podido registrarse")
        })      
        event.preventDefault();
    }

    const volver = (e) =>{
        window.location.href="/";
        e.preventDefault();  
    }
    return(
        <>
            <h1>Registrarse</h1>
            <form className="log">
                <div className="form-group mt-3">
                    <label>Inserte nombre de usuario</label>
                    <input type="text" className="form-control" placeholder="Usuario" onChange={cambiarUsuario} />
                </div>

                <div className="form-group mt-3">
                    <label>Inserte contraseña </label>
                    <input type="password" className="form-control" placeholder="Contraseña" onChange={cambiarPas} />
                </div>

                
                <button type="submit" className="btn btn-success m-5" onClick={handleSubmit} >Registrarse</button>
                <button type = "submit" className="btn btn-success m-5" onClick={volver} > Volver a inicio </button>
                <h5>{mensajeError}</h5>
            </form>
        </>
    )
}

