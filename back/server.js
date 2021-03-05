const express = require('express')
const path = require('path')
const cors = require('cors')
const formidable = require('express-formidable')
const mongoose = require('mongoose')

const app = express()

app.set('port', process.env.PORT || 4000)

app.use(cors())

app.use(formidable())
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use(require('./controller/api.js'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
})


app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
    require('./db_connection.js')
})