
import mongoose from "mongoose"
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        unique:true,
        type : String,
        required:true
    },
    password:{
        unique:true,
        type : String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
export const User = mongoose.model("user",schema)