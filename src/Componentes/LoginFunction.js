import React, {useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../estilos.css';


function LoginFunction() {
    
    const [usuario,setUsuario] = useState("");
    const [pas, setPas] = useState("");
    const [mensajeError,setMensajeError] = useState("")

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
        fetch("http://localhost:80/chatFinal/chat/db/login.php", {
            method: "POST",
            body: datos
        })
        .then(res => res.json())
        .then(data =>{           
            localStorage.setItem('id',data);           
            setMensajeError("Usuario correcto");           
            localStorage.setItem('usuario',usuario);
            setTimeout('window.location.href="/insert"',1000);          
        })        
        .catch(error => setMensajeError("Usuario o contraseña incorrecto"))        
        event.preventDefault();
    }

    const registro = (event) =>{
        window.location.href="/registro"
        event.preventDefault();
    }

        return(
            <>
                <h1>LOGIN</h1>
                <form className="log">
                    <div className="form-group mt-3">
                        <label>Usuario</label>
                        <input type="text" className="form-control" placeholder="Usuario"  onChange={cambiarUsuario}/>
                    </div>

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Contraseña" onChange={cambiarPas} />
                    </div>

                    <button type="submit" className="btn btn-success m-5" onClick={handleSubmit}>Entrar</button>
                    <button type="submit" className="btn btn-success m-5" onClick={registro} >Registrarse</button>
                    <h5>{mensajeError}</h5>
                </form>
            </>
        )
    }



export default LoginFunction;