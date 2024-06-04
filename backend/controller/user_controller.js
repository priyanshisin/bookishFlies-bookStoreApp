import User from "../model/user_model.js"
import bcryptjs from "bcryptjs"


// signup from
export const signup = async (req,res)=> {
    try {
        //we will get fullname, email and password from body
        const {fullname,email,password} = req.body

        // now we'll check that is user already registered or not : to do so we use (find)
        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({message: "User already exists"})
        }
        const hashPassword =await bcryptjs.hash(password, 10);
        // if user doesnot exist then we will add new user
        const createdUser = new User({
            "fullname": fullname,
            "email": email,
           "password": hashPassword,
        })
        await createdUser.save()
        res.status(201).json({message: "User created succesfully", user: {
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        }})
    } catch (error) {
        console.log("Error : ", error.message)
        res.status(500).json({message: "Internal server error"})
    }
}

// Login Form
export const login = async(req,res)=> {
    try {
        const {email, password}= req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isMatch) {
            return res.status(400).json({message: "Invalid username or password"})
        } else {
            res.status(200).json({message: "Login successfully", user: {
                _id: user._id,
                fullname: user.fullname, 
                email: user.email
            }})
        }
    } catch (error) {
        console.log("Error: ",error.message)
        res.status(500).json({message: "Internal Server error"})
    }
}