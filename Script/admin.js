document.getElementById('btn-add').addEventListener('click', function() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
});

 // Event listener para el envío del formulario de agregar película
 document.getElementById('form-agregar-pelicula').addEventListener('submit', function(event) {
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
    const myModal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    myModal.hide();
});

  // Event listener para el envío del formulario de editar película
        document.getElementById('form-editar-pelicula').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe normalmente

            // Obtener los valores del formulario
            let codigoEditar = document.getElementById('codigoEditar').value;
            let nombreEditar = document.getElementById('nombreEditar').value;
            let categoriaEditar = document.getElementById('categoriaEditar').value;
            let descripcionEditar = document.getElementById('descripcionEditar').value;
            let publicadoEditar = document.getElementById('publicadoEditar').checked;

            // Actualizar los valores en la fila correspondiente de la tabla
            let fila = document.querySelector(`#tabla-peliculas tr[data-codigo="${codigoEditar}"]`);
            fila.querySelector('td:nth-child(2)').textContent = nombreEditar;
            fila.querySelector('td:nth-child(3)').textContent = categoriaEditar;
            fila.querySelector('td:nth-child(4)').textContent = descripcionEditar;
            fila.querySelector('td:nth-child(5) input[type="checkbox"]').checked = publicadoEditar;

            // Cerrar la ventana modal
            const myModal = bootstrap.Modal.getInstance(document.getElementById('myModalEditar'));
            myModal.hide();
        });

        // Event listener para abrir la ventana modal de editar al hacer clic en el botón de editar
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('btn-edit')) {
                let fila = event.target.closest('tr');
                let codigoEditar = fila.getAttribute('data-codigo');
                let nombreEditar = fila.querySelector('td:nth-child(2)').textContent;
                let categoriaEditar = fila.querySelector('td:nth-child(3)').textContent;
                letdescripcionEditar = fila.querySelector('td:nth-child(4)').textContent;
                let publicadoEditar = fila.querySelector('td:nth-child(5) input[type="checkbox"]').checked;

                document.getElementById('codigoEditar').value = codigoEditar;
                document.getElementById('nombreEditar').value = nombreEditar;
                document.getElementById('categoriaEditar').value = categoriaEditar;
                document.getElementById('descripcionEditar').value = descripcionEditar;
                document.getElementById('publicadoEditar').checked = publicadoEditar;

                const myModal = new bootstrap.Modal(document.getElementById('myModalEditar'));
                myModal.show();
            }
        });