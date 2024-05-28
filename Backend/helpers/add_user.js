const con = require('../database/con')

async function add_user(user){
    
    try {

        const {name, surname, email, password} = user

        const existente = await con.query(`SELECT * FROM Users where email = "${email}"`)

        if (existente[0][0] == undefined) {

            await con.query('insert into Users (nombre, apellido, email, password) values (?, ?, ?, ?)', [name, surname, email, password])

            return true

        }else {

            return false

        }
        
    } catch (e) {

        console.log('Ha habido algun problema añadiendo el ususario :', e)
        
    }

}

module.exports = add_user

