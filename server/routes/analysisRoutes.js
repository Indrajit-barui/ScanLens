const express=require("express")
const router=express.Router()

const {analyzeMessage,getAnalysisHistory} =require("../controllers/analysisController")
const authMiddleware=require("../middleware/authMiddleware")

router.post("/analyze",authMiddleware,analyzeMessage)
router.get("/history",authMiddleware,getAnalysisHistory)

module.exports=router