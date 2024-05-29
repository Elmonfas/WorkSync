const con = require('../database/con')

const get_shifts = async (req, res) => {

    try {

        const shifts = await con.query('SELECT shift_id, day,DAYNAME(shifts.day) AS day_of_week, start_time, end_time FROM shifts JOIN Users ON user_id = Users.ID WHERE Users.ID = ?', [req.uid])

        res.status(200).json({ shifts : shifts[0]})    
        
    } catch (e) {

        console.log(e)

        res.status(500).json({ error : "Error de servidor"})
        
    }

}

const create_shift = async (req, res) => {

    try {

        const {day, start_time, end_time} = req.body

        const new_shift = {day, start_time, end_time}

        await con.query('INSERT INTO shifts (user_id, day, start_time, end_time) VALUES (?, ?, ?, ?)', [req.uid, day, start_time, end_time])

        return res.status(201).json({new_shift})
        
    } catch (e) {

        console.log(e)

        res.status(500).json({ error : "Error de servidor"})
        
    }

}

const delete_shift = async (req, res) => {

    try {

        const {id} = req.params

        const shift = await con.query('SELECT * FROM shifts WHERE shift_id = ?', [id])

        if ( shift[0][0].user_id == req.uid ) { 

            await con.query('DELETE FROM shifts WHERE shift_id = ?', [id])

            return res.status(200).json({msg : "Turno borrado correctamente", shift : shift[0] })

        }else return res.status(401).json({ error : "Este tuerno no es tuyo, no puedes borrarlo "})
        
    } catch (e) {

        console.log(e)

        res.status(500).json({ error : "Error de servidor"})
    }

}

const update_shift = async (req, res) => {

    try {

        const {id} = req.params

        const {day, start_time, end_time} = req.body

        const shift = await con.query('SELECT * FROM shifts WHERE shift_id = ?', [id])

        if ( shift[0][0].user_id == req.uid ) { 

            await con.query('UPDATE shifts SET day = ?, start_time = ?, end_time = ? WHERE shift_id = ?', [day, start_time, end_time, id])

            return res.status(202).json({msg : "Turno actualizado correctamente", shift : shift[0] })

        }else return res.status(401).json({ error : "Este tuerno no es tuyo, no puedes borrarlo "})
        
    } catch (e) {

        console.log(e)

        res.status(500).json({ error : "Error de servidor"})
    }

}


module.exports = { get_shifts, create_shift, delete_shift, update_shift }