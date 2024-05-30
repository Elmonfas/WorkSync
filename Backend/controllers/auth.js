const add_user = require('../helpers/add_user')

const log_user = require('../helpers/log_user')

const jwt = require('jsonwebtoken')

const env = require('dotenv')

env.config({path : '.env'})

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

            const token = generate_token(added)

            generate_key_token(added, res)
    
            res.status(201).json({ msg: "Usuario creado correctamente","token" : token})

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
        
        const token = generate_token(logged)

        generate_key_token(logged, res)

        res.status(200).json({ msg: "User logged successfully","token" : token})

    } else {
        
        res.status(403).json({ error: "Invalid user or wrong crendetials" })
    
    }
}


const infouser = async (req, res) => {

    try {

        const user = await find_user(req.uid)

        return res.status(200).json({ user : user })
        
    } catch (e) {

        return res.status(500).json({ error : "Error de servidor "})
        
    }


}

const lock = async (req, res) => {

    try {

        const token = generate_token(req.uid)

        res.status(200).json({ msg: "Token refrescado correctamente","token" : token})

    } catch (e) {

        console.log(e)

        return res.status(500).json({ error : "Error de servidor "})
        
    }


}


const logout = (req ,res) => {

    res.clearCookie('key_token')

    res.json({ok : true})

}

module.exports = { login, register, infouser, lock, logout }

