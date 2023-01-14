const Broma = require("../Models/Bromes");

exports.obtenir = async (req, res) => {

const num = Math.floor(Math.random() * 10) + 1;
try {
    const broma = await Broma.find({número: num});
    res.json(broma);
} catch (error) {
    console.log(error);
}
}

exports.afegir = async (req, res) => {

    try {
        const { text, número } = req.body; // si en lloc de req.body poso un objecte, es crea nou Estudiant correctament. Per tant, el problema és anterior.
        console.log("Número broma: "+número);

        if (text && número) {
            const novaBroma = new Broma({ text, número }); //nou estudiant a partir del nom i correu que rep del client
            console.log("Nou estudiant: " + novaBroma); //simplement per veure com s'imprimeix
            
            await novaBroma.save();

            res.status(200).json({msg: "Broma inserida correctament", id: novaBroma._id});
        } else {
            res.status(500).json({ isOK: false, msg: "Falten dades per introduir" });
        }

    } catch (error) {
        res.status(400).json(error);
    }

}
/*
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

}*/