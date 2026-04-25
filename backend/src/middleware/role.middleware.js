const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    try {
      // req.user comes from auth middleware
      const userRole = req.user.role;

      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          success: false,
          message: "Access forbidden: insufficient permissions",
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Role validation failed",
      });
    }
  };
};

module.exports = roleMiddleware;
