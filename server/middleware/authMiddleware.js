const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Authentication required",
    });
  }

  // Extract the token
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store the user's ID in the request
    req.userId = decoded.userId;

    // Continue to the next middleware or route
    next();
} catch (error) {
  console.error("JWT Error:", error.message);

  return res.status(401).json({
    message: "Invalid or expired token",
  });
}
};

module.exports = authMiddleware;