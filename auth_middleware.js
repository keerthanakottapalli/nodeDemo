const authpage=(permissions)=>
{
    return (req,res, next)=>
    {
        const userrole=req.body.role
        if(permissions.includes(userrole))
        {
            next()
        }else{
            return res.status(401).json('you have no permission')
        }
    }
}
const authdata=(req, res, next)=>
{
    next()
}
module.exports ={authpage,authdata}