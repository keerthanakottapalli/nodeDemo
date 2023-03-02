
const auth=require('./Authorization')
const {createPool}=require('mysql')
require('dotenv').config()
console.log(process.env.Host)

var pool=createPool({
    host:process.env.Host,
    user:process.env.User,
    password:process.env.Password,
    database:process.env.Database
})

// const connection=require('./dummy/orders')
var schema=require('./schema')
const express=require('express')
const app=express();
app.use(express.json())


app.get('/',auth,(req,res)=>
{
    pool.query("select *from restApis",(err,result)=>
    {
        if(err){
            res.send('error')
        }
        else{
            res.send(result)
        }
    })
    
})
app.post('/',schema,(req,res)=>
{
    const data=req.body
    // const data=['keerthi',req.params.id]
    // const data={id:2,name:'keerthana',age:22,language:'javascript'}
    pool.query("insert into restApis set ?",data,(err,result)=>
    {
        if(err){
            res.send('error')
        }
        else{
            res.send(result)
        }
    })
})
app.put('/:id',(req,res)=>
{
    // const data=[req.body.name,req.params.id]
     const data=['keerthana',req.params.id];
    pool.query("update restApis set name=? where id=?",data,(err,result)=>
     {
        if(err)
        {
            res.send('error')
        }
        else{
            res.send(result)
        }
     })
    })
app.delete('/:id',(req,res)=>
{
    // const emp_id=[req.params.id]
    let emp_id=req.params.id
    pool.query("delete from restApis where id = "+emp_id,(err,result)=>
    {
        if(err)
        {
            res.send('error')
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3500, ()=>console.log('listening'))
