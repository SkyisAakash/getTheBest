const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String
    },
    password: { type: String },
    firstname: { type: String },
    lastname: { type: String }
})

const User = mongoose.model('users', UserSchema);
module.exports = User;