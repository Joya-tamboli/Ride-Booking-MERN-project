const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');




// ✅ Middleware to verify user token
module.exports.authUser = async (req, res, next) => {
    // Correct header split
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // ✅ Check if token is blacklisted
    const isBlackListed = await BlacklistToken.findOne({ token: token });
    if (isBlackListed) {
        return res.status(401).json({ message: 'Unauthorized: Token is blacklisted' });
    }

    try {
        // ✅ Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id); // match key used in JWT

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized: User not found' });
        }

        req.user = user;
        return next();
    } catch (err) {
        console.error('JWT verification error:', err);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

// ✅ Middleware to verify captain token
module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized: Captain not found' });
        }

        req.captain = captain;
        return next();
    } catch (err) {
        console.error('JWT verification error:', err);
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};
