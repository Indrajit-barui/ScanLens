
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const validator=require("validator")

// Register a new user

const registerUser=async (req,res) => {
    try {
          const {name,email,password}=req.body;
          if(!validator.isEmail(email)){
            return res.status(400).json({
                message:"Please enter a valid email"
            })
          }

          if(!validator.isStrongPassword(password)){
            return res.status(400).json({
                message:"Password is not strong enough"
            })
          }

    // exit user
    const exitUser=await User.findOne({email});
    if(exitUser){
        return res.status(400).json({
            message:"Email already registered",
        })
    }

    const hashedPassword=await bcrypt.hash(password,10);

    // new user

    const newUser=await User.create({
        name,
        email,
        password:hashedPassword
    })
    const token = jwt.sign(
    { userId: newUser._id },
      process.env.JWT_SECRET,
    { expiresIn: "1d" }
     );
    return res.status(201).json({
        message:"Account created successfully",token
    })
    } catch (error) {
        console.log("Registration error:",error)
        return res.status(500).json({
            message:"Server error fuckkk"
        })
    }
  
}

const loginUser=async(req,res)=>{
    try {
       const {email,password}=req.body;
if (!email || !password) {
  return res.status(400).json({
    message: "Email and password are required",
  });
}
       
const user = await User.findOne({ email }).select("+password");

if (!user) {
  return res.status(401).json({
    message: "Invalid email or password",
  });
}

       const isPasswordCorrect=await bcrypt.compare(
        password,
        user.password
       )

       if(!isPasswordCorrect){
        return res.status(401).json({
            message:"Invalid email or password"
        })
       }

       const token=jwt.sign({userId:user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
       )

       res.status(200).json({
        message:"Login successful",token
       })

    } catch (error) {
        console.log("Login error:",error)
        return res.status(500).json({
            message:"Server error",
        })
    }
}

module.exports ={registerUser,loginUser}