const Score = require('../models/Score.js')
const sortList = require('./sort_list.js')

const getScores = async()=>{
    const ans = await Score.find()
    return sortList(ans)
}

const getScoreByGame = async(gameName)=>{
    const ans = await Score.find({game: gameName})
    return sortList(ans)
}

const saveScore = async({game, name, score})=>{
    const newScore = new Score({
        game,
        username: name,
        points: score
    })
    const ans = await newScore.save()
    return ans
}

module.exports = {
    getScoreByGame,
    saveScore,
    getScores
}