const logger = function(req, res, next){
    console.log("POST middleWare")
    next()
}

module.exports = logger