import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetallesViaje 
} from '../controllers/paginasController.js';

import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();


/* Acá abajo la pagina de inicio tiene una ruta asociada ('/') despues desde el controlador me poasan la variable 'paginaInicio' que que nos dice que se tiene que mostrar */

router.get('/', paginaInicio);



// Como se escribe abajo se entraba antes de generar el archivo controllers/paginaControllers.js
// Ahora se entra así con la variable que me pasan desde controllers/paginaControllers.js a través del import


// // router.get('/nosotros', (req, res) => {  
// //     res.send('<h1 style="color:red">Nosotros vamos nosotros!!</h1>');
// //     el res.send() solo imprime un text

// //     const viajes = 'Viaje a Alemania';
// //     const alquileres = "casa en la playa"

// //     res.render('nosotros', {
// //         viajes,
// //         alquileres,

// //         pagina : "Quienes somos"
// //     })
// // });

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes );

router.get('/viajes/:detalleViaje', paginaDetallesViaje );
// El :slug puede ser cualquier cosa :viaje, :id etc... lo quie viene despues del : es comodín

router.get('/testimoniales', paginaTestimoniales);
// cuando uso get carga la funcio paginaTestimoniales
router.post('/testimoniales', guardarTestimonial);
//cdo uso post guardarTestimonial



export default router;