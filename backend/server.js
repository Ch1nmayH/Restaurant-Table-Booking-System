import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Configuring the .env file
dotenv.config();

const app= express();

//MiddleWares
app.use(cors(({
    origin: process.env.CORS_ORIGIN
})));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend");
})
let port = process.env.PORT || 8000  ;
app.listen(port ,()=>{
    console.log(`Server is running on port ${port}`);
});