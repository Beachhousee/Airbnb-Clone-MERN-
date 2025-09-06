import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRouter from './route/auth.route.js';
dotenv.config();

let port=process.env.PORT;

let app=express();
app.use(express.json())
app.use(cookieParser());

  app.use('/api/auth',authRouter)


app.listen(port, ()=>{
   connectDB();  
  console.log("server is running ") ;
})