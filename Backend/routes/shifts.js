const router = require('express').Router()

const auth_token = require('../middlewares/auth_token')

const { get_shifts, create_shift } = require('../controllers/auth_shifts')

const { body_shifts_validator } = require('../middlewares/validation_manager')

///     get /shifts         all shifts
  
///     get /shifts:id      single shift 

///     post shifts         create shift

///     patch /shifts:id    update shift

///     delete /shifts:id   delete shift


router.get('/shifts',auth_token, get_shifts)

router.post('/shifts', auth_token, body_shifts_validator, create_shift)


module.exports = router 