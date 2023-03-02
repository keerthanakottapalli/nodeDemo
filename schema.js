const joi=require('joi')
const schema=joi.object({
    id:joi.number().integer().max(100),
    name:joi.string().max(20).required(),
    age:joi.number().integer().min(10),
    language:joi.string().max(15).required()
})

const validate=async (req,res,next)=>
{
    let val=schema.validate(req.body)
    if(val.error)
    {
        console.log("error");
    }else{
        next()
    }
}
module.exports =validate