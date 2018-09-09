const isEmpty = require('./is-empty');
const Validator = require('validator');

module.exports = function validateServiceData(service) {
    let errors = {}
    service.title = !isEmpty(service.title) ? service.title : '';
    service.description = !isEmpty(service.description) ? service.description : '';
    service.address = !isEmpty(service.address) ? service.address : '';
    service.price = !isEmpty(service.price) ? service.price+'' : '0';

    if (Validator.isEmpty(service.title)) {
        errors.title = "Title field is required"
    } else if (!Validator.isLength(service.title, {min: 3, max: 30})) {
        errors.title = "Title should be 3-30 characters long"
    }

    if (Validator.isEmpty(service.description)) {
        errors.description = "Description is required"
    }

    if (Validator.isEmpty(service.address)) {
        errors.validator = "Address field is required"
    }

    if (!Validator.isNumeric(service.price, { no_symbols: true })) {
        errors.price = "Please enter numbers only"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}