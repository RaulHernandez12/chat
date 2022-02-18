<?php
    require_once("conectar.php");
    
    $numero = $_POST['mensaje'];

    $consulta = $conexion -> prepare("DELETE FROM mensajes WHERE mensajes.NumeroMens = ?");
    $consulta -> bind_param("s", $numero);
    $consulta -> execute();
    
    echo json_encode("Mensaje borrado")
?>