const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: String,
    email: String,
    passwordDigest: String,
    firstname: String,
    lastname: String
})

const User = mongoose.modelNames('users',UserSchema);
module.exports = User;