import jwt from "jsonwebtoken"
export const getCookie = async (res,user,statusCode,message)=>{
    const token =  jwt.sign({_id : user._id},process.env.SECRET_TOKEN)
    res.
    status(statusCode).
    cookie("token",token,{
        http:true,
        maxAge:15*60*1000,
        sameSite:"none",
        secure:true
    }).json({
        success:true,
        message,

    })

}