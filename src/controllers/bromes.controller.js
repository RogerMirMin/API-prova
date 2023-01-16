const Broma = require("../Models/Bromes");

exports.obtenir = async (req, res) => {

    const bromes = [
        {
            "text": "Van dos i cau el del mig",
            "número": 1
        }, {
            "text": "Un tomàquet li diu a un altre: 'Vigila!'. I l'altre li respon: 'Què...?' Xup!",
            "número": 2
        }, {
            "text": "'Doctor, és greu?' 'Gamarús, que soc Sant Pere!'",
            "número": 3
        }, {
            "text": "'Doctor, doctor: amb diarrea em puc banyar?' 'Home, si és abundant...'",
            "número": 4
        }, {
            "text": "'Domènech, on va tan rabent, circumspecte, esmaperdut i esparverat ?''…anava a cagar, però ara vaig a buscar un diccionari.'",
            "número": 5
        }, {
            "text": "'Quin és el secret de la felicitat?' 'No perdre el temps discutint amb tòtils' 'No hi estic d'acord.'Tens tota la raó.'",
            "número": 6
        }, {
            "text": "'El meu tiet va morir de cataractes' 'No fotis! D'això un es pot morir?' 'No, és que uns malparis el van empènyer escales avall.'",
            "número": 7
        }, {
            "text": "Els cinc símptomes de la mandra: 1)",
            "número": 8
        }, {
            "text": "No és cert això de que la bellesa està a l'interior. A la costa hi ha gent bastant atractiva, també.",
            "número": 9
        }, {
            "text": "'Una cervesa!' 'De pressió?' 'No, alcoholisme!'",
            "número": 10
        }];

    const num = Math.floor(Math.random() * 10) + 1;
    try {
        const broma = bromes[num];
        res.json(broma);
    } catch (error) {
        console.log(error);
    }
}

exports.afegir = async (req, res) => {

    try {
        const { text, número } = req.body; // si en lloc de req.body poso un objecte, es crea nou Estudiant correctament. Per tant, el problema és anterior.
        console.log("Número broma: " + número);

        if (text && número) {
            const novaBroma = new Broma({ text, número }); //nou estudiant a partir del nom i correu que rep del client
            console.log("Nova broma: " + novaBroma); //simplement per veure com s'imprimeix

            await novaBroma.save();

            res.status(200).json({ msg: "Broma inserida correctament", id: novaBroma._id });
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