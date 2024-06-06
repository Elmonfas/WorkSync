const con = require('../database/con')

const mailer = require('../helpers/mailer')

const get_requests = async (req, res) => {

    try {

        const requests = await con.query('SELECT request_id, request_date, requested_day,DAYNAME(requests.requested_day) AS day_of_week ,MONTHNAME(requests.requested_day) AS month_requested, MONTHNAME(requests.request_date) AS month_request, message FROM requests JOIN Users ON user_id = Users.ID WHERE Users.ID = ?', [req.uid])

        res.status(200).json({ requests : requests[0]})    
        
    } catch (e) {

        console.log(e)

        res.status(500).json({ error : "Error de servidor"})
        
    }

}

const create_request = async (req, res) => {

    try {

        const {request_date, requested_day, message, email} = req.body

        mailer(email, requested_day, message)

        const new_request = {request_date, requested_day, message}

        await con.query('INSERT INTO requests (user_id, request_date, requested_day, message) VALUES (?, ?, ?, ?)', [req.uid, request_date, requested_day, message])

        return res.status(201).json({new_request})
        
    } catch (e) {

        console.log(e)

        res.status(500).json({ error : "Error de servidor"})
        
    }

}


module.exports = { get_requests, create_request, }