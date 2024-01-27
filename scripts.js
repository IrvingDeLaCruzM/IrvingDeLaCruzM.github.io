function validateLogin() {
    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validar el nombre de usuario (puedes ajustar según tus requisitos)
    if (username.trim() === "") {
      alert("Por favor, ingrese un nombre de usuario.");
      return;
    }
  
    // Validar el correo electrónico usando una expresión regular
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }
  
    // Validar la longitud de la contraseña
    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
  
    // Si todo es válido, podrías enviar los datos a tu servidor o hacer lo que necesites
    alert("Inicio de sesión exitoso!");
    console.log("Usuario:" + username, "Email:" + email, "Contraseña:" + password);
  }



