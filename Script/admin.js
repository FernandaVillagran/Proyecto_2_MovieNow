document.getElementById('btn-add').addEventListener('click', function() {
    let myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});

 // Event listener para el envío del formulario de agregar película
 document.getElementById('form-agregar-pelicula').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtener los valores del formulario
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value;
    const publicado = document.getElementById('publicado').checked;

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
        <span class="btn-delete">Eliminar</span>
        <span class="btn-edit">Editar</span>
        <span class="btn-highlight">Destacado</span>
        </td>
    `;
    // Agregar la nueva fila al final de la tabla
    tablaPeliculas.appendChild(nuevaFila);

    //  Event listener para eliminar filas al hacer clic en el botón de eliminar
    //  document.addEventListener('click', function(event) {
    //     if (event.target.classList.contains('btn-delete')) {
    //         let fila = event.target.closest('tr');
    //         fila.remove();
    //     }
    // Cerrar la ventana modal
    let myModal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    myModal.hide();
});

  // Event listener para el envío del formulario de editar película
        document.getElementById('form-editar-pelicula').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe normalmente

            // Obtener los valores del formulario
            var codigoEditar = document.getElementById('codigoEditar').value;
            var nombreEditar = document.getElementById('nombreEditar').value;
            var categoriaEditar = document.getElementById('categoriaEditar').value;
            var descripcionEditar = document.getElementById('descripcionEditar').value;
            var publicadoEditar = document.getElementById('publicadoEditar').checked;

            // Actualizar los valores en la fila correspondiente de la tabla
            var fila = document.querySelector(`#tabla-peliculas tr[data-codigo="${codigoEditar}"]`);
            fila.querySelector('td:nth-child(2)').textContent = nombreEditar;
            fila.querySelector('td:nth-child(3)').textContent = categoriaEditar;
            fila.querySelector('td:nth-child(4)').textContent = descripcionEditar;
            fila.querySelector('td:nth-child(5) input[type="checkbox"]').checked = publicadoEditar;

            // Cerrar la ventana modal
            var myModal = bootstrap.Modal.getInstance(document.getElementById('myModalEditar'));
            myModal.hide();
        });

        // Event listener para abrir la ventana modal de editar al hacer clic en el botón de editar
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-edit')) {
                var fila = event.target.closest('tr');
                var codigoEditar = fila.getAttribute('data-codigo');
                var nombreEditar = fila.querySelector('td:nth-child(2)').textContent;
                var categoriaEditar = fila.querySelector('td:nth-child(3)').textContent;
                var descripcionEditar = fila.querySelector('td:nth-child(4)').textContent;
                var publicadoEditar = fila.querySelector('td:nth-child(5) input[type="checkbox"]').checked;

                document.getElementById('codigoEditar').value = codigoEditar;
                document.getElementById('nombreEditar').value = nombreEditar;
                document.getElementById('categoriaEditar').value = categoriaEditar;
                document.getElementById('descripcionEditar').value = descripcionEditar;
                document.getElementById('publicadoEditar').checked = publicadoEditar;

                var myModal = new bootstrap.Modal(document.getElementById('myModalEditar'));
                myModal.show();
            }
        });