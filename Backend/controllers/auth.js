const register = (req, res) => {

    res.json({ ok: 'register' })

}

const login = (req, res) => {

    res.json({ ok: 'login' })

}



module.exports = { login, register }

