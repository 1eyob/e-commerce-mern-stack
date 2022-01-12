const User = require("../models/User");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();
   

router.put("/:id", verifyTokenAndAuthorization, async (req,res)=>{

    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }
    try{
   const updatedUser = await User.findByIdAndUpdate(req.params.id,{
       $set:req.body
   },{new:true})

   res.status(200).json(updatedUser);
    }
    catch(err){
  res.status(500).json(err);
    }
} )
//delete
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
    await User.findByIdAndDelete(rew.params.id);
    res.status(200).json("user deleted successfully");
    }
    catch(err){
        res.status(500).json(err);
    }


})
//get user 

router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
   const user =  await User.findById(req.params.id);
    res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }


})

//get all users
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
   const users =  await User.find(req.params.id);
    res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }


})

//get user stats

router.get("/stats", verifyTokenAndAdmin, async (req,res)=>{
const date =new Date();
const lastYear= new Date(date.setFullYear(date.getFullYear() -1));
try{
  const data = await User.aggregate([

  {$match: {createdAt: {$gte : lastYear}}},
  {
      $project:{
          month:{$month: "$createdAt"}
      }
  },
  {
 $group:{
     _id:"$month",
     total:{$sum:1}
 }

  }



  ]);
res.status(200).json(data);
}
catch(err){
    res.status(500).json(err);
}

    
})


module.exports= router;