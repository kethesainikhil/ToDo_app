import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
export const isAuthenticated = async (req,res,next)=>{
    const {token} =  req.cookies;
    if(!token){
        return next(new Error("in valid"))
    }

    const decoded = jwt.verify(token,process.env.SECRET_TOKEN);
    req.user = await User.findById(decoded._id);
    next();
}