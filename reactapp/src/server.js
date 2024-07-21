const express=require('express')
const cors =require('cors')
const mongoose=require('mongoose')
const url="mongodb://localhost:27017/loginData"
const app=express()
app.use(express.json());
app.use(cors())
//4mASr9dCUdG0zYWE
mongoose.connect(url)                            //connecting database 
const con=mongoose.connection        //taking connection instance into con
con.on('open',function(){                      //on is an event handler
    console.log("Database connected")
})
app.use(express.json())
const User =require('./model/users')
app.use(require('./routes/auth'))
app.listen(5000,() =>                  //connecting server 
{
    console.log("Server connected")
})    