// const express = require('express'); // es lo mismo que el que sigue pero version mas vieja

import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'

  
// console.log(process.env.DATABASE);

const app = express();

//Conectar a la base de datos
db.authenticate()
    .then( () => console.log('LA BASE DE DATOS TA CONECTADÍSIMA PUTO!!'))
    // NUNCA LE PONGAS ; AL FINAL DE LOS THEN  O LOS CATCH
    .catch( error => console.log(error))

//Definir puerto
const port = process.env.PORT || 3000
// el process.env.PORT se usa solo en el diploy NO en fase de desarrollo que va al 4007

// Definir la carpeta publica con las hojas de estilo e imagenes
app.use(express.static('public'))

//Agegamos body parser para leer datos del form de testimoniales
app.use(express.urlencoded({extended: true}));  

//habilitar pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';


    return next();
});

// Agregar router
app.use('/', router)
// desde el inicio llamo a router


// app.get('/', (req, res) => {
//     // res.send('Hola Mundo')
//     res.send('Inicio');
// });

// app.get('/nosotros', (req, res) => {  
//     res.send('Nosotros');
// });


// app.get('/contacto', (req, res) => {  
//     res.send('<h1>Contacto acá!</h1>');
// })

app.listen( port,  () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});



