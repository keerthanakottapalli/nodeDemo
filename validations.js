
var express=require('express')
const joi=require('joi')
const app= express()
app.use(express.json())
const data=require('./validate_data.js') 

const schema=joi.object({
    id:joi.number().integer().min(100),
    name:joi.string().max(20).required(),
    age:joi.number().integer().min(10),
})



app.get('/api/data',(req,res)=>
{
    
    res.send(data)
})

app.post('/api/data',(req,res)=>
{
    const{error,value}=schema.validate(req.body)
    if(error)
    {
        console.log(error);
        return res.send('invalid request...')
    }
    console.log(req.body) 
    data.push(req.body)
    res.send(201)
})
app.listen(8000,'172.17.12.142',()=>console.log('listening on http://172.17.12.142:8000/api/data'))