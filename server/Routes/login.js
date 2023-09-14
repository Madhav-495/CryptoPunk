const express = require ('express') 
const router = express.Router() ;
const bcrypt=require('bcrypt');
const Users = require ('../Models/Users')
router.post('/', async (req,res) =>{
    const Userdata = await Users.findOne ({email:req.body.email}) ;
    console.log(Userdata)
    if ( Userdata )
    {
        const checkpassword=await bcrypt.compare(req.body.password,Userdata.password);
        if (!checkpassword)
        {
            // password is not correct 
            return res.status (400).json({
                success:false,
                message:"Password is not correct"
            })
        }
        else
        {
            console.log("User successfully loggedin")
            //  code for jwt and generation of auth token starts


            // code for jwt and generation of auth token ends
            res.redirect('/dashboard');
        }
    }
    else 
    {
        // user is not registered with us 
        return res.status (400).json({
            success:false,
            message:"User does not  exists"
        })
    }
})


module.exports = router 