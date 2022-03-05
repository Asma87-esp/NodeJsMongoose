const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    FullName:{
        type:String,
        required:true
    },
   Phone:{
        type:Number,
        required:true
   }
})
module.exports=mongoose.model('user',userSchema);