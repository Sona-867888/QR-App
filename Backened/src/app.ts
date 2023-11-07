import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// import {router} from 'routes/routes.ts'
import router from './routes/user.routes';



const app = express(); 

app.use(cors({
  credentials:true,
  // origin:['http://localhost:4200']
}))
app.use(cookieParser())

app.use(express.json());
app.use("/api",router)
const mongoURI = 'mongodb://localhost:27017/db';
mongoose.connect('mongodb+srv://srivastavassonali:vhn2grlXLmnsIHrr@cluster0.cgaubma.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
   
  }) 
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  const port=process.env.port||3000;

app.listen(3000, () => {
  console.log("listen port on:"+ port);
});



