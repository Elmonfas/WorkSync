const con = require('../database/con')

const bcrypt = require('bcryptjs')

async function log_user(user) {

    try {
    
        const { email, password } = user

        const db_email = await con.query('SELECT Email, Password FROM Users WHERE Email = ?', [email])

        if (db_email[0].length > 0) {
    
            const db_password = db_email[0][0].Password

            console.log(db_password)
            console.log(password)

            if(await bcrypt.compare(password, db_password) == true){

                console.log('Inicio de sesion correcto')
            
                return true

            }else{
            
                console.log('Rellena bien el formulario')
            
                return false
            
            }
    
        } else {
    
            console.log('El usuario no existe')
    
            return false
    
        }
    
    } catch (e) {
    
        console.log('Ha habido un error en el logueo:', e)
    
        return false
    
    }

}

module.exports = log_user