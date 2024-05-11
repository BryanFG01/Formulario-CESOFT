 // poner base de datos en ()  y en la linea 8
/**const conexion = require('/');

controller.save = (req, res) =>{
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO nombredelatabla set ?', [data], (err, nomnredetabla) => {
            res.redirect('/')            
        });
    });
}; **/

// Obtenemos los elementos de los enlaces
        const enlaceEdit = document.getElementById("edit");
        const enlaceDelete = document.getElementById("Delete");
        

        // Agregamos un evento de clic al enlace "Editar"
        enlaceEdit.addEventListener("click", function (event) {
          event.preventDefault(); // Evita que se ejecute la acción predeterminada del enlace
          console.log("Se ha pulsado el enlace de Editar");
          // Aquí se agrega el código para abrir un formulario de edición o realizar alguna acción de edición
        });


        // Agregamos un evento de clic al enlace "Eliminar"
        enlaceDelete.addEventListener("click", function (event) {
          event.preventDefault(); // Evita que se ejecute la acción predeterminada del enlace
          console.log("Se ha pulsado el enlace de Eliminar");
          //  Aquí se agrega el código para eliminar algún elemento o realizar alguna acción
        });



        

        //Obtener la referencia al input de búsqueda y a la lista de elementos
       // const inputBusqueda = document.getElementById("Search");
       // const listaElementos = document.getElementById('lista-elementos');    (corregir )

        // Agregar un evento de escucha al input de búsqueda
       /**  inputBusqueda.addEventListener('input', function() {
            const terminoBusqueda = inputBusqueda.value.toLowerCase(); // Obtener el término de búsqueda y convertirlo a minúsculas
            const elementos = listaElementos.getElementsByTagName('li'); // Obtener todos los elementos de la lista

            // Recorrer los elementos de la lista
            Array.from(elementos).forEach(function(elemento) {
                const textoElemento = elemento.textContent.toLowerCase(); // Obtener el texto del elemento y convertirlo a minúsculas
                
                // Mostrar u ocultar el elemento dependiendo si coincide con el término de búsqueda
                if (textoElemento.includes(terminoBusqueda)) {
                    elemento.style.display = 'block'; // Mostrar el elemento
                } else {
                    elemento.style.display = 'none'; // Ocultar el elemento
                }
            });
        });*/




