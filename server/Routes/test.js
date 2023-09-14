const express = require ('express') ;
const router = express.Router () ;
const { spawn } = require('child_process');

router.post ( '/' , async ( req , res ) => { 
    const {fileData} = req.body;
    const pythonProcess = spawn('python', ['aadhar_verify.py']);
    pythonProcess.stdin.write(fileData);
    pythonProcess.stdin.end();
    let pythonOutput = ''
    pythonProcess.stdout.on('data', (data) => {
        pythonOutput += data.toString();
    });
      pythonProcess.stderr.on('data', (data) => {
        console.error(`Error from Python Script: ${data.toString()}`);
    });
      pythonProcess.on('close', (code) => {
        console.log(`Python Script Exited with code ${code}`);
        console.log(pythonOutput)
        // res.send({ output: pythonOutput }); 
        return res.status (200).json({
          success:true,
          message:pythonOutput
      })
    });
})
module.exports = router 