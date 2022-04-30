const { Router } = require('express');
const routerClientes = Router();
const ctrCli = require('../controllers/clientes.controller');

routerClientes.get('/datos/:num', (req, res) => {
    console.log(req.params);
    const op = {
        'num': req.params.num,
        'resultado': req.params.num * 2
    }
    res.send(op);
})

routerClientes.get('/', ctrCli.consultar)


routerClientes.post('/', ctrCli.agregar)

routerClientes.put('/:id', ctrCli.actualizar)

routerClientes.delete('/:id', ctrCli.eliminar)

module.exports = routerClientes;