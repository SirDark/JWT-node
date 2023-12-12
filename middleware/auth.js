const jwt = require('jsonwebtoken')
const {UnAuthenticatedError} = require('../errors/index')

const authMiddleWare = async (req,res,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')) throw new CustomAPIError('auth error', 500)

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username } = decoded
        req.user = {id, username}
    } catch (error) {
        throw new UnAuthenticatedError('not authorized')
    }
    next()
}

module.exports = authMiddleWare