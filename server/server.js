const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")
const quizRoutes=require("./routes/quizRoutes")
const analysisRoutes=require("./routes/analysisRoutes")
const dashboardRoute=require("./routes/DashboardRoutes")
dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());


app.use("/auth",authRoutes);
app.use("/user",userRoutes);
app.use("/quiz",quizRoutes);
app.use("/analysis",analysisRoutes)
app.use("/dashboard",dashboardRoute)
// start server
const startServer=async () =>{
    try {
        await connectDB();
        const PORT=process.env.PORT;

        app.listen(PORT,()=>{
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error("failed to start server: ",error.message);
        process.exit(1)
    }
}

startServer();