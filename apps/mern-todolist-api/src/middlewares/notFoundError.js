// handle non existing routes
const notFoundError = (req, res, next) => {
    res.status(404).send({
        message: `Not Found - ${req.originalUrl}`
    })

    next()
}

export default notFoundError;