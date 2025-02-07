const express = require("express");

//controller
const authController = require("../Controllers/auth.controller");

const router = express.Router()

router.post("/register", authController.regiter)
router.get("/activation/:id", authController.activation)

module.exports = router