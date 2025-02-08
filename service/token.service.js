const jwt = require("jsonwebtoken")
const tokenModel = require("../models/token.model")

class tokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.KEY_ACCESS_TOKEN, { expiresIn: "15m" })
        const refreshToken = jwt.sign(payload, process.env.KEY_REFRESH_TOKEN, { expiresIn: "30d" })

        return { accessToken, refreshToken }
    }

    async saveToken(userId, refreshToken) {
        const existToken = await tokenModel.findOne({ user: userId })

        if(existToken){
            existToken.refreshToken = refreshToken
            return existToken.save()
        }

        const token  = await tokenModel.create({user: userId, refreshToken})

        return token
    }
}

module.exports = new tokenService()