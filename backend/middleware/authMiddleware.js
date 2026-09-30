// ===================================================
// Authentication Middleware
// ===================================================
// Verifies JWT token from Authorization header: Bearer <token>

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'User account no longer exists.'
        });
      }

      return next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Please login to continue.'
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Please login to continue.'
    });
  }
};

module.exports = { protect };
