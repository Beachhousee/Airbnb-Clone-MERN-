import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRouter from './route/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

let port=process.env.PORT;

let app=express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin:'http://localhost:5173',
  credentials:true
}))

  app.use('/api/auth',authRouter)


app.listen(port, ()=>{
   connectDB();  
  console.log("server is running ") ;
})