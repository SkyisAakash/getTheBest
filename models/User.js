const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String
})

const User = mongoose.model('users', UserSchema);
module.exports = User;