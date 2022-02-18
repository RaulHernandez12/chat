<?php
    require_once("conectar.php");
    
        $usuario = $_POST["usuario"];
        $pas = $_POST["pas"];

        $consulta = "SELECT * FROM usuarios ";
        $resultado = mysqli_query($conexion,$consulta);
        $resultado = mysqli_fetch_all($resultado,MYSQLI_ASSOC);

        foreach ($resultado as $opciones){ 
            $nombre = $opciones["Nombre"];
            $contra = $opciones["Contra"];
            $id = $opciones["ID"];

            if($usuario == $nombre && $pas == $contra){
                $hola = $nombre;
                $adios = $contra;
                $clave = $id;                 
            }
         }

        echo json_encode($clave);

?>