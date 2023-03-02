var fs=require('fs')
var agent=require('superagent')
// fs.readFile('readfile2.txt','utf8',(err,data)=>
// {
//     if(err)console.log(err);
//     agent.get(`https://api.agify.io?name=${data}`,(err,data1)=>
//     {
//         if(err)console.log(err);
//         var s=data1._body.count
//         fs.writeFile('writefile2.txt',`${s}`,(err)=>
//         {
//             if(err)console.log(err);
//             console.log('success');
//         })
//     })
// })


// var fs=require('fs')
// var agent=require('superagent')
// fs.readFile('readfile2.txt','utf8',(err,data)=>
// {
//     if(err)console.log(err);
//     agent.get(`https://api.agify.io?name=${data}`).then((dat)=>
//     {
//         console.log(dat._body)
//     })
// })









const readProm= (fname, encoding)=>
{
    return new Promise((resolve, reject)=>
    {
        fs.readFile(fname,encoding,(err,data)=>{
            if(err)
            return reject(err)
            {
                resolve(data)
            }
        })
    })
}
readProm('readfile2.txt','utf8')
.then((data)=>
{
    console.log(data)
    return agent.get(`https://api.agify.io?name=${data}`)
    .then((info)=>
    {
        var d=info._body.count
        return writeProm('wtitefile2.txt',`${d}`)
        .then(()=>
        {
            console.log('success')
        })
    })
})
.catch(err=>
    {
        console.log(err)
    })


const writeProm = (filename, decoding)=>
{
    return new Promise((res, rej)=>
    {
        fs.writeFile(filename, decoding, (err, data)=>
        {
            if(err)
            return rej(err)
            {
                res(data)
            }
        })
    })
}