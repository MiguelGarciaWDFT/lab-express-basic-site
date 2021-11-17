//1.IMPORTACIONES
const express = require("express")

const app = express()

require("dotenv").config()

//2.MIDDLEWARS

app.use(express.static('public'))
app.set("views", __dirname + "/views") //direcccion de carpetas
app.set("view engine", "hbs") //view engine respuesta por default

//3.RUTAS

app.get("/", (req, res) => {

    res.sendFile(__dirname + '/views/index.html')
})

app.get("/about", (req, res) => {

    res.sendFile(__dirname + '/views/about.html')
})

app.get("/works", (req, res) => {

    res.sendFile(__dirname + '/views/works.html')
})

app.get("/photogallery", (req, res) => {

    res.sendFile(__dirname + '/views/photogallery.html')
})

//4.SERVIDOR
//Cada vez que hagas cambios
app.listen(process.env.PORT, () => {
    console.log(`Servidor activado en el puerto ${process.env.PORT}`)
})