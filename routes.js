const http=require('http')
const server =http.createServer((request,response)=>
{
    let path=request.url
    // response.end(path)
    if(path === '/' || path.toLocaleLowerCase() === '/home')
    {
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header':'hello'
        })
        
        response.end('you are in home page')
    }
    else if(path.toLocaleLowerCase() === '/about'){
        response.writeHead(200)
        response.end('you are in about page')
    }
    else{
        response.writeHead(404)
        response.end('Error 404: Page Not Found')
    }
})
server.listen(3000,()=>
{
    console.log('server has started')
})