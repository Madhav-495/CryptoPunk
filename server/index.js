// ----------------------------------------------requiring all express necessary modules ----------------
const express = require ( 'express' ) ;
const app = express () ;
const bodyParser = require ('body-parser') ;
const mongoose = require ( 'mongoose' ) ; 
const cors = require ( 'cors' )

mongoose.connect( 'mongodb://localhost:27017/CryptoPunk', 
{
    useNewUrlParser: true , useUnifiedTopology: true
})
.then( () => console.log ('Connected to MongoDB'))
.catch(err => console.log("error connecting to MongoDB:", err))

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors()) ;
// ----requiring signup route -----
const singupRoute = require ('./Routes/signup')
app.use( '/signup' , singupRoute )

// ------ending signup route -----

// -----starting up the login route
const loginRoute = require ('./Routes/login')
app.use('/login' , loginRoute ) 
// ----ending up the login route


const testRoute = require ('./Routes/test')
app.use( '/test' , testRoute )

const port = process.env.PORT || 4000
app.listen(port, function () {
    console.log("server is running on the port 4000 ");
})
// --------------------------------------------------------------------------------------------------------------------