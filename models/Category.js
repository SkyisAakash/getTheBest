const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    title: String,
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'services'
    }],
    image: String
})

module.exports = Category = mongoose.model('categories', CategorySchema);