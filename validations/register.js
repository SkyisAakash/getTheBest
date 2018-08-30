const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
    data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    // console.log("--------------")
    console.log(Validator.isEmpty(data.email));
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = 'Firstname field is required';
    } else if (!Validator.isLength(data.firstname, { min: 2, max: 30 })) {
        errors.firstname = 'Firstname must be 2-30 characters long';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    } else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password field is required';
    } else if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}