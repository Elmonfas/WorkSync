const add_user = require('../helpers/add_user')

const log_user = require('../helpers/log_user')

const jwt = require('jsonwebtoken')

const env = require('dotenv')

env.config({path : './env/.env'})

const {generate_token, generate_key_token} = require('../helpers/gen_token')

const find_user = require('../helpers/find_user')


const register = async (req, res) => {

    const { name, surname, email, password } = req.body
    
    const user = {
        name: name,
        surname: surname,
        email: email,
        password: password
    }

    try {

        const added = await add_user(user)
        
        if (added) {

            res.status(200).json({ msg : "Usuario añadido correctamente"})

        } else {

            res.status(400).json({ error : "El usuario que intenta registrar ya existe"})

        }
   
    } catch (e) {

        console.error('Error al agregar usuario:', e)

        res.status(400).json({ error : "Error en el registro"})
    }

}


const login = async (req, res) => {
    
    const { email, password } = req.body

    const user = { email, password }

    const logged = await log_user(user)

    if (logged) {
        
        const token = generate_token(email)

        generate_key_token(email, res)

        // res.cookie("token", token, {
        //     httpOnly : true,
        //     secure : !(process.env.modo === "developer")
        // })

        res.status(200).json({ msg: "Usuario logueado correctamente","token" : token})

    } else {
        
        res.status(403).json({ error: "El usuario que intenta loguear no existe o las credenciales son incorrectas" })
    
    }
}


const infouser = async (req, res) => {

    try {

        const user = await find_user(req.email)

        return res.status(200).json({ user : user })
        
    } catch (e) {

        return res.status(500).json({ error : "Error de servidor "})
        
    }


}

const lock = async (req, res) => {

    try {
        
        const key_token_cookie = req.cookies.key_token

        if(!key_token_cookie) 
            
            throw new Error('No existe el token')

        const {email} = jwt.verify(key_token_cookie, process.env.key_token)

        const token = generate_token(email)

        res.status(200).json({ msg: "Token refrescado correctamente","token" : token})

    } catch (e) {

        console.log(e)

        return res.status(401).json({ error : e.message})
        
    }


}


const logout = (req ,res) => {

    res.clearCookie('key_token')

    res.json({ok : true})

}

module.exports = { login, register, infouser, lock, logout }

