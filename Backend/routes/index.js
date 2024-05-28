const router = require('express').Router()

const { login, register, infouser, lock, logout } = require('../controllers/auth')

const body = require('express-validator').body

const formValidation = require('../middlewares/form_validation')

const hashing = require('../helpers/hashing')

const auth_token = require('../middlewares/auth_token')

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
    
    login)


router.get('/protect',auth_token, infouser)  

router.get('/lock', lock)

router.get('/logout', logout)

module.exports = router
