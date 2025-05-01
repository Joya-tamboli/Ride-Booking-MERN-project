const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

// Register User
module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    console.log('Request body:', req.body);

    const { fullname, email, password } = req.body;

    try {
        const isUserAlready = await userModel.findOne({ email });

        if (isUserAlready) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create user using userService
        const newUser = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password
        });

        const token = newUser.generateAuthToken(); // Ensure this method exists in user model

        res.status(201).json({ token, user: newUser });
    } catch (err) {
        console.error('Error during user registration:', err);
        next(err);
    }
};

// Login User
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateAuthToken(); // Ensure this method exists in user model

        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ token, user });
    } catch (err) {
        next(err);
    }
};

// Get User Profile
module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user);
};

// Logout User
module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');

    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.status(200).json({ message: 'Logged Out' });
};
