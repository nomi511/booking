const express = require('express')
const router = express.Router()

const { CreateRoom, UpdateRoom, SingleRoom, AllRooms, DeleteRoom } = require('../Controllers/room')


router.post("/:hotelid", CreateRoom)
.put("/:id", UpdateRoom)
.delete('/:id/:hotelid', DeleteRoom)
.get("/:id", SingleRoom)
.get("/", AllRooms)



module.exports = router