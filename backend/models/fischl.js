// models/fischl.js
const mongoose = require('mongoose');

const fischlSchema = new mongoose.Schema({
    key: String,
    bot: String,
    gold: Number,
    enchantrelic: Number,
    boom: Number,
    rod: String,
    map: Number,
    status: Number
});

module.exports = mongoose.model('Fischl', fischlSchema);