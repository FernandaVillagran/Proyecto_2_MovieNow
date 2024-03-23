document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        // para tomar los valores del input
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // validacion de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Email inválido");
            return;
        }

        alert("Formulario enviado correctamente, pronto nos comunicaremos con Ud.");

        // Reset form fields after submission
        document.getElementById("contact-form").reset();
    });
});