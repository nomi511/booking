const User = require("../Models/user")


// update

const UpdateUser = async(req, res, next)=>{

    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new: true}
        )
        res.status(200).json(updateUser)
        
    } catch (error) {
        next(error)
    }
}



// get

const SingleUser = async(req, res, next)=>{

    try {
        const updateUser = await User.findById(
            req.params.id
        )
        res.status(200).json(updateUser)
        
    } catch (error) {
        next(error)
    }

}

//get all

const AllUsers = async(req, res, next)=>{

    try {
        const all = await User.find()
        res.status(200).json(all)
        
    } catch (error) {
        next(error)
    }

}

// delete

const DeleteUser = async(req, res, next)=>{

    try {
        const deleteUser = await User.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json(deleteUser)
        
    } catch (error) {
        next(error)
    }

}


module.exports = {
    UpdateUser,
    SingleUser,
    AllUsers,
    DeleteUser
}