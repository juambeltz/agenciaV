import Sequelize from 'sequelize';
import db from '../config/db.js'

export const Viaje = db.define('viajes', {
// el 'viajes' hace referencia a la tabla viajes de la base de datos que está ne e l mysql
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
});

