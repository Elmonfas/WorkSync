const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path : '.env'})
const app = express()

app.get('/', (req, res) => {
    res.json({ok : true})
})

const PORT = process.env.port || 3000

app.listen(PORT, () => console.log("✅✅ http://localhost:" + PORT + " ✅✅"))