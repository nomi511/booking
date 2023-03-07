const express = require("express")
const router = express.Router()
const {verifyUser, verifyAdmin} = require('../Middlewares/authentication')

const { UpdateUser,SingleUser,AllUsers,DeleteUser } = require("../Controllers/user")


router.get("/auth", verifyUser,(req,res,next)=>{
    res.send("you are authenticated")
})
router.put("/:id",verifyUser ,UpdateUser).get("/:id",verifyUser, SingleUser).delete("/:id", verifyUser, DeleteUser)
router.get("/", verifyAdmin, AllUsers)



module.exports = router