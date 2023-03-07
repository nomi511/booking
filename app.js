const express = require("express")
require('dotenv').config()
const mongoose = require("mongoose")
const app = express();
const errorHandler = require('./Middlewares/errorhandler')
const cookieParser = require('cookie-parser')
const {verifyToken} = require('./Middlewares/authentication')

// routes
const hotelRoutes = require("./Routes/hotel")
const authRoutes = require('./Routes/auth')
const userRoutes = require('./Routes/user')
const roomRoutes = require('./Routes/room')


// middlewares
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/hotels", verifyToken ,hotelRoutes)
app.use("/api/v1/users" ,userRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/rooms", roomRoutes)


// error handler
app.use(errorHandler)

const connect = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URI, ()=>{console.log("db connected...")})
        
    } catch (error) {
        throw error
    }

}


app.listen(8800, ()=>{

    connect()
    console.log("app listening on port 8800...")

})