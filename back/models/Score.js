const { Schema, model } = require('mongoose')

const ScoreSchema = new Schema({
    game: {
        type: String,
        required: true
    },
    username:{
        type:  String,
        required: true
    },
    points:{
        type:  Number,
        required: true
    }
})

module.exports = model('Score',ScoreSchema)