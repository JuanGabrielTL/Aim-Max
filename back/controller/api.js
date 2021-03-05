const express = require('express')
const path = require('path')
const Router = express.Router()

const {getScoreByGame, saveScore, getScores} = require('./controller.js')

Router.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '../index.html'))
})

Router.get('/scores',(req,res)=>{
    getScores()
    .then(data=>res.json({data}))
    .catch(err=>res.json({error:err}))
})

Router.get('/score', (req,res)=>{
    console.log('obteniendo', req.query.game)
    if(!req.query.game){
        let error = `Send a query with the game required. By example: /score?game=sonic.`
        res.json({error})
    }
    else{
        getScoreByGame(req.query.game)
        .then(data=>res.json({data}))
        .catch(err=>res.json({error:err}))
    }
})

Router.post('/score', (req, res)=>{
    console.log('guardando', req.fields)
    saveScore(req.fields)
    .then(data=>res.json({data}))
    .catch(err=>res.json({error:err}))
})

module.exports = Router