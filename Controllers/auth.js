
const User = require('../Models/user')
const bcrypt = require('bcrypt')
const createError = require('../Middlewares/createError')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const Register = async(req, res, next) => {

    try {

        const newUser = await User.create(req.body)
        res.status(200).json(newUser)
        
    } catch (error) {
        next(error)
    }

}


const Login = async(req, res, next) => {

    try {

        const user = await User.findOne({username: req.body.username})

        if( !user )
        {
            return next(createError(404, "User not found"))
        }

        const pwdCheck = await bcrypt.compare(req.body.password, user.password)

        if(!pwdCheck)
        {
            return next(createError(404, "Password does not match"))
        }

        const token = await jwt.sign({id: user._id, checkAdmin: user.isAdmin}, process.env.JWT_SECRET )

        res.cookie("access_token", token,
        {
            httpOnly: true
        }
        ).status(200).json(user)
        
    } catch (error) {
        next(error)
    }

}


module.exports = {
    Register,
    Login
}