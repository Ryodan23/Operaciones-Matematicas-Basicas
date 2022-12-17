const app = require("./app/app")

const port = app.get("port")

app.listen(port , () => {
    console.log(`Servidor Corriendo en el Puerto ${port}`)
})