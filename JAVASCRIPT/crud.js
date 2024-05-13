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

        

// Función para editar
document.getElementById("Edit").addEventListener("click", function(event) {
    event.preventDefault();
    
    alert("Editar");
});

// Función para eliminar
document.getElementById("Delete").addEventListener("click", function(event) {
    event.preventDefault();
    
    alert("Eliminar");
});




