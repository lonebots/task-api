import ErrorResponce from '../utils/errorResponse.js'

const errorHandler = (err, req, res, next) => {

    let error = { ...err }

    error.message = err.message;
    console.log(error)

    //Moongose wrong ObjectId
    if (err.name === 'CastError') {
        const message = `Resource not found with id ${err.value}`;
        error = new ErrorResponce(message, 404)
    }

    //Mongoose error duplicate keys
    if (err.code === 11000) {
        const message = `Duplicate fields are found, User already exist`;
        error = new ErrorResponce(message, 400);
    }

    //Mongoose vaidation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponce(message, 400)
    }

    res.status(error.statusCode || 500).json({ success: false, error: error.message || 'Item not found / Server Error' });
}

export default errorHandler;



