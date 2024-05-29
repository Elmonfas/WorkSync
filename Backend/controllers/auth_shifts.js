const con = require('../database/con')

const get_shifts = async (req, res) => {

    const shifts = await con.query('SELECT * FROM shifts')

}

module.exports = get_shifts