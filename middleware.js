const jwt=require('jsonwebtoken')
const config=require('./config')

module.exports=(credentials=[])=>
{
    return (req,res,next)=>
    {
        console.log('Authorization middleware')
        if(typeof credentials=== "string")
        {
            credentials=[credentials]
        }

        const token=req.headers['authorization']
        if(!token)
        {
            return res.status(401).send("sorry: access denied")
        }
        else{
            const tokenBody=token.slice(7)

            jwt.verify(tokenBody, config.JWT_SECRET,(err, decoded)=>
            {
                if(err)
                {
                    console.log(`JWT ERROT:${err} `)
                    return res.status(401).send('Error: access denied')
                }
                if(credentials.length>0){
                    if(decoded.scopes && decoded.scopes.length && credentials.some(cred=>decoded.scopes.indexOf(cred)>=0)){
                        next();
                    }
                    else{
                        return res.status(401).send('Error: Access denied')
                    }
                }else{
                    next();
                }
                
            })
            
        }
      
    }
}