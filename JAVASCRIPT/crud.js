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


// Función para el botón "Editar"
document.getElementById("editarBtn").addEventListener("click", function() {
    alert("Editar");
});

// Función para el botón "Eliminar"
document.getElementById("eliminarBtn").addEventListener("click", function() {
    alert("Eliminar");
});




