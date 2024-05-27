const add_user = require('../helpers/add_user')

const log_user = require('../helpers/log_user')

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
        
        res.status(200).json({ msg: "Usuario logueado correctamente" })

    } else {
        
        res.status(400).json({ error: "El usuario que intenta loguear no existe o las credenciales son incorrectas" })
    
    }
}



module.exports = { login, register }

