const express= require('express')
const app=express()
app.use(express.json())
const { authpage, authdata}=require('./auth_middleware')

const data=require('./validate_data.js') 
app.get('/infos', authpage(['vandana','admin']), (req,res)=>
{
    res.json(data)
})
app.listen(2000, ()=>
{
    console.log('server running on 2000 port')
})