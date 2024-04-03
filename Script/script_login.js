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

const openModalBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close');
const sendEmailBtn = document.getElementById('sendEmail');
const emailInput = document.getElementById('email');
const alertBox = document.getElementById('alert');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

sendEmailBtn.addEventListener('click', () => {
  const email = emailInput.value;
  if (email) {
    alertBox.style.display = 'block';
    alertBox.textContent = `Se ha enviado un correo electrónico a ${email}`;
    setTimeout(() => {
      alertBox.style.display = 'none';
      modal.style.display = 'none';
      emailInput.value = '';
    }, 3000);
  } else {
    alert('Por favor ingrese su correo electrónico.');
  }
});

//Para validar el correo electronico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sendEmailBtn.addEventListener('click', () => {
  const email = emailInput.value;
  if (emailRegex.test(email)) {
    alertBox.style.display = 'block';
    alertBox.textContent = `Se ha enviado un correo electrónico a ${email}`;
    setTimeout(() => {
      alertBox.style.display = 'none';
      modal.style.display = 'none';
      emailInput.value = '';
    }, 3000);
  } else {
    alert('Por favor ingrese un correo electrónico válido.');
  }
});