const express = require("express");
const {
getUserProfile,
updateUserProfile,
updateEmail,
changePassword,
deleteAccount
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get user profile
router.get("/profile", authMiddleware, getUserProfile);

// Update user 
router.put("/profile", authMiddleware, updateUserProfile);
router.put("/update-email",authMiddleware,updateEmail)
router.put("/change-password",authMiddleware,changePassword);
router.delete("/delete-accouont",authMiddleware,deleteAccount)

module.exports = router;