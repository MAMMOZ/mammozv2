// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    key: String
});

module.exports = mongoose.model('User', userSchema);