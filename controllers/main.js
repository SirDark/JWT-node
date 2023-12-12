require('dotenv').config()
const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors/index')

const login = async(req,res) => {
    const {username, password} = req.body
    console.log(username,password)
    if(!username || !password){
        throw new BadRequestError('please provide email and password')
    }

    const id = new Date().getDate()
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:`user created ${username}`, token})
}

const dashboard = async(req,res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, ${req.user.username}`, secret: `Here is you auth data and lucky number ${luckyNumber}`})
}

module.exports ={
    login,
    dashboard
}
