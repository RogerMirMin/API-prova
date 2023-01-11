exports.obtener = (req, res) => {

    const estudiantes = [

        {
            "Nombre": "Pedro Campos",
            "Correo": "pedro@correo.com"
        },
        {
            "Nombre": "Jimena Moreno",
            "Correo": "jimenaM@gmail.com"
        }
    ]

    res.json(estudiantes);

}

exports.agregar = (req, res) => {

    const { Nombre, Correo } = req.body;
    console.log(Nombre);
    res.json("Datos recibidos");

}

exports.actualizar = (req, res) => {

    const id = req.params.id;
    console.log(id);
    res.json("id recibida para actualizar documento");

}

exports.eliminar = (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json("id recibida para eliminar documento");

}