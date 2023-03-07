const Room = require('../Models/room')

const Hotel = require('../Models/hotel')

// create room
const CreateRoom = async(req, res, next) => {

    try {
        const hotelId = req.params.hotelid
        const newroom = await Room.create(req.body)
        
        await Hotel.findByIdAndUpdate(hotelId, { $push : {rooms: newroom._id} })
         

        res.status(200).json(newroom)
        
    } catch (error) {
        next(error)
    }

}



const UpdateRoom = async(req, res, next)=>{

    try {
        const updateRoom = await Room.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true}
        )
        res.status(200).json(updateRoom)
        
    } catch (error) {
        next(error)
    }
}



// get

const SingleRoom = async(req, res, next)=>{

    try {
        const singleRoom = await Room.findById(
            req.params.id
        )
        res.status(200).json(singleRoom)
        
    } catch (error) {
        next(error)
    }

}

//get all

const AllRooms = async(req, res, next)=>{

    try {
        const allRoom = await Room.find()
        res.status(200).json(allRoom)
        
    } catch (error) {
        next(error)
    }

}

// delete

const DeleteRoom = async(req, res, next)=>{

    try {
        const deleteRoom = await Room.findByIdAndDelete(
            req.params.id
        )

        const hotelId = req.params.hotelid
        await Hotel.findByIdAndUpdate(hotelId, { $pull : {rooms: req.params.id} })

        res.status(200).json(deleteRoom)
        
    } catch (error) {
        next(error)
    }

}




module.exports = {
    CreateRoom,
    UpdateRoom,
    SingleRoom,
    AllRooms,
    DeleteRoom

}