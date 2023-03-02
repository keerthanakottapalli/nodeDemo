var express=require('express')
const  app=express()
// const auth=require('./Authorization')
const joi=require('joi')
app.use(express.json())



// const app= express()

const schema=joi.object({
    id:joi.number().integer().max(100),
    name:joi.string().max(20).required(),
    age:joi.number().integer().min(10),
    language:joi.string().max(10).required()
})
app.get('/',(req,res)=>
{
    res.send('hello....hiii..') 
})
const data=require('./data.js') 
app.get('/api/data',(req,res)=>
{
    res.send(data)
})

app.get('/api/data/:id',(req, res)=>
{
    var d=data.find(c=>c.id===parseInt(req.params.id))
    res.send(d)
    
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
app.delete('/api/data/:id',(req, res)=>
{
    var d=data.find(c=>c.id===parseInt(req.params.id))
    const index = data.indexOf(d);
    data.splice(index,1);
    res.send(d);
    
})
app.put('/api/data/:id',(req, res)=>
{
    var d=data.find(c=>c.id===parseInt(req.params.id))
    d.language = req.body.language;
    d.name=req.body.name;
    res.send(d);
    
})

app.listen(3000,'172.17.12.142',()=>console.log('listening on http://172.17.12.142:3000/api/data/:id'))
