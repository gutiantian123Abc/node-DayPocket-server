var mongoose = require('mongoose');

var User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        trim: true,
        min_length: 1
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min_length: 1
    },
    first_name: {
        type: String,
        required: false,
        trim: true,
        min_length: 1
    },
    last_name: {
        type: String,
        required: false,
        trim: true,
        min_length: 1
    },
    email: {
        type: String,
        required: false,
        trim: true,
        min_length: 1
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    job: {
        type: String,
        required: false
    },
    income: {
        type: Number,
        required: false
    },
    PayPal_account_number: {
        type: String,
        required: false
    },
    ssn: {
        type: String,
        required: false,
        trim: true,
        min_length: 1
    },
    passport_number: {
        type: String,
        required: false,
        trim: true,
        min_length: 1
    },
    borrow_balance: {
        type: Number,
        required: false
    },
    borrow_credit_line: {
        type: Number,
        required: false
    },
    invest_balance: {
        type: Number,
        required: false
    },
    credit_score: {
        type: Number,
        required: false
    }
});

module.exports = {User}