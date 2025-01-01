import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/bookingRoute.js';
import connectDB from './config/db.js';
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

app.use('/api/booking',routes);

let port = process.env.PORT || 8000  ;
app.listen(port ,()=>{
    connectDB();
    console.log(`Server is running on port ${port}`);
});