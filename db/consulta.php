<?php
    require_once("conectar.php");
  

    $mostrar = "SELECT * FROM mensajes,usuarios WHERE mensajes.id = usuarios.id ORDER BY NumeroMens;"; 
    $resultado = mysqli_query($conexion,$mostrar); 
    $resultado = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

    
    echo json_encode($resultado);    
?>