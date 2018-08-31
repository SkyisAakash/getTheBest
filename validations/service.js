const isEmpty = require('./is-empty');
const Validator = require('validator');

module.exports = function validateServiceData(service) {
    let errors = {}
    data.title = !isEmpty(data.title) ? data.title : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.address = !isEmpty(data.address) ? data.address : '';
    data.price = !isEmpty(data.price) ? data.price : 0;

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required"
    } else if (!Validator.isLength(data.title, {min: 3, max: 30})) {
        errors.title = "Title should be 3-30 characters long"
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description is required"
    }

    if (validator.isEmpty(data.address)) {
        errors.validator = "Address field is required"
    }

    if (!validator.isNumeric(data.price, { no_symbols: true })) {
        errors.price = "Please enter numbers only"
    }
}