//Funciones
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-container").addEventListener("submit", function(event) {
        event.preventDefault(); 
// obtenemos los valores de los input
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

// validamos
        if (username === "Fernanda" && password === "villerita") {
            alert("Puede ingresar a la página");
// Aquí se podria redirigir a otra parte
        } else {
            alert("Usuario o contraseña incorrectos. Por favor intente nuevamente");
        }
    });
});

// recuperar contraseña
document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordLink = document.getElementById('forgot-password-link');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const closeModal = document.querySelector('.close');
    const sendResetEmailBtn = document.getElementById('send-reset-email');
    const loginForm = document.getElementById('login-form');
    
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      forgotPasswordModal.style.display = 'block';
    });
  
    closeModal.addEventListener('click', function() {
      forgotPasswordModal.style.display = 'none';
    });
  
    sendResetEmailBtn.addEventListener('click', function(event) {
      event.preventDefault();
 
      const email = document.getElementById('forgot-email').value;
      alert('Correo de recuperación enviado a: ' + email);
      forgotPasswordModal.style.display = 'none';
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
     alert('Formulario de inicio de sesión enviado');
    });
  });