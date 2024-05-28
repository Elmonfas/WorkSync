const router = require('express').Router()

const { login, register, infouser, lock, logout } = require('../controllers/auth')

const body_form_validator = require('../middlewares/validation_manager')

const hashing = require('../helpers/hashing')

const auth_token = require('../middlewares/auth_token')

const auth_key_token = require('../middlewares/auth_key_token')



router.post('/register', body_form_validator, hashing, register)

router.post('/login', body_form_validator, login)

router.get('/protect',auth_token, infouser)  

router.get('/lock', auth_key_token , lock)

router.get('/logout', logout)



module.exports = router
