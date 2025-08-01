const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    mobile: { type: String, unique: true, required: true },
    password: String
});

module.exports = mongoose.model('User', userSchema);