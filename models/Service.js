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
    category: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    business: String
})
ServiceSchema.pre('remove', function(removed){
    Review.find({_id: {$in: this.reviews}})
        .then(reviews => {
            reviews.forEach(review => review.remove())
        })
    removed();
})
module.exports = Service = mongoose.model('services', ServiceSchema);