// models/swap.js
const mongoose = require('mongoose');

const SwapSchema = new mongoose.Schema({
    key: String,
    pc: String,
    bot: String,
    cookie: String,
    map: Number,
    status: Number
});

const Swap = mongoose.model('Swap', SwapSchema);

module.exports = { Swap };
