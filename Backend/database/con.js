const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config({path : '.env'})

try{
    const con = mysql.createPool({
        host : process.env.host,
        user : process.env.user,
        password : process.env.password,
        database : process.env.database
    })

    console.log('👋 Conexion SQL establecida ')

    module.exports = con
}catch (e) {
    console.log('❌ Error en la conexion SQL ',  e)
}