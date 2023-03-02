const EventEmitter= require('events')
const http=require('http')
const fs=require('fs')

// let c=fs.readFileSync('file.txt','utf8')
// console.log(c)
// fs.readFile('file.txt','utf8',(err,data)=>
// {
//     if(err)console.log(err)
//     console.log(data)
// }) 
// console.log('something')




class Emitter extends EventEmitter{
    constructor(){
        super()
    }
}
 
const event=new Emitter()
event.on('order',()=>
{
    console.log("order placed")
})
event.on('order',(data)=>
{
    console.log('order placed' ,data)
})
event.emit('order','keerthana')




const server= http.createServer()
server.on('httpevent', ()=>
{
    console.log('event listening')
})
server.listen(3000,()=>
{
    console.log('listening')
})
