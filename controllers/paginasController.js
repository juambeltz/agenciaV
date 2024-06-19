import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {

    //Consultar 3 viajes del modelo viajo y para eso teng oque meter un esync
    try {
        const vje = await Viaje.findAll({limit: 3});
        const ttmls = await Testimonial.findAll({limit: 3});
        res.render('inicio', {
        pagina: 'Esta es la página de inicio',
        clase: 'home',
        //pq tengo que pasar la clase así?
        resultadoViajes: vje,
        ttmls
        
    });

    } catch (error) {
        console.log(error)
    }
    


}

const paginaNosotros = (req, res) => {  
    res.render('nosotros', {
        pagina : "Quienes somos",
    })
}

const paginaViajes = async (req, res) => {  

    //Consultar base de datos
    const viajes = await Viaje.findAll();
    // creo esta variable viajes que Se va a traer todos resultados de la tabla

    // console.log(viajes);

    res.render('viajes', {
        pagina : "Nuestros próximos viajes",
        resultadoViajes: viajes
    })
}


const paginaTestimoniales = async (req, res) => {  

    try {
        const ttmls = await Testimonial.findAll();
        res.render('testimoniales', {
        pagina : "Testimonios de clientes",
        ttmls
    })
    } catch (error) {
        console.log(error)
    }
}

// Muestra el detalle de un solo viaje por su slug
const paginaDetallesViaje = async (req, res) => {
    
    // console.log(req.params);
    //req.params es un objeto

    const { detalleViaje } = req.params;
    // Este detalles viaje esta definido en index.js de carpeta routes no el otro

    try {
        const resultado = await Viaje.findOne({ where: { slug : detalleViaje }});
        // Este Viaje con mayuscula viene de models en el import


        res.render('viaje', {
            // pagina: 'Informacion Viaje',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}






export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetallesViaje
}