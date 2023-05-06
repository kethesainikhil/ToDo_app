import mongoose from "mongoose";

export const connectDb = ()=> {
    mongoose.connect(process.env.MONGO_URI,{
    dbName: "backendApi"
})
.then(()=>{
console.log("database conncted")
})
.catch((e)=>{
    console.log(e);
})
}