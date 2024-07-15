const express = require('express')
const User = require('../models/userModel')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
router.post("/register", async (req, res) => {
    try {
        const userExists = await User.findOne({email: req.body.email});
        if (userExists) {
            res.send({
                success: false,
                message: "User Already Exists"
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword


        const newUser = new User(req.body)
        await newUser.save()


        res.send({
            success: true,
            message: "You've successfully signed up, please login now!"
        })


    } catch (error) {
        console.log(error)
    }
});


//login
router.post("/login", async (req, res) => {

    //check if the login email exists and password is correct

try {
    const user = await User.findOne({email: req.body.email})
    if(!user){
        res.send({
            success: false,
            message: "User Does not exist , please register"
        })
    }


    const validatePassword = await  bcrypt.compare(req.body.password, user.password)
    if(!validatePassword){
        res.send({
            success: false,
            message: "Invalid Password"
        })
    }

    //generate token
    const token  = jwt.sign({userId:user.id} ,process.env.JWT_SECRET, {expiresIn: "1d"});


      res.send({
        success:true,
          message:"You've successfully logged in",
          token:token
    })


    } catch (error) {
    console.log(error)
    }


});




module.exports = router;