const router = require('express').Router()

const auth_token = require('../middlewares/auth_token')

const { get_shifts, create_shift, delete_shift, update_shift } = require('../controllers/auth_shifts')

const { body_shifts_validator } = require('../middlewares/validation_manager')


router.get('/shifts',auth_token, get_shifts)

router.post('/shifts', auth_token, body_shifts_validator, create_shift)

router.delete('/shifts/:id', auth_token, delete_shift)

router.patch('/shifts/:id', auth_token, body_shifts_validator,  update_shift)


module.exports = router 