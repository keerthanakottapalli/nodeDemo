const cron =require('node-cron')



const connection=require('./dummy/orders')
// var schema=require('./schema')
const express=require('express')
const app=express();
app.use(express.json())


app.get('/',(req,res)=>
{
    connection.query("select *from restApis",(err,result)=>
    {
        if(err){
            res.send('error')
        }
        else{
            res.send(result)
        }
    })
    
})
app.post('/',(req,res)=>
{

    // const{error,value}=schema.validate(req.body)
    // if(error)
    // {
    //     console.log(error);
    //     return res.send('invalid request...')
    // }
    const data=req.body
    // const data=['keerthi',req.params.id]
    // const data={id:2,name:'keerthana',age:22,language:'javascript'}
    connection.query("insert into restApis set ?",data,(err,result)=>
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
    const data=[req.body.name,req.params.id]
    //  const data=['keerthana',req.params.id];
     connection.query("update restApis set name=? where id=?",data,(err,result)=>
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
    connection.query("delete from restApis where id = "+emp_id,(err,result)=>
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

app.listen(4000)





// // connection.connect((err)=>
// // {
// //     if(err)console.log(err)
// //     console.log("successfully")
// // })
// var data=cron.schedule('*/1 * * * * *',()=>
// {
//     var s=connection.query('select * from orders')
//     console.log(s)
    
// })
// data.stop();



















// const demo=require('./demo.js')
// console.log(demo.name)
// console.log(demo.sum(23,19))

// const fs=require('fs')
// fs.readFile('C:\\Users\\vkottapalli\\nodeDemo\\file.txt','utf8',(err,data)=>
// {
//     if(err)console.log(err)
//     console.log(data)
// })
// var sync=fs.readFileSync('C:\\Users\\vkottapalli\\nodeDemo\\file.txt','utf8')
// console.log(sync)
// require('./demo')
// require('./sample')
// fs.writeFile('C:\\Users\\vkottapalli\\nodeDemo\\file.txt',"hello write file",(err)=>
// {
//     if(err)console.log(err)
//     console.log('file written successfully')
// })