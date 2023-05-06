import { isAuthenticated } from "../middlewares/auth.js";
import {Task} from "../models/task.js"
export const addTask = async (req,res,next)=>{
    const {title , description} = req.body;

    const tasks = await Task.create({
        title,
        description,
        user:req.user
    })

    res.status(201).json({
        success:true,
        message:"successfully added task"
    })
}


export const getTasks = async (req,res) =>{
    const userid = req.user._id
    const  tasks = await Task.find({user:userid})
    res.json({
        tasks
    })
    }
export const updateTask  = async (req,res,next) =>{
    try{
        const { id } = req.params;
        const task = await Task.findById(id);
        task.user = req.user;
        const val = task.isCompleted;
        task.isCompleted = !val;
        await task.save();
        return res.json({
            success:true,
            message:"sucesffuly  updated"
    })
    }
    catch(err){
        console.log(err);
    }
}
export const deleteTask = (req,res) =>{
    return res.json({
        success:true,
        message:"successfully deleted"
    })
}