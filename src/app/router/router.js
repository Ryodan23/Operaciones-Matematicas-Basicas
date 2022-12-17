const router = require("express").Router()
const Operacion = require("../models/operacion")

router.get("/", async (req,res, next)=> {
    const operacionesDB = await Operacion.find()
    const escribe = require('fs')
    const data = JSON.stringify(operacionesDB)
    
    setTimeout(function(){
        escribe.writeFile('./src/public/datosDB.json', data, (err) => {
            if (err) console.log(err);
        })
    },5000)

    res.render("page/index",{})
    next()
})

router.post("/", async (req,res)=> {
    let operador = "";
    const body = req.body

    if(body.Operacion=='Suma'){
        operador = '+';

        data = {
            operacion: body.Operacion,
            valores: `${body.number1} ${operador} ${body.number2} = ${body.total}`
        }

    }else if(body.Operacion=='Resta'){
        operador = '-';

        data = {
            operacion: body.Operacion,
            valores: `${body.number1} ${operador} ${body.number2} = ${body.total}`
        }

    }else if(body.Operacion=='Multiplicacion'){
        operador = '*';

        data = {
            operacion: body.Operacion,
            valores: `${body.number1} ${operador} ${body.number2} = ${body.total}`
        }

    }else if(body.Operacion=='Division'){
        operador = '/';

        if(body.number1 == 0 || body.number2 == 0){
            setTimeout(function(){
                res.redirect("/")
            },3000)
        }else{
            data = {
                operacion: body.Operacion,
                valores: `${body.number1} ${operador} ${body.number2} = ${body.total}`
            }
        }
    }

    try {
        const operacionDB = new Operacion(data)
        await operacionDB.save()

        setTimeout(function(){
            res.redirect("/")
        },2000)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = router