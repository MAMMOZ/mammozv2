// models/swap.js
const mongoose = require('mongoose');

const swapSchema = new mongoose.Schema({
    key: String,
    bot: String,
    cookie: String,
    status: Number
});

module.exports = mongoose.model('Swap', swapSchema);