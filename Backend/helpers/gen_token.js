const env = require('dotenv')

env.config({path : '.env'})

const jwt = require('jsonwebtoken')

const generate_token = (email) => {

    const expiresIn = 60 * 10

    try {

       return jwt.sign({email}, process.env.jwt_secret, {expiresIn : expiresIn})
        
    } catch (e) {

        return console.log(e)
    
    }
}

module.exports = generate_token