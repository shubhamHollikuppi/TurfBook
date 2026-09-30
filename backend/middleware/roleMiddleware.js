// ===================================================
// Role-Based Authorization Middleware
// ===================================================
// Enforces that only authorized roles (player / owner) access specific endpoints.

const requireRole = (role) => {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).json({
        success: false,
        message: "You don't have permission to access this page."
      });
    }
    next();
  };
};

module.exports = {
  isPlayer: requireRole('player'),
  isOwner: requireRole('owner')
};
