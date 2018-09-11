const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BusinessSchema = new Schema({
    title: String,
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'services'
    }],
    address: String,
    owner: Schema.Types.ObjectId,
    businessHoursStart: Date,
    businessHoursEnd: Date,
    reviews: [],
    rating: []
})
module.exports = Business = mongoose.model('businesses', BusinessSchema);