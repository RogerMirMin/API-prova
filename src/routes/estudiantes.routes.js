const express = require("express");
const ctrEst = require("../controllers/estudiantes.controller");
const routerEstudiantes = express();

/*el que proposava el tio del vídeo era
const { Router } = require("express");
const routerEstudiantes = Router();
*/

routerEstudiantes.get("/", ctrEst.obtener);

routerEstudiantes.post("/", ctrEst.agregar);

routerEstudiantes.put("/:id", ctrEst.actualizar);

routerEstudiantes.delete("/:id", ctrEst.eliminar);

module.exports = routerEstudiantes;