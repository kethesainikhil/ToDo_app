import {User} from "../models/user.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { isAuthenticated } from "../middlewares/auth.js";
import { getCookie } from "../utils/features.js";
import errorHandler from "../middlewares/error.js";
export const createNewUser = async (req,res)=>{
    const {name,email,password} = req.body;
    let user = await User.findOne({email})
    if(user){
        res.status(404).json({
            success:false,
            message:"user already exisits"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10)
    user = User.create({
        name,email,password:hashedPassword
    })
    getCookie(res,user,201,"registered succesffullly");
}

export const loginUser = async (req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email}).select(+password);
    if(!user){
        return res.
        status(404).
        json({
            success:false,
            message:"invalid email or password"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.
        status(404).
        json({
            success:false,
            message:"invalid email or password"
        })
    }

    return getCookie(res,user,200,`welcome back ${user.name}`)


}


export const getMyProfile = async (req,res,next)=>{
    const {token} =  req.cookies;
    if(!token) {
        return next(new errorHandler())
    }

    const decoded = jwt.verify(token,process.env.SECRET_TOKEN)
    const user = await User.findById(decoded._id)
    res.json({
        success:true,
        user,
    })
}
export const  logoutUser = async (req,res)=>{
    res.cookie("token","",{
        expires:new Date(Date.now())
    }).json({
        success:true
    })   
}

