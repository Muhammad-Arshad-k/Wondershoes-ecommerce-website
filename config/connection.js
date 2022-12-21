const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();

module.exports = {
    dbconnect:()=>{
         mongoose.connect(process.env.MONG_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
        .then(()=>{
            console.log("database connected successfully")
         })
         .catch((err)=>console.log("error"+err));
    }
};

