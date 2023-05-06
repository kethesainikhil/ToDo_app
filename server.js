import { app } from "./app.js";
import { connectDb } from "./data/database.js"


app.listen(process.env.PORT,()=>{
    console.log("server is working",process.env.PORT)
})
connectDb();