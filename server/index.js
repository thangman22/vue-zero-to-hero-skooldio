const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var rank = 1
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/register', (req, res) => {
    if (req.body.name && req.body.email) {
        console.log(`Rank ${rank}`, req.body)
        res.status(200).json({ status: 'success' })
        rank++
    } else {
        res.status(400).json({ status: 'fail' })
    }
    

})

app.listen(3333)