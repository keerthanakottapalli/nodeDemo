const mysql=require('mysql')
const express=require('express')
const app=express()
app.use(express.json())
// const connection=mysql.createConnection({
//     host:"localhost",
//     user:'root',
//     password:'root',
//     database:'dummy'
// })
// connection.connect((err)=>
// {
//     if(err)console.log(err);
//     console.log("connected")
// })
module.exports=connection

var data=[{
    id:1,
    name:"vandana",
    department:"development",
    skill:"node.js"
},
{
    id:2,
    name:"hema",
    department:"development",
    skill:"node.js"
},
{
    id:3,
    name:"vineetha",
    department:"development",
    skill:"javascript"
},
{
    id:4,
    name:"barnbas",
    department:"development",
    skill:"angular"
},
{
    id:5,
    name:"chinna",
    department:"development",
    skill:"node.js"
}]

app.get('/api/details',(req,res)=>
{
    res.send(data)
})


app.post('/api/details',(req,res)=>
{
    data.push(req.body)
    res.sendStatus(201)
})


app.put('/api/details/:id',(req,res)=>
{
    var d=data.find(m=>m.id===parseInt(req.params.id))
    d.skill=req.body.skill
    res.send(d)
})


app.delete('/api/details/:id',(req,res)=>
{
    var a=data.find(c=>c.id===parseInt(req.params.id))
    var s=data.indexOf(a)
    data.splice(s,1)
    res.send(a)
})
app.listen(3000)