const jwt = require('jsonwebtoken')
const createError = require('./createError')
require('dotenv').config()

const verifyToken = (req, res, next) => {

    const token =  req.cookies.access_token

    if(!token)
    {
        return next(createError(401, "You are not authenticated"))
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err)
        {
            return next(createError(403, "You are not authorised"))
        }
        req.user = user
        next()
    })
}


const verifyUser = (req,res,next) => {
    verifyToken(req,res, ()=>{

        const user = req.user
        
        if(user && (user.id === req.params.id || user.checkAdmin))
        {
            next()
        }else{
            return next(createError(403, "You are not authorised"))
        }

    })
}


const verifyAdmin = (req,res,next) => {

    verifyToken(req,res, ()=>{

        if(req.user.checkAdmin)
        {
            next()

        }else{

            return next(createError(403, "You are not authorised"))
        }
    })

}



module.exports = {
    verifyToken,
    verifyUser,
    verifyAdmin
}