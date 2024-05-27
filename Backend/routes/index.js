const router = require('express').Router()

const { login, register } = require('../controllers/auth')

const body = require('express-validator').body

const formValidation = require('../middlewares/form.validation')

const hashing = require('../helpers/hashing')

router.post('/register',[
    
    body('email', 'Formato de Email erroneo').trim().isEmail().normalizeEmail()],
    
    body('password', 'Minimo 5 caracteres').trim().isLength({ min : 5 }),

    body("password", 'Formato de contraseña erroneo'),

    formValidation,

    hashing,
    
    register)


router.post('/login',[
    
    body('email', 'Formato de Email erroneo').trim().isEmail().normalizeEmail()],
    
    body('password', 'Minimo 5 caracteres').trim().isLength({ min : 5 }),

    body("password", 'Formato de contraseña erroneo'),
    
    formValidation,

    hashing,
    
    login)

module.exports = router
