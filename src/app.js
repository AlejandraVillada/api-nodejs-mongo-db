const express = require('express');
const routerClientes = require('./routes/clientes.routes');
const morgan = require('morgan');
const conexiondb = require('./db.conexion');
const app = express();

conexiondb();

app.set('name', 'api-node-mongo');
app.set('port', process.env.port || 3500);

// middleware
app.use(express.json())
app.use(morgan('common'))


// Llamado de rutas
app.use(express.static('public'))
app.use('/api/clientes', routerClientes);

module.exports = app;