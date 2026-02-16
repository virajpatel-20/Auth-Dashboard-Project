const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async(req,res)=>{

 const hash = await bcrypt.hash(req.body.password,10);

 const user = new User({
  name:req.body.name,
  email:req.body.email,
  password:hash
 });

 await user.save();

 res.json("Registered");

});

router.post("/login", async(req,res)=>{

 const user = await User.findOne({email:req.body.email});

 if(!user){
  return res.status(400).json("User not found");
 }

 const valid = await bcrypt.compare(req.body.password,user.password);

 if(!valid){
  return res.status(400).json("Wrong password");
 }

 const token = jwt.sign({id:user._id},"secretkey");

 res.json({token});

});

module.exports = router;
