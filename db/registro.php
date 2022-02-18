<?php
require_once("conectar.php");
    
    $usuario = $_POST["usuario"];
    $pas = $_POST["pas"];
    $nombre = "";

    $mostrar = "SELECT nombre FROM usuarios WHERE nombre = '$usuario';";
    $resultado = mysqli_query($conexion,$mostrar); 
    $resultado = mysqli_fetch_all($resultado,MYSQLI_ASSOC);
    foreach($resultado as $opciones){
        $nombre = $opciones["nombre"];
    }
    
    if($usuario == "" || $pas == ""){
        echo json_encode("Debe insertar un usuario");
    }elseif ($usuario == $nombre ){
        echo json_encode("El usuario ya esta registrado");
    }else{
        $consulta = $conexion -> prepare("INSERT INTO usuarios (Nombre , Contra) VALUES (?, ?);");
        $consulta -> bind_param("ss", $usuario, $pas);
        $consulta -> execute();
        echo json_encode("Usuario registrado correctamente");
    }
    
?>
