const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true,
        },
        last_name:{
            type:String,
            trim:true,
        },
        email:{
            type:String,
            trim:true,
        },
        Phoneno:{
            type:Number,
            trim:true,
        },
    },
    {
        timesstamps:true,
        versionKey:false,
    }
);

const User = mongoose.model('user',userSchema);
module.exports=User;
