
const express= require('express');
const port= 5000;
const app= express();
const db= require('./config/mongoose');
const config= require('dotenv').config();
app.use(express.urlencoded());

//setting up the routes
app.use('/',require('./routes'));

//firing up the server
app.listen(port, function(err){
    if(err)
    {
        console.log(`Error in running the server:${err}`)
        return;
    }
    console.log(`Server is running on the port:${port}`)
    
})