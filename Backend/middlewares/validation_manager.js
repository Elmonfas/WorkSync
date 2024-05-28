const validationResult = require('express-validator').validationResult

const body = require('express-validator').body

const formValidation = (req, res ,next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){

        return res.status(400).json({errors : errors.array()})

    }

    next()
}


const body_form_validator = [
    
        body('email', 'Formato de Email erroneo').trim().isEmail().normalizeEmail(),
        
        body('password', 'Minimo 5 caracteres').trim().isLength({ min : 5 }),
    
        body("password", 'Formato de contraseña erroneo'),
        
        formValidation
    ]

module.exports = body_form_validator