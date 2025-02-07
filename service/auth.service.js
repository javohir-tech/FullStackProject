const userDto = require("../dtos/user.dto")
const userModel = require("../models/user.model")
const bcrypt = require("bcrypt")

class authService {
    async register(email, password) {
        try {
            const existEmail = await userModel.findOne({email})

            if (existEmail) {
                throw new Error(`User with existing email ${email} already registered`)
            }
            const hashPassword = await bcrypt.hash(password, 10)
            const user = await userModel.create({ email, password: hashPassword })

            const userDtos = new userDto(user)
            return { userDtos }
        } catch (error) {
            console.log(`authService regiter Error : ${error}`)
        }
    }
    async activation(id) {
        try {
            const user = await userModel.findById(id)
            if(!user){
                throw new Error("user is no defined")
            }

            user.isActivation = true;
            await user.save()
        } catch (error) {

        }
    }
}

module.exports = new authService