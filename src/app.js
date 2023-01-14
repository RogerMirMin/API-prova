const express = require('express');
const morgan = require("morgan"); //donarà informació a la consola cada cop que es faci request
const conexionDB = require("./db.conexion");
const routerBromes = require("./routes/bromes.routes");
const app = express();

//conexión a la DB
conexionDB();

//settings
app.set("name", "API-NodeJs");
app.set("port", process.env.port || 3500);

//middleware
app.use(express.json()); //middleware que converteix dades client a json
app.use(morgan("dev")); //es pot canviar dev per altres opcions segons com vulguem que aparegui la info per consola

//middleware CORS
const cors = require('cors');
app.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: '*'
}));

//llamada de rutas
app.use(express.static("../public"));
//Ho hauré d'esborrar i posar la línia anterior
/*app.get('/', (req, res) => {
    res.send('Hello World!');
})*/
app.use("/api/bromes", routerBromes);

module.exports = app;