import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// for signing jwt token
export function signJwt(object, JWT_SECRET, options) {

    return jwt.sign(object, JWT_SECRET, {
        ...options,
    })
}

// for verifying jwt token
export function verifyJwt(token, JWT_SECRET) {
    // return the decoded object after token verification
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        return {
            valid: true,
            expired: false,
            decoded
        }
    } catch (error) {
        return {
            valid: false,
            expired: error.message === "jwt expired",
            decoded: false,
        }

    }
}
