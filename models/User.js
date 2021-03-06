const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: String,
    password: String,
    firstname: String,
    lastname: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'services'
    }],
    image: "",
    businesses: [{
        type: Schema.Types.ObjectId,
        ref: 'businesses'
    }]
})

const User = mongoose.model('users', UserSchema);
module.exports = User;