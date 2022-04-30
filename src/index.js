const app = require('./app')

app.listen(app.get('port'), () => {
    console.log('Se está corriendo en el puerto 3000')
    console.log('nombre de la aplicación', app.get("name"));
})