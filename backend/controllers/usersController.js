require('dotenv').config()
const bcrypt = require('bcrypt')
const auth = require('../security/auth')


module.exports.signup = (async (req, res, next) => {
    try {
        const user = req.body
        const hashedPass = await bcrypt.hash(password, 10)
        user.password = hashedPass
        req.db.collection("users").insertOne(user)
        const token = auth.generateToken(user)
        const response = {
            "token": token,
            "email": user.email,
            "role": user.role,
            "fullname" : user.fullname
        }
        res.status(200).json(response)
    }
    catch {
        res.status(204).json("Try again later")
    }
})
module.exports.login = (async (req, res, next) => {
    let user = await req.db.collection("users").findOne({ email: req.body.email });
    
    if (!user) {
        
        return res.status(200).json({ message: 'User not found!' });
        
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
        const token = auth.generateToken(user)
        // res.header({token})
        res.status(200).json({
            "token": token,
            "email": user.email,
            "role": user.role,
            "fullname" : user.fullname
        })
    }
    else {
        res.json({ message: 'Incorrect Password!' })
    }
})
module.exports.checkemail = (async(req,res,next)=>{
    let user = await req.db.collection("users").findOne({email : req.params.email})

    if (user != null) {
        return res.json({ success: true, data: { exists: true } })
    }
    else {
        return res.json(null)
    }
})
