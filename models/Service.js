const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    address: String,
    owner: String,
    averageRating: {
        type: Number,
        default: 0
    },
    category: String
})

module.exports = Service = mongoose.model('services', ServiceSchema);