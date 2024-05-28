const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path : '.env'})
const pool = require('../Backend/database/con')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/', router)

const PORT = process.env.port || 3000

app.listen(PORT, () => console.log("✅✅ http://localhost:" + PORT + " ✅✅"))