var express = require('express');
var router = express.Router();
const user=require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/name', async (req,res)=> {
  const User = new user ({
    name: req.body.name,
    FullName:req.body.FullName,
    Phone:req.body.Phone
  })
  try {
    const newUser = await User.save();
    res.send("user added");
  }catch{
    res.send("user not added");
  }
  //res.status(200).send(req.body.name);
});
router.get('/findAll',async(req,res,next)=>{

  try{
    const users =await user.find({})
    res.send({users:users})

  }catch{
    res.send("no user found")
  }
});
router.get('/find/:id', async(req, res) =>{
  try{
    const users =await user.findById(req.params.id)
    res.send({users:users})

  }catch{
    res.send("no user found")
  }
  
});
router.delete('/delete/:name', async(req, res) => {
  try {
   
   await user.deleteOne({name:req.params.name})
    .then(result => {
      if(result.deletedCount === 0){
       return res.send("no user with name "+req.params.name+" found")
      }
    })
    res.send("user deleted")
  } catch (err){
    res.send(err)
  }
  
});
router.put('/update/:name', async (req,res)=> {
  try {
    filter = { name : req.params.name }
    update = { 
      name : req.body.name,
      phone : req.body.phone
     }
    await user.findOneAndUpdate(filter,update, {
      new : true
    })
    res.send("User updated succesfully")
  } catch {
    res.send("no user found")
  }
});
module.exports = router;
