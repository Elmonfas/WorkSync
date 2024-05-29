const jwt = require('jsonwebtoken')

const env = require('dotenv')

env.config({path : '.env'})

const auth_token = (req, res, next) => {

    try {

        let token = req.headers?.authorization
        
        if(!token) 
            
            throw new Error('No existe el token " Bearer " en el header')

        token = token.split(' ')[1]
        
        const {uid} = jwt.verify(token, process.env.jwt_secret)

        req.uid = uid

        next()
        
    } catch (e) {

        console.log(e)

        return res.status(401).json({ error : e.message})
        
    }
}

module.exports = auth_token