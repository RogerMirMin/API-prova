const { Router } = require("express");
const ctrBroma = require("../controllers/bromes.controller");
const routerBromes = Router();
const cors = require('cors');

/*el que proposava el tio del vídeo era
const { Router } = require("express");
const routerEstudiantes = Router();
*/

routerBromes.get("/", cors(), ctrBroma.obtenir);

routerBromes.post("/", ctrBroma.afegir);

//routerEstudiantes.put("/:id", ctrBroma.actualizar);

//routerEstudiantes.delete("/:id", ctrBroma.eliminar);

module.exports = routerBromes;