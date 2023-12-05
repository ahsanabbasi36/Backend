import mongoose from "mongoose";
 
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected! `);
    } catch (error) {
        console.log("MongoDB connection error",error);
        process.exit(1)
    }
}
export default connectDB;


//taking a file separtly in db folder(writing and importing code from there and then execute it)


/* First approach
import express from 'express'
const app =express();
 ;( async()=>{

try {
   await mongoose.connect.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
    app.on("error",()=>{
        console.log("ERROR",error);
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
} catch (error) {
     console.log("ERROR",error);
     throw err
}
})
*/
