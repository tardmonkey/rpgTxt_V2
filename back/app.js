require('dotenv').config()
console.log(process.env)
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const User = require("./models/users")

//CONNECTION A MONGODB
//CONNECTION A MONGODB
mongoose.connect("mongodb+srv://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@cluster0.u97ok.mongodb.net/RPGtxtTests")
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("MongoDB connecté");
});

app.use((req,res,next)=>{

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
  })

app.get("/test", (req, res, next)=>{
    res.send("On teste")
})

app.post("/user", (req, res, next) =>{
    delete req.body._id
    const user = new User({
        ...req.body
    })
    user.save()
        .then(() => res.status(200).json({ message : "Utilisateur enregistré"}))
        .catch(error => res.status(400).json({error}))
})

app.get("/user", (req, res, next)=>{
    User.find()
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({error}))
})

async function addUser(){
    try{
        const user = new User({
            nom: "Lenoir",
            prenom: "Robin",
            mail: "lenoir@fake.scam",
            password: "enClairSvp",
        })
       
        await user.save()
        console.log(user)
    }
    catch(err){
        console.log(err.message)
    }
    
}



module.exports = app;

