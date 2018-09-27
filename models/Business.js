const mongoose = require('mongoose');
const Service = require('./Service');
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
BusinessSchema.pre('remove', function(removed){
    Service.find({_id: {$in: this.services}})
    .then(services => {
        services.forEach(service => service.remove())
    })
    removed();
})
module.exports = Business = mongoose.model('businesses', BusinessSchema);