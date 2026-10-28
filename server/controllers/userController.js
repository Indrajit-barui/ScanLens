const User=require("../models/User");
const validator=require("validator")
const bcrypt=require("bcrypt")
const getUserProfile=async (req,res) => {
    try {
        const user=await User.findById(req.userId).select("-password");

        if(!user){
            return res.status(400).json({
                message:"User not found",
            })
        }

        return res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({
            message:"server error"
        })
        
    }
}

const updateUserProfile = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.userId,
      { name: name.trim() },
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error("Update profile error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


const updateEmail=async (req,res) => {

  try {
    const {newEmail,password}=req.body;
    // required filed
    if(!newEmail || !password){
      return res.status(400).json({
        message:"new Email and current password are required",
      })
    }
  const email=newEmail.trim().toLowerCase();
  // validata email format
    if(!validator.isEmail(email)){
      return res.status(400).json({
        message:"Plese enter a valid email address",
      })
    }

    // find user

    const user=await User.findById(req.userId).select("+password")
    if(!user){
      return res.status(404).json({
        message:"User not found"
      });
    }

    // Verify current password

    const isMatch=await bcrypt.compare(password,user.password);

    if(!isMatch){
      return res.status(400).json({
        message:"Current password is incorrect",
      })
    }

    // check whether email is exit or not

    const exitEmail=await User.findOne({email});
    if(exitEmail){
      return res.status(409).json({
        message:"This already registered"
      })
    }

    // update email

    user.email=email;
    await user.save();

    return res.status(200).json({
      message:"Email updated successfully"
    })
  } catch (error) {
    return res.status(500).json({
      message:"Server error"
    })
  }
  
}

const changePassword=async (req,res) => {
  try {
    const{currentPassword,newPassword}=req.body;

    // check required field

    if(!currentPassword || !newPassword){
      return res.status(400).json({
        message:"All fields are required",
      })
    }

    // validate new password
    // Check password strength
     if (!validator.isStrongPassword(newPassword)) {
       return res.status(400).json({
        message: "Password is not strong enough",
        });
}

    //find the logged in user

    const user=await User.findById(req.userId).select("+password");
    if(!user){
      return res.status(404).json({
        message:"User not found"
      })
    }

    // verify the current password

    const isMatch=await bcrypt.compare(currentPassword,user.password);
    if(!isMatch){
      return res.status(400).json({
        message:"Current password is incorrect"
      })
    }

    // unique password

    const isSamePassword=await bcrypt.compare(newPassword,user.password);

    if(isSamePassword){
      return res.status(400).json({
        message:"New password must be different from the current password",
      })
    }

    // hash the new password

    user.password=await bcrypt.hash(newPassword,10);
    await user.save();

    return res.status(200).json({
      message:"Password changed successfully",
    })
  } catch (error) {
    return res.status(500).json({
      message:"server error"
    })
  }
}

const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;

    // 1. Check if password is provided
    if (!password) {
      return res.status(400).json({
        message: "Password is required to delete your account",
      });
    }

    // 2. Find the logged-in user
    const user = await User.findById(req.userId).select("+password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // 3. Verify the current password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    // 4. Delete the account
    await User.findByIdAndDelete(req.userId);

    return res.status(200).json({
      message: "Account deleted successfully",
    });
  } catch (error) {
    console.error("Delete account error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};
module.exports={getUserProfile,updateUserProfile,updateEmail,changePassword,deleteAccount}