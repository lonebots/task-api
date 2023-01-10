import asyncHandler from "../middleware/async.middleware.js";
import ErrorResponce from "../utils/errorResponse.js";
import { validatePassword } from "../service/admin.service.js";
import { signJwt } from "../utils/jwt.utils.js";

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;


export const loginAdminHandler = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    // if user exist -> create a token and send to the frontend
    if (!username || !password) {
        return next(new ErrorResponce("Enter username and password ", 400))
    }

    const user = await validatePassword({ username, password }) // service call -> find user with username and validate the password
    if (!user) {
        return (next(new ErrorResponce("Invalid User Credentials", 401)));
    }

    // create access Token
    console.log("creating token ,",JWT_SECRET)
    const accessToken = signJwt(user.toJSON(), JWT_SECRET, { expiresIn: JWT_EXPIRE, });

    // csend the token to client
    return res.status(200).json({ success: true, accessToken: accessToken })
})