const { body } = require("express-validator/check");

exports.validateCreateUser = [
    body('id', 'ID should be an integer and is required').isInt().exists(), 
    body('name', 'name should have only alphabets and is required').isAlpha().exists(),
    body('password', 'password should be alphaNumaric and above 8 characters and is required').isAlphanumeric().exists().isLength({min: 8})
];

