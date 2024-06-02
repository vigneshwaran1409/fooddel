import foodModel from "../models/foodmodel.js";
import fs from 'fs'


//add food item
const addFood = async (req,res)=>{

let image_filename = `${req.file.filename}`;
 console.log(req.body)

 const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    categoy:req.body.categoy,
    image:image_filename
 })
 try{
    await food.save();
    res.json({success:true,message:"FoodAdded"})
 }catch (error){
    console.log(error)
    res.json({success:false,message:"error"})
 }

}

//all food list
const listFood = async(req,res)=>{
   try{
      const foods=await foodModel.find({})
      res.json({sucess:true,data:foods})
   }catch(error){
      console.log(error);
      res.json({success:false,message:"error"})
   }
}

//remove food item
const removeFood = async(req,res)=>{
   try{
      const food = await foodModel.findById(req.body.id);
      fs.unlink(`uploads/${food.image}`,()=>{})

      await foodModel.findByIdAndDelete(req.body.id);
      res.json({success:true,message:"FoodRemoved"})
   } catch(error){
      console.log(error);
      res.json({success:false,message:"error"})
   }
}

export {addFood,listFood,removeFood}

