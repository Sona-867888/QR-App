import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// import {router} from 'routes/routes.ts'
import router from './routes/user.routes';
import multer from 'multer';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() + '-' + file); 
  }
});

const upload = multer({ dest: 'uploads/' })

const app = express(); 



app.use(cors({
  credentials:true,
  // origin:['http://localhost:4200']
}))

app.use(express.urlencoded({extended:false}));

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


  // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


  app.post('/upload',upload.single('images'),(req, res) =>{
    // console.log("upload")
    console.log(req)
    // console.log(req.body)  
 });

  const port=process.env.port||3000;

app.listen(3000, () => {
  console.log("listen port on:"+ port);
});



