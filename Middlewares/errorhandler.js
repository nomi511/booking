const errorhandler = (err, req, res, nexr) =>{

    const errStatus = err.status || 500
    const errMessage = err.message || "Someting went wrong!"

    return res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMessage,
        stack: err.stack,
    })

}

module.exports = errorhandler