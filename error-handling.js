const express=require('express')
const app=express()
const getUser = ()=>undefined
app.get('/', async(req,res)=>
{
    try{
        const user=getUser()
    if(!user)
    {
        throw new error('user not found')
    }
    }catch(error)
    {
        console.log(error);
        return res.status(400).send(error.message)
    }
    return res.status(200).json({success : true})
})

app.listen(6000, ()=>
{
    console.log("the server is listening on 6000 port")
})
