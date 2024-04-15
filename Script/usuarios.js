document.addEventListener("DOMContentLoaded", function () {
    // Cargar los usuarios desde localStorage
    const usuariosLista = document.getElementById("usuariosLista");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    // Mostrar los usuarios en la lista
    // usuarios.forEach(usuario => {
    //     const li = document.createElement("li");
    //     li.innerText = `${usuario.nombre} ${usuario.apellido} (${usuario.email})`;
    //     usuariosLista.appendChild(li);
    // });

    // Obtiene referencias a los elementos del formulario y la tabla
const form = document.getElementById('registrationForm');
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
