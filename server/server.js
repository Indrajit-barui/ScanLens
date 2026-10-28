const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")

dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());


app.use("/auth",authRoutes)
app.use("/user",userRoutes);

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