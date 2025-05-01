const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const BlacklistToken = require('../models/blacklistToken.model');

router.post(
  '/register',
  [
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
    body('fullname.lastname').notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  userController.registerUser
);

router.get('/logout', authMiddleware.authUser, async (req, res) => {
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'Token missing' });
  }

  // Add token to blacklist
  await BlacklistToken.create({ token });

  // Optional: clear cookie if you're storing it in cookies
  res.clearCookie('token');

  return res.status(200).json({ message: 'Logout successful' });
});



router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
  userController.loginUser
);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);
router.get('/logout', authMiddleware.authUser, userController.loginUser);

module.exports = router;