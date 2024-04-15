// document.addEventListener("DOMContentLoaded", function () {
//   const registrationForm = document.getElementById("registrationForm");

//   registrationForm.addEventListener("submit", function (event) {
//     event.preventDefault(); // Evitar que el formulario se envíe automáticamente

//     // Obtener los valores de los campos del formulario
//     const firstName = document.getElementById("firts-name").value.trim();
//     const lastName = document.getElementById("last-name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password1").value.trim();
//     const confirmPassword = document.getElementById("confirm-Password").value.trim();

//     // Validar que todos los campos estén completos
//     if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
//       alert("Por favor, complete todos los campos.");
//       return;
//     }

//     // Validar que la contraseña coincida con la confirmación de contraseña
//     if (password !== confirmPassword) {
//       alert("Las contraseñas no coinciden. Por favor, vuelva a ingresarlas.");
//       return;
//     }
//   });
// });
// Esperar a que el DOM esté cargado

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formId");

  // Manejar el evento submit del formulario
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Captura los valores de los campos del formulario
    const nombre = document.getElementById("first-name").value.trim();
    const apellido = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password1").value.trim();
    const confirmPassword = document.getElementById("confirm-Password").value.trim();

    // Verifica que los campos no estén vacíos
    if (!nombre || !apellido || !email || !password || !confirmPassword) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Verifica que las contraseñas coincidan
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden. Por favor, vuelva a ingresarlas.");
      return;
    }
   });


  const usersTable = document.getElementById('usersTable').querySelector('tbody');

  // Agrega un evento de envío al formulario
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Obtiene los valores de los campos del formulario
    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;
    const email = form.elements['email'].value;

    // Crea una nueva fila para la tabla
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
              <td>${firstName}</td>
              <td>${lastName}</td>
              <td>${email}</td>
          `;

    // Agrega la nueva fila a la tabla
    usersTable.appendChild(newRow);

    // Limpia los campos del formulario después de registrar un usuario
    form.reset();
    
  });


});





