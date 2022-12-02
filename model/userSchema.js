const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim : true
    },
    phone:{
        type:Number,
        trim: true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        trim :true
    },
    isBlocked:{
        type:Boolean,
        default:false
    }
})
 
module.exports = mongoose.model('User',userSchema)