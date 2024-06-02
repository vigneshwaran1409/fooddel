import mongoose from "mongoose"

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://fullstackvicky:958594@cluster0.hdnma3s.mongodb.net/food-del').then (()=>console.log("DB connected"));
}

