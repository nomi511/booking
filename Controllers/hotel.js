const Hotel = require("../Models/hotel")

// create
const CreateHotel = async(req,res, next)=>{

    try {

        const newhotel = await Hotel.create(req.body)
        res.status(200).json(newhotel)
        
    } catch (error) {
        next(error)
    }
}

// update

const UpdateHotel = async(req, res, next)=>{

    try {
        const updatehotel = await Hotel.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true}
        )
        res.status(200).json(updatehotel)
        
    } catch (error) {
        next(error)
    }
}



// get

const SingleHotel = async(req, res, next)=>{

    try {
        const updatehotel = await Hotel.findById(
            req.params.id
        )
        res.status(200).json(updatehotel)
        
    } catch (error) {
        next(error)
    }

}

//get all

const AllHotels = async(req, res, next)=>{

    try {
        const updatehotel = await Hotel.find()
        res.status(200).json(updatehotel)
        
    } catch (error) {
        next(error)
    }

}

// delete

const DeleteHotel = async(req, res, next)=>{

    try {
        const updatehotel = await Hotel.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(updatehotel)
        
    } catch (error) {
        next(error)
    }

}


module.exports = {
    CreateHotel,
    UpdateHotel,
    SingleHotel,
    AllHotels,
    DeleteHotel
}