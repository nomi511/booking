const express = require("express")
const router = express.Router()
const {verifyUser, verifyAdmin} = require('../Middlewares/authentication')

const { CreateHotel, UpdateHotel, SingleHotel, AllHotels, DeleteHotel } = require("../Controllers/hotel")

router.route("/create").post(CreateHotel)
router.route("/:id").put(UpdateHotel).get(SingleHotel).delete(DeleteHotel)
router.route("/").get(AllHotels)



module.exports = router