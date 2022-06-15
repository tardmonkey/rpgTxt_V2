const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    mail: {type: String, required: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: () => Date.now, immutable: true},
    updatedAt: {type: Date, default: () => Date.now},
    likedGames: [mongoose.SchemaTypes.ObjectId] 
})


module.exports = mongoose.model("User", userSchema)