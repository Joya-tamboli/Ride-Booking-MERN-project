const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !lastname || !email || !password) {
        throw new Error('All fields are required');
    }

    // Create new user instance
    const user = new userModel({
        fullname: { firstname, lastname },
        email
    });

    // Hash the password before saving
    user.password = await user.hashPassword(password);

    await user.save(); // Save user in DB

    return user;
};
