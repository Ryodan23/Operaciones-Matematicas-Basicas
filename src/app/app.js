const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

mongoose.set('strictQuery', false);
mongoose.connect("Connection-String",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const router = require("./router/router")
const statics = __dirname.replace("app","public")
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set("port",process.env.PORT || 5500)
app.set("views","./src/public/view")
app.set("view engine","pug")

app.use(morgan("dev"))
app.use(express.static(statics))
app.use(router)

module.exports = app