const con = require('../database/con')

const bcrypt = require('bcryptjs')

async function log_user(user) {

    try {
    
        const { email, password } = user

        const db_email = await con.query('SELECT Email, Password FROM Users WHERE Email = ?', [email])

        if (db_email[0].length > 0) {
    
            const db_password = db_email[0][0].Password

            if(await bcrypt.compare(password, db_password) == true){
            
                return true

            }else{
            
                return false
            
            }
    
        } else {
    
            return false
    
        }
    
    } catch (e) {
    
        console.log('Ha habido un error en el logueo:', e)
    
        return false
    
    }

}

module.exports = log_user