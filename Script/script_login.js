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