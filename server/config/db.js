const mongoose=require("mongoose");

const connectDb=async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongoDB connected successfully!");

    } catch (error) {
        console.error("mongoDB connection faild",error.message);
        process.exit(1);
    }
}

module.exports=connectDb;