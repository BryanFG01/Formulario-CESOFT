 // poner base de datos en ()
const conexion = require('/');

controller.save = (req, res) =>{
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO nombredelatabla set ?', [data], (err, nomnredetabla) => {
            res.redirect('/')            
        });
    });
};
