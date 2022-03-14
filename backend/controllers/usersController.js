require('dotenv').config()
const bcrypt = require('bcrypt')
const { use } = require('../routes/usersRouter')
const auth = require('../security/auth')


module.exports.signup = (async (req, res, next) => {
    try {
        const { username, fullname, email, role, password } = req.body
        const salt = await bcrypt.genSalt()
        const hashedPass = await bcrypt.hash(password, salt)
        const object = {
            username,
            fullname,
            email,
            password: hashedPass,
            role: role
        }
        req.db.collection("users").insertOne(object)
        const token = await auth.generateToken(object)
        const response = {
            "token": token,
            "email": email,
            "role": role
        }
        res.status(200).json(response)
    }
    catch {
        res.status(204).json("Try again later")
    }
})
module.exports.login = (async (req, res, next) => {
    let user = await req.db.collection("users").findOne({ email: req.body.email });
    console.log(user)
    if (!user) {
        
        return res.status(200).json({ message: 'User not found!' });
        
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (match) {
        const token = auth.generateToken(user)
        // res.header({token})
        res.status(200).json({ token })
    }
    else {
        res.json({ message: 'Incorrect Password!' })
    }
})
module.exports.checkemail = (async(req,res,next)=>{
    let user = await req.db.collection("users").findOne({email : req.params.email})

    if (user) {
        return res.json({ success: true, data: { exists: true } })
    }
    else {
        return res.json({ success: false, data: { exists: false } })
    }
})






















    // const { email, password } = req.body
    // if (email == null) {
    //     res.status(204).json("Try again")
    // }
    // // try {
    //     const users = await req.db.collection("users").findOne({ "email": email })
    //     const hashedPass = (users.password)
    //     console.log(hashedPass)
      
    //         const bool = (await bcrypt.compare(password, hashedPass))
    //         console.log(bool)
    //         res.status(204).json("bool")

    //     if (bool) {
            

    //         const response = {
    //             "token":  auth.generateToken(process.env.SECRET_KEY),
    //             "email": users.email,
    //             "role": users.role
    //         }
    //         res.status(200).json(response)
    //         // console.log(response)
            
    //     }
    //     else {
    //         res.status(204).json("Try again")
    //     }
    // }
    // catch {
    //     res.status(204).json("Try again")
    // }
    
