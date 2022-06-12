const mongoose = require('mongoose');

const GameSchema =  new mongoose.Schema({
    title: String,
    publisher: String,
    release_date: Date,
    genre: String,
    description: String,
    platform: String
},
{
    timestamps: true
});

module.exports = Game = mongoose.model('game', GameSchema);