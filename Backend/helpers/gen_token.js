const env = require('dotenv')

env.config({path : '.env'})

const jwt = require('jsonwebtoken')

const generate_token = (uid) => {

    const expiresIn = 60 * 10

    try {

       return jwt.sign({uid}, process.env.jwt_secret, {expiresIn : expiresIn})
        
    } catch (e) {

        return console.log(e)
    
    }
}

const generate_key_token = (uid, res) => {

    const expiresIn = 60 * 60 * 24 * 30

    try {

        const key_token = jwt.sign({uid}, process.env.key_token, {expiresIn : expiresIn})

        res.cookie("key_token", key_token, {
            httpOnly: true,
            secure: !(process.env.modo === "dev"),
            expires : new Date(Date.now() + expiresIn * 1000)
        })
        
    } catch (e) {

        console.log(e)
        
    }

}

module.exports = {generate_token, generate_key_token}