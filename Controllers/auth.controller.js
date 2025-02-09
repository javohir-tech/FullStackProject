const authService = require("../service/auth.service");

class authController {
    async regiter(req, res, next) {
        try {
            const { email, password } = req.body;
            const data = await authService.register(email, password)
            res.cookie("refreshToken", data.refreshToken, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 })
            return res.json(data)
        } catch (error) {
            console.log(`register Error : ${error}`)
        }
    }
    async activation(req, res, next) {
        try {
            const userId = req.params.id
            await authService.activation(userId)
            return res.redirect("http://bnp.suvonov-javohir.uz/")
        } catch (error) {
            console.log(`activation error  : ${error}`)
        }
    }
}

module.exports = new authController()