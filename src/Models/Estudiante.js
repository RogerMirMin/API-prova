const { Schema, model } = require("mongoose");

const estudianteSchema = new Schema({
    nombre: {
        type: String,
        required: true //camp "nombre" serà obligatori
    },
    correo: {
        type: String,
        required: true //"correo" és camp obligatori
    },
    activo: {
            type: Boolean,
            default: true
    },
    materias: [
        {
            nombre: String,
            nota: Number,
            comentario: String
        }
    ]
    
});

module.exports = model("Estudiante", estudianteSchema);