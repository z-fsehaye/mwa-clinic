const jwt = require('jsonwebtoken')
const authConf = require('dotenv')

authConf.config();

module.exports.generateToken = function (user){
    return jwt.sign(user, process.env.SECRET_KEY)
}

module.exports.isTokenValid = function (token){
    if(token == null) return false;

    if(jwt.verify(token, process.env.SECRET_KEY)){
        return true;
    }
    else{
        return false;
    }
}

module.exports.getLoggedInUser = function(token){
    if(!token) return null;

    return jwt.verify(token, process.env.SECRET_KEY)
}