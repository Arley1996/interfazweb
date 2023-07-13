window.onload = function() {
    var form = document.getElementById("loginForm");
    form.onsubmit = function(event) {
      event.preventDefault();
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
  
      if (username === "admin" && password === "123456") {
        showMessage("Inicio de sesión exitoso.", "green");
      } else {
        showMessage("Credenciales inválidas. Inténtalo de nuevo.", "red");
      }
    };
  
    function showMessage(message, color) {
      var messageElement = document.getElementById("message");
      messageElement.innerHTML = message;
      messageElement.style.color = color;
    }
  }
  