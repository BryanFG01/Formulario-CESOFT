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



