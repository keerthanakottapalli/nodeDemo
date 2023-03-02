const mysql =require('mysql')
// require('dotenv').config()

const connection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'dummy'
})
// connection.connect((err)=>
// {
//     if(err)console.log(err)
//     console.log("connected");
// })
module.exports = connection