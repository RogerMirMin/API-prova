const Estudiante = require("../Models/Estudiante");

exports.obtener = async (req, res) => {
try {
    const estudiantes = await Estudiante.find({activo: true});
    res.json(estudiantes);
} catch (error) {
    console.log(error);
}
}

exports.agregar = async (req, res) => {

    try {
        const { nombre, correo, materias } = req.body; // si en lloc de req.body poso un objecte, es crea nou Estudiant correctament. Per tant, el problema és anterior.
        console.log("Nom: "+nombre);

        if (nombre && correo) {
            const nuevoEstudiante = new Estudiante({ nombre, correo, materias }); //nou estudiant a partir del nom i correu que rep del client
            console.log("Nou estudiant: " + nuevoEstudiante); //simplement per veure com s'imprimeix
            
            await nuevoEstudiante.save();

            res.json({msj: "Documento insertado de forma satisfactoria", id: nuevoEstudiante._id});
        } else {
            res.json({ isOK: false, msg: "Los datos son requeridos" });
        }

    } catch (error) {
        res.json(error); //enviem l'error al client
    }

}

exports.actualizar = async (req, res) => {

    try {
        const id = req.params.id;
        const data = req.body;
        if (id && data) {
            await Estudiante.findByIdAndUpdate(id, data);
            res.json("Registro actualizado");
        } else {
            res.json({ msg: "Datos insuficientes.", isOk: false })
        }
    } catch (error) {
        res.json(error);
    }
}

exports.eliminar = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const eliminado = await Estudiante.findByIdAndUpdate(id, {activo: false});
        res.status(200).json("id recibida para eliminar documento de "+eliminado.nombre);
    } catch (error) {
        res.status(500).json(error);
    }

}