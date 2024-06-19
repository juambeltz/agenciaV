import { Testimonial } from '../models/Testimoniales.js'

const guardarTestimonial = async (req, res) => {
    
    console.log(req.body);
    //Validar campos
    //notar que al ser POST ya no usa el res sino el req
    

    const {nombre, correo, mensaje} = req.body

    const errores = [];

    if(nombre.trim() === ''){
        // console.log('El nombre esta vacio');
        errores.push({mensaje : 'El nombre está vacío'})
    }
    if(correo.trim() === ''){
        // console.log('El email esta vacio');
        errores.push({mensaje : 'El correo está vacío'})
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje : 'El mensaje está vacío'})
    }

    // console.log(errores)
    // me muestra un arreglo donde se almacenan los objetos que contienen los mensajes de error

    if (errores.length > 0) {
        //Si hay al menos un error

        const ttmls = await Testimonial.findAll();

        //Mostramos la vista con errores
        res.render('testimoniales', {
            pagina : "Testimonios de clientes",
            errores,
            nombre,
            correo,
            mensaje,
            ttmls
        })
    } else {
        // almacenarlos en la base de datos
        try {
            Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }
    
}

export { guardarTestimonial }
// decidimos expoertala como objeto