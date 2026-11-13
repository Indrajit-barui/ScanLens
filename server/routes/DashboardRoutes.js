const express=require("express")
const router=express.Router();

const authmiddleware=require("../middleware/authMiddleware")
const {getDashboardStats} =require("../controllers/dashboardController")

router.get("/stats",authmiddleware,getDashboardStats)

module.exports=router