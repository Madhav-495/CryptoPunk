const mongoose = require ('mongoose')
const bcrypt=require ('bcrypt');

// ----defining the schema----
const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phoneNum:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ],
    
})

// ----defining the pre method to save ------
UserSchema.pre ('save' , async function ( next ) {
    if( this.isModified ('password') ){
        this.password = await bcrypt.hash ( this.password , 10 ) ;
    }
    next () ;
})


module.exports = mongoose.model('Users', UserSchema )