const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users');

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model("user", userSchema);