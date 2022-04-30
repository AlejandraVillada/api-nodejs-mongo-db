const Cliente = require('../Models/Cliente');


exports.consultar = async(req, res) => {

    try {
        const Clientes = await Cliente.find();
        res.json(Clientes);
        // console.log(Clientes);
    } catch (error) {
        res.json(error + "h");
    }
    // const clientes = [{
    //         "nombre": 'pepito',
    //         'correo': 'pepito@gmail.com'
    //     },
    //     {
    //         "nombre": 'marta',
    //         'correo': 'marta@gmail.com'
    //     }

    // ]

    // res.json(Clientes);
}
exports.agregar = (req, res) => {

    try {
        const { nombre, apellido, tipo_documento, email, documento, genero, edad } = req.body;
        if (nombre && apellido) {
            const nuevo_cliente = new Cliente({ nombre, apellido, tipo_documento, email, documento, genero, edad });
            nuevo_cliente.save();
            res.json({ msj: "documento insertado de forma satisfactoria", id: nuevo_cliente._id });
        } else {
            res.json({ isok: false, msj: "Los datos son requeridos" });
        }
    } catch (error) {
        res.json({ isok: false, msj: "Los datos son requeridos" });

    }

    // console.log(req.body);
    // res.json('datos por post recibidos');
}

exports.actualizar = async(req, res) => {

    try {
        const id = req.params.id;
        const datos = req.body;
        await Cliente.findByIdAndUpdate(id, datos);
        res.status(200).json({ msj: "Documento actualizado ", isok: true });

    } catch (error) { res.json(error); }

    // const id = req.params.id;
    // console.log(id);
    // res.json('datos por post recibidos para actualizar');
}
exports.eliminar = async(req, res) => {

    try {
        const id = req.params.id;
        console.log(id);
        const eliminaddo = await Cliente.findByIdAndDelete(id);
        res.status(200).json({ msj: "Documento eliminado ", isok: true });

    } catch (error) { res.json(error); }
    // const id = req.params.id;
    // console.log(id);

    // res.json('id recibido para eliminar');
}