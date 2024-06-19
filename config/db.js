import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config()

const db = new Sequelize( process.env.DATABASE_URL, {
    // En vez de poner uno por uno ponemos el DATABASE_URL que los contiene a todos (user, passm host etc)
    // process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    // host: process.env.DB_HOST,
    // port: '3307',
    // dialect: 'mysql',
    
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;