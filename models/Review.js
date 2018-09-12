const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    serviceId: String,
    businessId: String,
    reviewer: String,
    rating: Number,
    reviewDetails: String
})

module.exports = Review = mongoose.model('reviews', ReviewSchema);