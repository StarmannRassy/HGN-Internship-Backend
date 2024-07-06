const express = require('express')
require("dotenv").config();

const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`)
})