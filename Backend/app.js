const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path : '.env'})
const pool = require('../Backend/database/con')
const router = require('./routes/index')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

const PORT = process.env.port || 3000

app.listen(PORT, () => console.log("✅✅ http://localhost:" + PORT + " ✅✅"))