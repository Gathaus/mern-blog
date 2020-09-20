const bcrypt = require("bcryptjs");

const validateUserInput = (name, password) => {
    return name && password;

};

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
    validateUserInput,
    comparePassword
};