const express = require("express");
const app = express;

const mysql = require("mysql");

app.set("view engine", "ejs");

let conexion = mysql.createConnection({
    host: "localhost",
    database: " ",
    user: " ",
    password: " ",

})

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", function(require,res){
    res.render("Registo");
});

app.post("/validar", function(require,res){
    const datos = req.body;

    let Nombre = datos.Nombre;
    let Apellidos = datos.Apellidos;
    let Ciudad = datos.Ciudad;
    let Pais = datos.Pais;
    let Email = datos.Email;
    let Telefono = datos.Telefono;
    let dropdown1 = datos.dropdown1;
    let dropdown = datos.dropdown;
    let Comentarios = datos.Comentarios;

    let buscar = "SELECT * FROM nombre de la tabla WHERE cedula = "+Cedula+" ";

    conexion.query(buscar, function(error, row){
        if(error){
            throw error;
        }else{
            if(row.length>0){
                console.log("No puede resgistrar, usuario ya existe");
        }else{
            let registrar =
              "INSERT INTO tabla_registo (cedula,) Values ('" +
              Nombre +
              "', '" +
              Apellidos +
              "', '" +
              Ciudad +
              "', '" +
              Ciudad +
              "','" +
              Pais +
              "', '" +
              Email +
              "', '" +
              Telefono +
              "', '" +
              dropdown1 +
              "', '" +
              dropdown +
              "', '" +
              Comentarios +
              "')";

            conexion.query(registrar, function (error) {
              if (error) {
                throw error;
              } else {
                console.log("Datos almacenados correctamente");
              }
            });
        }
        }
    });

    

});

app.listen(3000, function(){
    console.log("servidor creado http://localhost:3000");
});





/**const addForm = document.getElementById("Formulario-Registro");
addForm.addEventListener("submit", (e)=>{
    if(addForm.checkVisibility() === false){
        e.preventDefault();
        e.stopPropagation();
        addForm.classLista.add('was-validated');
        return false
    }
})**/
