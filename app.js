import express from "express";
import mongoose from "mongoose";
import {config} from "dotenv"
import userRouter from "./routes/user.js"
import TaskRouter from "./routes/task.js"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { errorMiddleWare } from "./middlewares/error.js";

import cors from "cors";
export const app = express();

config({
    path:"./data/config.env",
})
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(bodyParser.urlencoded({extended:true}));
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(userRouter)
app.use(TaskRouter)


app.use(errorMiddleWare)












