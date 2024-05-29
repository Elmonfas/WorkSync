const jwt = require('jsonwebtoken')

const env = require('dotenv')

env.config({path : '.env'})

const auth_key_token = (req ,res ,next) => {

    try {

        const key_token_cookie = req.cookies.key_token

        if(!key_token_cookie) 
            
            throw new Error('No existe el token')

        const {uid} = jwt.verify(key_token_cookie, process.env.key_token)

        req.uid = uid

        next()
        
    } catch (e) {

        return res.status(401).json({ error : e.message})
        
    }

}

module.exports = auth_key_token