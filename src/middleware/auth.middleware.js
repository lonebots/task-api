import asyncHandler from './async.middleware.js'
import { findUserById } from '../service/admin.service.js'
import { verifyJwt } from '../utils/jwt.utils.js'
import ErrorResponce from '../utils/errorResponse.js'

const JWT_SECRET = process.env.JWT_SECRET;

export const protect = asyncHandler(async (req, res, next) => {
    if (req.headers.authorization?.startsWith('Bearer')) {
        try {
            // Get token from header
            const token = req.headers.authorization.split(' ')[1]

            //Verify token
            const decoded = verifyJwt(token, JWT_SECRET)

            // Get user from the token
            const user = await findUserById(decoded._id)
            
            return next() //if user then call next

        } catch (error) {
            console.log(error)
            next(new ErrorResponce("Not ??Authorized to access this route", 401))
        }
    }
    if (!token) {
        next(new Error("Not authorized. No token", 401))
    }

})

