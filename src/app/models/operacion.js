const mongoose = require("mongoose")
const Schema = mongoose.Schema

const operacionSchema = new Schema({
    operacion: String,
    valores: String
})

const Operacion = mongoose.model("Operacion", operacionSchema)

module.exports = Operacion