const nodemailer  = require('nodemailer');

module.exports={
    mailTransport:nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:'wonderstories8935@gmail.com',
            pass:'gdwuwyrrdkpyirye'
        }
    }),
    OTP : '${Math.floor(1000+Math.random()*90000}'
}