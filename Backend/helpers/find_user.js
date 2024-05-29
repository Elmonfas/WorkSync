const con = require('../database/con')

async function find_user (uid) {

    try {

        const user = await con.query('SELECT * FROM Users WHERE ID = ?', [uid])

        console.log(user[0][0])

        return user[0][0]
        
    } catch (e) {

        console.log(e)
        
    }

} 

module.exports = find_user