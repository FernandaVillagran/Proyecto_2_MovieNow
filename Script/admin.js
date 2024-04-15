document.getElementById('btn-add').addEventListener('click', function () {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});

// Event listener para el envío del formulario de agregar película
document.getElementById('form-agregar-pelicula').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtener los valores del formulario
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let categoria = document.getElementById('categoria').value;
    let descripcion = document.getElementById('descripcion').value;
    let publicado = document.getElementById('publicado').checked;

    // Nueva fila de tabla con los valores del formulario
    const tablaPeliculas = document.getElementById('tabla-peliculas');
    const nuevaFila = document.createElement('tr');
    nuevaFila.innerHTML = `
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>${descripcion}</td>
        <td><input type="checkbox" ${publicado ? 'checked' : ''}></td>
        <td>
            <span class="btn-delete" title="Eliminar">
              <i class="fa-solid fa-trash-can"></i>
            </span>
            <span class="btn-edit" title="Editar">
              <i class="fas fa-edit"></i>
            </span>
            <span class="btn-highlight" title="Destacado">
              <i class="fas fa-star"></i>
            </span>
          </td>
    `;
    // Agregar la nueva fila al final de la tabla
    tablaPeliculas.appendChild(nuevaFila);

    //  Event listener para eliminar filas al hacer clic en el botón de eliminar
    // Selecciona todos los elementos con la clase 'btn-delete'
    const botonesDelete = document.querySelectorAll('.btn-delete');

    // Itera sobre cada botón y agrega un event listener de clic a cada uno
    botonesDelete.forEach(function (boton) {
        boton.addEventListener('click', function (event) {
            // Aquí va el código a ejecutar cuando se hace clic en un botón delete
            let fila = event.target.closest('tr');
            fila.remove();
        });
    });

    // Cerrar la ventana modal
    const myModal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    myModal.hide();
});
// Primero, selecciona el botón con el ID `#btn-logout`
const btnLogout = document.querySelector('#btn-logout');

// Agrega un evento `click` al botón `#btn-logout`
btnLogout.addEventListener('click', function() {
    // Redirige a `index.html` y cierra la página actual
    window.location.href = 'index.html';
});

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones de edición
    const editButtons = document.querySelectorAll('.btn-edit');

    // Selecciona el formulario de edición
    const formEditarPelicula = document.getElementById('form-editar-pelicula');

    // Modal de edición
    const modalEditar = new bootstrap.Modal(document.getElementById('myModalEditar'));

    // Escuchar evento de clic en los botones de edición
    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Encuentra la fila que contiene el botón de edición
            const row = button.closest('tr');

            // Extrae los datos de la fila
            const codigo = row.children[0].textContent;
            const nombre = row.children[1].textContent;
            const categoria = row.children[2].textContent;
            const descripcion = row.children[3].textContent;
            const publicado = row.children[4].querySelector('input').checked;

            // Rellena los campos del formulario de edición
            formEditarPelicula.querySelector('#codigoEditar').value = codigo;
            formEditarPelicula.querySelector('#nombreEditar').value = nombre;
            formEditarPelicula.querySelector('#categoriaEditar').value = categoria;
            formEditarPelicula.querySelector('#descripcionEditar').value = descripcion;
            formEditarPelicula.querySelector('#publicadoEditar').checked = publicado;

            // Abre el modal de edición
            modalEditar.show();
        });
    });

    // Escucha el evento de envío del formulario de edición
    formEditarPelicula.addEventListener('submit', function (event) {
        event.preventDefault();

        // Extrae los valores del formulario de edición
        const codigo = formEditarPelicula.querySelector('#codigoEditar').value;
        const nombre = formEditarPelicula.querySelector('#nombreEditar').value;
        const categoria = formEditarPelicula.querySelector('#categoriaEditar').value;
        const descripcion = formEditarPelicula.querySelector('#descripcionEditar').value;
        const publicado = formEditarPelicula.querySelector('#publicadoEditar').checked;

        // Actualiza la fila correspondiente con los valores editados
        const row = document.querySelector(`#tabla-peliculas td:contains('${codigo}')`).closest('tr');
        row.children[1].textContent = nombre;
        row.children[2].textContent = categoria;
        row.children[3].textContent = descripcion;
        row.children[4].querySelector('input').checked = publicado;

        // Cierra el modal de edición
        modalEditar.hide();
    });
});



