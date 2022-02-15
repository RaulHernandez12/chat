<?php
    require_once("conectar.php");
    $mensaje = $_POST["mensaje"];
    $id = $_POST["id"];
    $consulta = $conexion -> prepare("INSERT INTO mensajes (ID , Mensaje) VALUES (?, ?);");
    $consulta -> bind_param("is", $id, $mensaje);
    $consulta -> execute();
    
    echo json_encode($id);
?>