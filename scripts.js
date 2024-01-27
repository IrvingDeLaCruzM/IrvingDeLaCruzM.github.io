<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <script>
    function validateLogin() {
      // Obtener los valores del formulario
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
    
      // Validar el nombre de usuario (puedes ajustar según tus requisitos)
      if (username.trim() === "") {
        alert("Por favor, ingrese un nombre de usuario.");
        return false; // Detiene el envío del formulario
      }
    
      // Validar el correo electrónico usando una expresión regular
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false; // Detiene el envío del formulario
      }
    
      // Validar la longitud de la contraseña
      if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false; // Detiene el envío del formulario
      }
    
      // Si todo es válido, podrías enviar los datos a tu servidor o hacer lo que necesites
      alert("Inicio de sesión exitoso!");
      return true; // Permite el envío del formulario
    }
  </script>
</head>
<body>

  <h2>Login</h2>
  
  <form action="tu_script.php" method="POST" onsubmit="return validateLogin()">
    <label for="username">Nombre de usuario:</label><br>
    <input type="text" id="username" name="username" required><br>
    <label for="email">Correo electrónico:</label><br>
    <input type="email" id="email" name="email" required><br>
    <label for="password">Contraseña:</label><br>
    <input type="password" id="password" name="password" required><br><br>
    <input type="submit" value="Iniciar sesión">
  </form>

</body>
</html>
