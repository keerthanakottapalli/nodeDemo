const express=require('express')
const jwt =require('jsonwebtoken')
const app=express()
const Authorization=require('./middleware')
const config=require('./config')
const port = process.env.port || 5000


// const data=require('./data.js') 
app.get('/token',(req,res)=>
{
    const data={
        name:'vandana',
        age:22,
        scopes:["data:read"]

    }
    // res.send(data)

    const token=jwt.sign(data, config.JWT_SECRET)
    res.send(token)
})


app.get('/data',Authorization("data:read") ,(req,res)=>
{
    res.send('hello data')
});



const server=app.listen(port ,()=>
{
    console.log(`server is listening on ${server.address().port}`)
})
