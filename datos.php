<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Resultados del Formulario</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(135deg, #1a1a40, #302b63, #24243e);
      color: #f1f1f1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
    }

    .contenedor {
      background: #ffffff;
      color: #222;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0,0,0,0.4);
      max-width: 600px;
      width: 100%;
      text-align: center;
    }

    h2, h3 {
      color: #2a2a72;
    }

    label {
      font-weight: bold;
      display: block;
      margin-top: 15px;
      text-align: left;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border-radius: 8px;
      border: 1px solid #ccc;
      background: #f7f9fc;
    }

    textarea {
      resize: none;
    }

    .error {
      color: #ffeaa7;
      font-size: 1.2rem;
      margin-top: 20px;
    }

    .boton-regreso {
      margin-top: 30px;
      display: inline-block;
      background: #2a2a72;
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s;
    }

    .boton-regreso:hover {
      background: #6b81ff;
    }
  </style>
</head>
<body>

<div class="contenedor">
<?php
if (
    !empty($_POST['opinion']) &&
    !empty($_POST['riesgos']) &&
    !empty($_POST['prevencion'])
) {
    $opinion    = $_POST['opinion'];
    $riesgos    = $_POST['riesgos'];
    $prevencion = $_POST['prevencion'];

    echo "<h2>Gracias por tu opinión</h2>";
    echo "<label>¿Qué opinas sobre el consumo de drogas?</label>";
    echo "<textarea rows='4' readonly>$opinion</textarea>";

    echo "<label>¿Crees que los jóvenes conocen los riesgos?</label>";
    echo "<input type='text' value='$riesgos' readonly>";

    echo "<label>Método de prevención más efectivo:</label>";
    echo "<input type='text' value='$prevencion' readonly>";
} else {
    echo "<h3 class='error'>Faltan datos por llenar</h3>";
}
?>
  <a href="drogas.html" class="boton-regreso">← Regresar a la página principal</a>
</div>

</body>
</html>