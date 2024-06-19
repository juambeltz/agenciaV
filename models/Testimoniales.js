import Sequelize from 'sequelize';
import db from '../config/db.js'

export const Testimonial = db.define('testimoniales', {
// el 'viajes' hace referencia a la tabla viajes de la base de datos que está ne e l mysql
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});

