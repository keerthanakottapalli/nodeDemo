const fs=require('fs')
const superagent = require('superagent'); 





// async function async()
// {
//     try{
//     var readasync=await fs.promises.readFile('file.txt','utf8')
//     console.log(readasync)
//     var superage=await superagent.get(`https://api.nationalize.io?name=${readasync}`)
//     var s=superage.body.country[0].country_id
//     fs.promises.writeFile('writefile.txt',s)
//     console.log("success")
//     }
//     catch(err)
//     {
//         console.log(err)
//     }
// }
// async()


    const readprom = (fileName, encoding) => {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, encoding, (err, data) => {
                if (err) {
                    return reject(err);
                }
    
                resolve(data);
            });
        });
    }
    
    readprom('file.txt','utf8')
    .then(data => 
    {
        console.log(data);
        return superagent.get(`https://api.nationalize.io?name=${data}`)
        .then((dat)=>
        {
            var s=dat.body.country[0].country_id
            return  writeprom('writefile.txt',`${s}`)
            .then(() => 
            {
                 console.log(" sucesss ");
            })
        });
    })
    .catch(err => 
    {
        console.log(err);
    });
         
    const writeprom = (fileName, encoding) => 
    {
        return new Promise((resolve, reject) => 
        {
            fs.writeFile(fileName, encoding, (err, data) => 
            {
                if (err) 
                {
                    return reject(err);
                }
                resolve(data);
            });
        });
    }
        
       
           


// fs.readFile('C:\\Users\\vkottapalli\\nodeDemo\\file.txt','utf8',(err,data)=>
// {
//     if(err)console.log(err)
//     {
//         superagent.get(`https://api.nationalize.io?name=${data}`,(err,data)=>
//         {
//             if(err)console.log(err)
//             {
//                 var a=data.body.country[0].country_id;
//                 fs.writeFile('writefile.txt',`${a}`,(err)=>
//                 {
//                     if(err)console.log(err);
//                     console.log("successful")
                    
//                 })
                
//             }
//         })
        
//     }
// })




