const router = require('express').Router()

const get_shifts = require('../controllers/auth_shifts')

///     get /shifts         all shifts

router.get('/shifts', get_shifts)
  
///     get /shifts:id      single shift 

///     post shifts         create shift

///     patch /shifts:id    update shift

///     delete /shifts:id   delete shift



module.exports = router 