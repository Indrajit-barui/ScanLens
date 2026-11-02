const express=require("express")
const router=express.Router()

const {analyzeMessage} =require("../controllers/analysisController")
const authMiddleware=require("../middleware/authMiddleware")
router.post("/analyze",authMiddleware,analyzeMessage)


module.exports=router