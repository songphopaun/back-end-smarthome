const jwt = require('jsonwebtoken')

const authenticate = (req,res,next)=>{
    try{
        const token = req.headers.token
        const decode = jwt.verify(token,'secretValue')
        req.user = decode
        next()
    }
    catch(error){
        res.status(401).send({message: 'Authenticate Failed'})
    }
}
module.exports = {authenticate}
