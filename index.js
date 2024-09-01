import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import userRouter from './Router/userRouter.js';
import connectDB from './database/dbConfig.js';

const app = express();
app.use(express.json());
app.use(cors()); 

//http:localhost:4000
const port=process.env.PORT;
connectDB()
app.get("/",(req,res)=>{
    console.log("APP is working fine")
    res.send("APP is working fine");
})


//http://localhost:4000/api/user
app.use("/api/user",userRouter)




app.listen(port,()=>{
    console.log(`port is listening on the port, ${port}`)
})