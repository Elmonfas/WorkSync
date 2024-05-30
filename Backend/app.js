const express = require('express')

const dotenv = require('dotenv')

dotenv.config({path : '.env'})

const PORT = process.env.port || 3000

const pool = require('../Backend/database/con')

const router = require('./routes/index')

const router_shifts = require('./routes/shifts')

const router_requests = require('./routes/requests')

const cookieParser = require('cookie-parser')

const morgan = require('morgan')

const cors = require('cors')

const app = express()

const whitelist = [process.env.origin]

app.use(cors({
     
    origin: function(origin, callback){
    
        if(!origin || whitelist.includes(origin)){
    
            return callback(null, origin)
    
        }

        return callback("🚫 Error de cors, el dominio : " + origin + " No esta autorizado 🚫")

    },
    credentials : true

}))

app.use(express.json())

app.use(cookieParser())

app.use(express.urlencoded({ extended: false }))

app.use(morgan('dev'))

app.use('/', router)

app.use('/', router_shifts)

app.use('/', router_requests)




app.listen(PORT, () => console.log("✅✅ http://localhost:" + PORT + " ✅✅"))