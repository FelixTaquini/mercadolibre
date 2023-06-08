const express = require ('express')
const path = require ('path')

const app = express()

app.use( express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.get('/ingreso', (req, res) => {
    res.sendFile(__dirname + '/views/ingresa.html')
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/crea_cuenta.html')
})

app.get('*', (req, res) => {
    res.send("Ruta Registrada")
})

app.listen(3011, () => {
    console.log('servidor corriendo en el puerto 3011');
});
