const express=require('express')
const app=express()
const server=require('http').createServer(app)
// const port=process.env.PORT||3000


const socketio=require('socket.io')(server, {cors:{origin:"*"}})


app.set('view engine','ejs')

app.get('/home',(req,res)=>
{
    res.render('home')
})

server.listen(4000,()=>
{
    console.log('server running')
})
socketio.on('connection',(socket)=>
{
    console.log('user connected'+socket.id)
    socket.on('message',(data)=>
    {
       socket.broadcast.emit('message',data)
    })
})




// io.on('connection',(socket)=>
// {
//     console.log('new user connected');
//     socket.emit('newMessage',{
//         from:'vandana@123',
//         text:'hello',
//         createdAt:123
//     })
//     socket.on('createMessage',(newMsg)=>
// {
//     console.log('newMessage',newMsg);
// })
// socket.on('disconnect',()=>
// {
//     console.log('disconnected from user');
// })
// })
// server.listen(port)