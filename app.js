//mongodb create schema and model in express
const mongoose = require("mongoose");

//schma define
const mystudentSchema=new mongoose.Schema({
  name:String,
  age:Number,
  city:String
})
//model creation
const Dbmodel= new mongoose.model('Stdtable',mystudentSchema)




