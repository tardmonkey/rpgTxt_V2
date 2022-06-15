const mongoose = require("mongoose");

const sauvegardeSchema = mongoose.Schema({
    gameID: {type: String, required: true},
    playerID: {type: String, required: true},
    nom: {type: String, required: true},
    textNodeID: {type: String, required: true},
    caracteristiques: [{
        nom: {type: String, required: true},
        valeur: {type: String, required: true},
    }]
})


module.exports = mongoose.model("Sauvegarde", sauvegardeSchema)
