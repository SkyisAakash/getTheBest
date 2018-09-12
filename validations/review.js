const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateReview(data) {
    let errors = {};
    data.rating = !isEmpty(data.rating) ? data.rating : '';
    if (Validator.isEmpty(data.rating)) {
        errors.rating = 'Minimum rating is one star';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}