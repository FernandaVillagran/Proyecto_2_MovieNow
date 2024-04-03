document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
      // Obtener los valores de los campos del formulario
      const firstName = document.getElementById("firts-name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password1").value.trim();
      const confirmPassword = document.getElementById("confirm-Password").value.trim();
  
      // Validar que todos los campos estén completos
      if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, complete todos los campos.");
        return;
      }
  
      // Validar que la contraseña coincida con la confirmación de contraseña
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, vuelva a ingresarlas.");
        return;
      }
  
      // Si pasa todas las validaciones, puedes enviar el formulario aquí
      // Por ejemplo, podrías enviar los datos a un servidor para procesar el registro
      // Aquí puedes agregar tu código para enviar los datos del formulario a tu servidor
  
      // Después de enviar el formulario, podrías redirigir al usuario a otra página
      // Por ejemplo:
      // window.location.href = "pagina_de_inicio.html";
    });
  });