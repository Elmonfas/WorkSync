const router = require('express').Router()

const auth_token = require('../middlewares/auth_token')

const { get_requests, create_request } = require('../controllers/auth_requests')

const { body_requests_validator } = require('../middlewares/validation_manager')


router.get('/requests',auth_token, get_requests)

router.post('/requests', auth_token, body_requests_validator, create_request)


module.exports = router 