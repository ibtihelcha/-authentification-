const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  fullname:String,
  email: String,
  password: String,
});
const usermodel = mongoose.model("users", userschema);
module.exports = usermodel;
//const usermodel=mongoose.mosel("users",userschema)
//module.exports=usermodel