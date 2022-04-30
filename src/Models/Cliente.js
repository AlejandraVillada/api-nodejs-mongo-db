const mongoose = require('mongoose');


const ClienteSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    tipo_documento: { type: String, required: true },
    email: { type: String, required: true },
    documento: { type: String, required: true },
    genero: { type: String, required: true },
    edad: { type: String, required: true },
    estado: { type: Boolean, required: true, default: true }

});

module.exports = mongoose.model('Clientes', ClienteSchema);