const express=require('express')
const app=express()
app.use(express.json())
const swaggerJsdoc=require('swagger-jsdoc')
const swaggerUi=require('swagger-ui-express')
const connection=require('./dummy/orders')


const options = {
    
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Swagger Demo',
        version: '1.0.0',
      },
      servers:[
        {
            url:'http://localhost:3000/'
        }
      ]
    },
    apis: ['swagger.js']
    
  };
const swaggerSpec=swaggerJsdoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 *  components:
 *      schema:
 *          movies:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  name: 
 *                      type: string
 *                  age:
 *                      type: integer
 */



/**
 * @swagger
 * /:
 *  get:
 *      summary: This api is used to check whether the get api is working or not
 *      description: This api is used to check whether the get api is working or not
 *      responses:
 *          200:
 *              description: To test get method...
 */
app.get('/',(req,res)=>
{
   res.send("hello")
    
})

// /**
//  * @swagger
//  * /api/movies:
//  *   post:
//  *     description: This api is used to insert data
//  *     parameters:
//  *     - name: title
//  *       description: Title of the movie
//  *       in: formdata
//  *       required: true
//  *       type: string
//  *     responses:
//  *         201:
//  *             description: Added sucessfully
//  */

// app.post('/api/movies',(req,res)=>
// {
//     res.status(201).send()
// })



/**
 * @swagger
 * /api/movies:
 *  get:
 *      summary: To get all data
 *      description: this api is to used to fetch data
 *      responses:
 *          200:
 *              description: this api is to used to fetch data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/movies'
 */

const data=require('./validate_data.js') 
app.get('/api/movies',(req,res)=>
{
    connection.query("select *from swagger",(err,result)=>
    {
        if(err){
            res.send('error')
        }
        else{
            res.send(result)
        }
    })
})

/**
 * @swagger
 * /api/movies/{id}:
 *  get:
 *      summary: To get all data
 *      description: this api is to used to fetch data
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true  
 *            description: numeric id required
 *            schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: this api is to used to fetch data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/movies'
 */
app.get('/api/movies/:id',(req, res)=>
{
    // var d=data.find(c=>c.id===parseInt(req.params.id))
    // res.send(d)
    let id=req.params.id
    connection.query('SELECT * FROM swagger where id= '+id,(err, result)=>
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

/**
 * @swagger
 * /api/movies/addMovie:
 *  post:
 *      summary: use to insert data
 *      description: this api is to used to fetch data
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schema/movies'
 *      responses:
 *          200:
 *              description: added successfully
 */

// app.post('/api/movies/addMovie',(req,res)=>
// {
//     console.log(req.body) 
//     data.push(req.body)
//     res.sendStatus(201)
// })
app.post('/api/movies/addMovie',(req,res)=>
{

    const data=req.body
    // const data=['keerthi',req.params.id]
    // const data={id:2,name:'keerthana',age:22,language:'javascript'}
    connection.query("insert into swagger set ?",data,(err,result)=>
    {
        if(err){
            res.send('error')
        }
        else{
            res.send(result)
        }
    })
})

/**
 * @swagger
 * /api/movies/{id}:
 *  put:
 *      summary: use to update data
 *      description: this api is to used to fetch data
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true  
 *            description: numeric id required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schema/movies'
 *      responses:
 *          200:
 *              description: updated successfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/movies'
 */
// app.put('/api/movies/:id',(req, res)=>
// {
//     var d=data.find(c=>c.id===parseInt(req.params.id))
//     d.name=req.body.name;
//     res.send(d);
    
// })

app.put('/api/movies/:id',(req,res)=>
{
    const data=[req.body.name,req.params.id]
    //  const data=['keerthana',req.params.id];
     connection.query("update swagger set name=? where id=?",data,(err,result)=>
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


/**
 * @swagger
 * /api/movies/{id}:
 *  delete:
 *      summary: use to delete data
 *      description: this api is to used to delete data
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true  
 *            description: numeric id required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#components/schema/movies'
 *      responses:
 *          200:
 *              description: deleted successfully
 */
// app.delete('/api/movies/:id',(req, res)=>
// {
//     var d=data.find(c=>c.id===parseInt(req.params.id))
//     const index = data.indexOf(d);
//     data.splice(index,1);
//     res.send(d);
    
// })
app.delete('/api/movies/:id',(req,res)=>
{
    // const emp_id=[req.params.id]
    let emp_id=req.params.id
    connection.query("delete from swagger where id = "+emp_id,(err,result)=>
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

app.listen(3000)