const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBusinessInput(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : '';
    data.address = !isEmpty(data.address) ? data.address : '';

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    } else if (!Validator.isLength(data.title, {min: 2, max: 30})) {
        errors.title = 'Title must be between 3-30 characters long'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
