const express = require ( 'express' ) ;
const router = express.Router () ;
const Users = require ('../Models/Users')
// -----Writing logic of signup apis that route would hold ------
// ---logic for the post request 
router.post ('/' , async ( req , res ) => {
    const Userdata = await Users.findOne ({email:req.body.email}) ;
    if ( Userdata )
    {
        return res.status (400).json({
            success:false,
            message:"user already exists"
        })
    }
    else 
    {
        const userdata=new Users({
            Name:req.body.name,
            email:req.body.email,
            password:req.body.passwd,
            phoneNum:req.body.phnum,
        })
        try {
            await userdata.save();
            console.log('Model saved successfully.');
          } catch (error) {
            console.error('Error saving model:', error);
        }
    }
})
//  -----Writing logic of signup apis that route would hold ------
module.exports = router ;