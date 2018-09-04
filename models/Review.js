const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new Schema({
    ServiceId: String,
    BusinessId: String,
    Reviewer: String,
    Rating: Number,
    ReviewDetails: String
})

module.exports = Review = mongoose.model('reviews', ReviewSchema);