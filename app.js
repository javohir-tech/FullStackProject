const express = require("express")
const mongoose = require("mongoose")

//env
require("dotenv").config()

//middlewares
const requestTime = require("./middlewares/request-time")

//app
const app = express()

//fileUpload 
const fileUpload = require("express-fileupload")

//middlewares
app.use(requestTime)
app.use(express.json())
app.use(express.static("static"))
app.use(fileUpload({}))

//Routes
app.use("/api/post", require("./Routes/post.router"))
app.use("/api/auth", require("./Routes/auth.router"))
//PORT
const PORT = process.env.PORT

//start function
const startApp = async () => {
    try {
        await mongoose.connect(process.env.DB_URL).then(() => {
            console.log("Conected DB")
            app.listen(PORT, () => {
                console.log(`Listening on http://localhost:${PORT}`)
            })
        })
    } catch (error) {
        console.log(`Conected Error with DB : ${error}`)
    }
}

startApp()